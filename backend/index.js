const express = require('express');
const cors = require('cors');
const pool = require('./server');

const app = express();

// Настройки CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Маршруты продуктов
app.get('/product', async (req, res) => {
  try {
    const { type } = req.query;
    let query = 'SELECT * FROM product';
    let params = [];

    if (type) {
      query += ' WHERE type = $1';
      params.push(type);
    }

    query += ' LIMIT 12'; 

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

app.get('/category', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM category');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

app.get('/product/hit', async (req, res) => {
  try {
    const result = await pool.query("select * from product where descr = 'Хит' limit 4");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});
//subscribersMessengers
app.get('/submes', async (req, res) => {
  try {
    const result = await pool.query("select * from submes");
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
        seccess: false,
        message: 'Email Обязателен для заполнения'
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        seccess: false,
        message: "Некорректный Email"
      });
    }
    const result = await pool.query('insert into subscribers (email) values ($1) returning id, email', [email])
    console.log('Новый подписчик', result.rows[0])
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
    const result = await pool.query(
      'SELECT id, email, subscribed_at FROM subscribers ORDER BY subscribed_at DESC'
    );
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
    if (cleanPhone.length !== 11) { // +7 и 10 цифр
      return res.status(400).json({
        success: false,
        message: 'Некорректный номер телефона'
      });
    }

    // Убираем проверку уникальности и добавляем поля продукта
    const result = await pool.query(
      'INSERT INTO call_orders (phone, type, product_id, product_name, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING id, phone, type, product_id',
      [phone, type, productId || null, productName || null, new Date()]
    );

    console.log('Новая заявка сохранена:', result.rows[0]);

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
});
