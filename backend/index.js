const express = require('express');
const cors = require('cors');
const pool = require('./server');
const compression = require('compression');

const app = express();

const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; 

// Настройки CORS

app.use(cors({
  origin: function (origin, callback) {
    // Разрешаем запросы без origin (например, из мобильных приложений)
    if (!origin) return callback(null, true);
    
    // Разрешаем localhost и все IP-адреса локальной сети
    const allowedOrigins = [
      'http://localhost:5173',
      'http://127.0.0.1:5173'
    ];
    
    // Добавляем динамически все IP-адреса на 5173 порту
    if (origin.includes(':5173')) {
      return callback(null, true);
    }
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(compression());
app.use(express.json());

// Функция для очистки устаревшего кэша
const cleanupCache = () => {
  const now = Date.now();
  for (const [key, value] of cache.entries()) {
    if (now - value.timestamp > CACHE_DURATION) {
      cache.delete(key);
    }
  }
};

// Очистка кэша каждую минуту
setInterval(cleanupCache, 60000);

// Вспомогательная функция для кэширования
const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
};

// Очистка связанного кэша
const clearRelatedCache = () => {
  const keysToDelete = [];
  for (const key of cache.keys()) {
    if (key.startsWith('products_') || key.startsWith('product_')) {
      keysToDelete.push(key);
    }
  }
  keysToDelete.forEach(key => cache.delete(key));
};


app.get('/product', async (req, res) => {
  try {
    const { type } = req.query;
    const cacheKey = `products_${type || 'all'}`;
    
    // Проверяем кэш
    const cachedData = getCachedData(cacheKey);
    if (cachedData) {
      console.log('Returning cached products');
      return res.json(cachedData);
    }

    console.log('Received request for products with type:', type);
    
    let query = 'SELECT * FROM product';
    let params = [];

    if (type && type !== '') {
      query += ' WHERE type = $1';
      params.push(type);
    }

    query += ' LIMIT 12';

    console.log('Executing query:', query, 'with params:', params);
    
    const result = await pool.query(query, params);
    console.log('Found products:', result.rows.length);
    
    // Сохраняем в кэш
    setCachedData(cacheKey, result.rows);
    
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Ошибка сервера', details: err.message });
  }
});

app.get('/category', async (req, res) => {
  try {
    const cacheKey = 'categories';
    const cachedData = getCachedData(cacheKey);
    
    if (cachedData) {
      console.log('Returning cached categories');
      return res.json(cachedData);
    }

    const result = await pool.query('SELECT * FROM category');
    setCachedData(cacheKey, result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

app.get('/product/hit', async (req, res) => {
  try {
    const cacheKey = 'hit_products';
    const cachedData = getCachedData(cacheKey);
    
    if (cachedData) {
      console.log('Returning cached hit products');
      return res.json(cachedData);
    }

    const result = await pool.query("SELECT * FROM product WHERE descr = 'Хит' LIMIT 4");
    setCachedData(cacheKey, result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

//subscribersMessengers
app.get('/submes', async (req, res) => {
  try {
    const cacheKey = 'submes';
    const cachedData = getCachedData(cacheKey);
    
    if (cachedData) {
      console.log('Returning cached submes');
      return res.json(cachedData);
    }

    const result = await pool.query("SELECT * FROM submes");
    setCachedData(cacheKey, result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

//email
app.post('/api/subscribe', async (req, res) =>{
  try{
    const {email} = req.body;
    if (!email){
      return res.status(400).json({
        success: false,
        message: 'Email обязателен для заполнения'
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Некорректный Email"
      });
    }

    const result = await pool.query(
      'INSERT INTO subscribers (email) VALUES ($1) RETURNING id, email', 
      [email]
    );
    
    console.log('Новый подписчик', result.rows[0]);
    
    // Очищаем кэш подписчиков
    clearRelatedCache();
    
    res.status(201).json({
      success: true,
      message: 'Вы успешно подписались!',
      data: result.rows[0]
    });
  }catch (err) {
    
    if (err.code === '23505') {
      return res.status(409).json({
        success: false,
        message: 'Этот email уже подписан'
      });
    }

    console.error('Ошибка при подписке:', err);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера'
    });
  }
});

app.get('/api/subscribers', async (req, res) => {
  try {
    const cacheKey = 'subscribers_list';
    const cachedData = getCachedData(cacheKey);
    
    if (cachedData) {
      console.log('Returning cached subscribers');
      return res.json(cachedData);
    }

    const result = await pool.query(
      'SELECT id, email, subscribed_at FROM subscribers ORDER BY subscribed_at DESC'
    );
    setCachedData(cacheKey, result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при получении подписчиков');
  }
});

//Телефон
app.post('/api/call-order', async (req, res) => {
  try {
    const { phone, type = 'callback', productId, productName } = req.body;
    console.log('Получена заявка:', { phone, type, productId, productName });

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Телефон обязателен'
      });
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 11) { 
      return res.status(400).json({
        success: false,
        message: 'Некорректный номер телефона'
      });
    }

    const result = await pool.query(
      'INSERT INTO call_orders (phone, type, product_id, product_name, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING id, phone, type, product_id',
      [phone, type, productId || null, productName || null, new Date()]
    );

    console.log('Новая заявка сохранена:', result.rows[0]);

    // Очищаем кэш заказов
    clearRelatedCache();

    let successMessage = 'Заявка принята! Мы позвоним вам в течение 5 минут.';
    if (type === 'orderProduct') {
      successMessage = 'Предзаказ оформлен! Мы сообщим вам о поступлении товара.';
    }

    res.status(201).json({
      success: true,
      message: successMessage,
      data: result.rows[0]
    });

  } catch (err) {
    console.error('Ошибка при создании заявки:', err);
    
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
  console.log('Кэширование включено (5 минут)');
});