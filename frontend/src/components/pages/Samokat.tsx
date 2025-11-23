import { Breadcrumbs } from "../Breadcrumbs";
import { useState, useMemo } from 'react';
import { DropdownMenu, Button, Checkbox, Slider } from "@radix-ui/themes";
import { useApiData } from "../useApiData";
import { formatPrice, getTagColor } from '../format';
import { ActionIcon } from "../buttons/ActionIcon";
import { AlertOrderProduct } from "../forms/AlertOrderProduct";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  oldprice: number;
  img: string;
  acum: string;
  speed: string;
  power: string;
  time: string;
  descr: string;
  type: string;
  count: number;
  weight?: string;
  range?: string;
  motorPower?: string;
}

export default function Samokat() {
  const [priceSort, setPriceSort] = useState('asc');
  const [rangeSort, setRangeSort] = useState('asc');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [filters, setFilters] = useState({
    type: [] as string[],
    audience: [] as string[],
    weight: [] as string[],
    range: [] as string[],
    motorPower: [] as string[],
  });
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Берем все товары без ограничения по типу
  const { data: products, loading } = useApiData<Product>('/product');

  // Фильтрация и сортировка товаров
  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products.filter(product => {
      // Фильтр по цене
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Фильтр по типу
      if (filters.type.length > 0 && !filters.type.includes(product.type)) {
        return false;
      }

      // Фильтр по весу (примерная логика)
      if (filters.weight.length > 0) {
        const productWeight = product.weight || 'medium';
        if (!filters.weight.includes(productWeight)) {
          return false;
        }
      }

      return true;
    });

    // Сортировка по цене
    if (priceSort) {
      filtered.sort((a, b) => {
        return priceSort === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }

    // Сортировка по дальности хода
    if (rangeSort) {
      filtered.sort((a, b) => {
        const aRange = parseInt(a.range || a.time) || 0;
        const bRange = parseInt(b.range || b.time) || 0;
        return rangeSort === 'asc' ? aRange - bRange : bRange - aRange;
      });
    }

    return filtered;
  }, [products, priceRange, filters, priceSort, rangeSort]);

  const handleFilterChange = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  // Товар месяца (берем первый из базы для примера)
  const productOfMonth = products?.[0];

  return (
    <>
      <section className="container justify-center flex min-h-screen">
        <div className="">
            <div className="mt-10 sm:px-20">
                <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Каталог', path: '/catalog'}, {label: 'Электросамокаты'} ]}/> 
            </div>
            <div className="justify-center flex ">
                <img src="./sambg2.svg" className="sm:w-[1440px]" alt="" />
            </div>
            {/* До 01.09 бесплатная доставка самокатов по всей России */}
            <div className="flex justify-center pt-8 lg:pt-[110px]">
                <div className="hidden lg:block bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                    <div className="justify-end w-7xl grid gap-9 py-[67px]">
                        <p className="text-white bg-[#EE685F] w-fit px-[11px] py-1 rounded-[5px]">Акция</p>
                        <h1 className="uppercase font-semibold text-[35px] text-white w-110">Бесплатная доставка Электросамокатов По России до 01.09</h1>
                        <button className="w-fit px-[25px] py-[15px] bg-white rounded-[5px]">Подробнее</button>
                    </div>
                </div>
                <div className="lg:hidden bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px]">
                    <div className="flex flex-col justify-end items-end gap-4 py-6 px-4 h-full">
                        <p className="text-white bg-[#EE685F] w-fit px-3 py-1 rounded-[5px] text-sm">Акция</p>
                        <h1 className="uppercase font-semibold text-lg text-white text-right">
                            Бесплатная доставка Электросамокатов<br/>По России до 01.09
                        </h1>
                        <button className="px-4 py-2 bg-white rounded-[5px] text-sm font-medium">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>

          {/* Заголовок и сортировка */}
          <div className="grid justify-center sm:flex sm:justify-between items-center my-8 px-4">
            <h1 className="text-2xl lg:text-[35px] font-semibold uppercase">Электросамокаты</h1>
            <div className="sm:flex gap-4 grid">
              <span className="hidden lg:inline text-gray-700">Сортировать:</span>
              
              {/* Сортировка по цене */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button className="bg-white! text-gray-700! border! border-gray-300! hover:border-[#6F73EE]! text-sm">
                    По цене {priceSort === 'asc' ? '↑' : '↓'}
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => setPriceSort('asc')}>
                    По возрастанию
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setPriceSort('desc')}>
                    По убыванию
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>

              {/* Сортировка по дальности хода */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button className="bg-white! text-gray-700! border! border-gray-300! hover:border-[#6F73EE]! text-sm">
                    По дальности хода {rangeSort === 'asc' ? '↑' : '↓'}
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => setRangeSort('asc')}>
                    По возрастанию
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setRangeSort('desc')}>
                    По убыванию
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>

          {/* Мобильные фильтры */}
          <div className="lg:hidden px-4 mb-6">
            <div className="bg-[#F4F7FB] rounded-lg p-6">
              <h3 className="font-semibold mb-4">Фильтры</h3>
              
              {/* Фильтр по цене */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Цена, ₽</h4>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input 
                      type="number" 
                      placeholder="От"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                    <input 
                      type="number" 
                      placeholder="До"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    />
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Основные фильтры */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Тип</h4>
                  <div className="space-y-1">
                    {['city', 'offroad', 'winter'].map(type => (
                      <label key={type} className="flex items-center gap-2 text-sm">
                        <Checkbox
                          checked={filters.type.includes(type)}
                          onCheckedChange={() => handleFilterChange('type', type)}
                        />
                        <span>
                          {type === 'city' && 'Городской'}
                          {type === 'offroad' && 'Внедорожный'}
                          {type === 'winter' && 'Зимний'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Для кого</h4>
                  <div className="space-y-1">
                    {['adult', 'child', 'senior'].map(audience => (
                      <label key={audience} className="flex items-center gap-2 text-sm">
                        <Checkbox
                          checked={filters.audience.includes(audience)}
                          onCheckedChange={() => handleFilterChange('audience', audience)}
                        />
                        <span>
                          {audience === 'adult' && 'Для взрослых'}
                          {audience === 'child' && 'Для детей'}
                          {audience === 'senior' && 'Для пенсионеров'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="w-full py-3 text-[#6F73EE] border border-[#6F73EE] rounded-lg hover:bg-[#6F73EE] hover:text-white transition-colors mt-4 text-sm"
              >
                {showAllFilters ? 'Скрыть фильтры' : 'Показать все фильтры'}
              </button>

              {showAllFilters && (
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Вес</h4>
                    <div className="space-y-1">
                      {['light', 'medium', 'heavy'].map(weight => (
                        <label key={weight} className="flex items-center gap-2 text-sm">
                          <Checkbox
                            checked={filters.weight.includes(weight)}
                            onCheckedChange={() => handleFilterChange('weight', weight)}
                          />
                          <span>
                            {weight === 'light' && 'Легкие'}
                            {weight === 'medium' && 'Средние'}
                            {weight === 'heavy' && 'Тяжелые'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Дальность хода</h4>
                    <div className="space-y-1">
                      {['short', 'medium', 'long'].map(range => (
                        <label key={range} className="flex items-center gap-2 text-sm">
                          <Checkbox
                            checked={filters.range.includes(range)}
                            onCheckedChange={() => handleFilterChange('range', range)}
                          />
                          <span>
                            {range === 'short' && 'До 20 км'}
                            {range === 'medium' && '20-40 км'}
                            {range === 'long' && 'Более 40 км'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Мощность мотор-колеса</h4>
                    <div className="space-y-1">
                      {['low', 'medium', 'high'].map(power => (
                        <label key={power} className="flex items-center gap-2 text-sm">
                          <Checkbox
                            checked={filters.motorPower.includes(power)}
                            onCheckedChange={() => handleFilterChange('motorPower', power)}
                          />
                          <span>
                            {power === 'low' && 'До 350W'}
                            {power === 'medium' && '350-500W'}
                            {power === 'high' && 'Более 500W'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Основной контент - фильтры и товары */}
          <div className="flex gap-8 px-4">
            {/* Левая колонка - фильтры (десктоп) */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-[#F4F7FB] rounded-lg p-6 mb-6">
                {/* Фильтр по цене */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Цена, ₽</h3>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="От"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      />
                      <input 
                        type="number" 
                        placeholder="До"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      />
                    </div>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Фильтр по типу */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Тип</h3>
                  <div className="space-y-2">
                    {['city', 'offroad', 'winter'].map(type => (
                      <label key={type} className="flex items-center gap-2">
                        <Checkbox
                          checked={filters.type.includes(type)}
                          onCheckedChange={() => handleFilterChange('type', type)}
                        />
                        <span>
                          {type === 'city' && 'Городской'}
                          {type === 'offroad' && 'Внедорожный'}
                          {type === 'winter' && 'Зимний'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Основные фильтры */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Для кого</h3>
                  <div className="space-y-2">
                    {['adult', 'child', 'senior'].map(audience => (
                      <label key={audience} className="flex items-center gap-2">
                        <Checkbox
                          checked={filters.audience.includes(audience)}
                          onCheckedChange={() => handleFilterChange('audience', audience)}
                        />
                        <span>
                          {audience === 'adult' && 'Для взрослых'}
                          {audience === 'child' && 'Для детей'}
                          {audience === 'senior' && 'Для пенсионеров'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Дополнительные фильтры */}
                {showAllFilters && (
                  <>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-4">Вес</h3>
                      <div className="space-y-2">
                        {['light', 'medium', 'heavy'].map(weight => (
                          <label key={weight} className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.weight.includes(weight)}
                              onCheckedChange={() => handleFilterChange('weight', weight)}
                            />
                            <span>
                              {weight === 'light' && 'Легкие'}
                              {weight === 'medium' && 'Средние'}
                              {weight === 'heavy' && 'Тяжелые'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-4">Дальность хода</h3>
                      <div className="space-y-2">
                        {['short', 'medium', 'long'].map(range => (
                          <label key={range} className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.range.includes(range)}
                              onCheckedChange={() => handleFilterChange('range', range)}
                            />
                            <span>
                              {range === 'short' && 'До 20 км'}
                              {range === 'medium' && '20-40 км'}
                              {range === 'long' && 'Более 40 км'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-4">Мощность мотор-колеса</h3>
                      <div className="space-y-2">
                        {['low', 'medium', 'high'].map(power => (
                          <label key={power} className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.motorPower.includes(power)}
                              onCheckedChange={() => handleFilterChange('motorPower', power)}
                            />
                            <span>
                              {power === 'low' && 'До 350W'}
                              {power === 'medium' && '350-500W'}
                              {power === 'high' && 'Более 500W'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <button 
                  onClick={() => setShowAllFilters(!showAllFilters)}
                  className="w-full py-3 text-[#6F73EE] border border-[#6F73EE] rounded-lg hover:bg-[#6F73EE] hover:text-white transition-colors"
                >
                  {showAllFilters ? 'Скрыть фильтры' : 'Показать все фильтры'}
                </button>
              </div>

              {/* Товар месяца */}
              {productOfMonth && (
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">Товар месяца</h3>
                  <div className="w-full h-[149px] bg-cover bg-center rounded mb-3" 
                       style={{ backgroundImage: `url(${productOfMonth.img})` }} />
                  <h4 className="font-semibold text-sm mb-1">{productOfMonth.name}</h4>
                  <p className="text-[#6F73EE] font-bold">{formatPrice(productOfMonth.price)} ₽</p>
                </div>
              )}

              {/* Помощь менеджера */}
              <div className="bg-[#F4F7FB] rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src="./manager.svg" alt="Менеджер" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold">Анастасия</p>
                    <p className="text-sm text-gray-600">Ваш менеджер</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-[#6F73EE] text-white rounded-lg hover:bg-[#5a5fd8] transition-colors">
                  Задать вопрос
                </button>
              </div>
            </div>

            {/* Правая часть - товары */}
            <div className="flex-1">
              {/* Первая строка - помощь покупателю */}
              <div className="bg-[#F4F7FB] rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Не можете выбрать подходящую модель?</h3>
                    <p className="text-gray-600 mb-4">Мы поможем подобрать самокат именно для ваших нужд</p>
                    <button className="px-6 py-2 bg-[#6F73EE] text-white rounded-lg hover:bg-[#5a5fd8] transition-colors">
                      Подобрать самокат
                    </button>
                  </div>
                  <img src="./dum.svg" alt="Помощь" className="w-32 h-32 hidden lg:block" />
                </div>
              </div>

              {/* Сетка товаров */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6F73EE]"></div>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Компонент карточки товара
function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="border border-[#EAEBED] rounded-xl hover:shadow-lg transition-shadow">
        <div 
          className="w-full h-48 bg-cover bg-center rounded-t-xl relative"
          style={{ backgroundImage: `url(${product.img})` }}
        >
          <div className="flex items-center justify-between p-2">
            <div className={`py-1 px-2 rounded-[5px] text-white text-xs ${getTagColor(product.descr)}`}>
              {product.descr}
            </div>
            <ActionIcon type="compare" product={product}/>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-3 leading-tight">{product.name}</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
            <div className="flex items-center gap-1">
              <img src="./acum.svg" className="w-4 h-4" alt="Батарея" />
              <span className="text-gray-600">{product.acum} mAh</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="./speed.svg" className="w-4 h-4" alt="Скорость" />
              <span className="text-gray-600">{product.speed} км/ч</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="./power.svg" className="w-4 h-4" alt="Мощность" />
              <span className="text-gray-600">{product.power} кВт</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="./time.svg" className="w-4 h-4" alt="Время" />
              <span className="text-gray-600">{product.time} ч</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div>
              {product.oldprice && (
                <p className="line-through text-gray-500 text-xs">
                  {formatPrice(product.oldprice)} ₽
                </p>
              )}
              <p className="text-lg font-bold text-[#6F73EE]">
                {formatPrice(product.price)} ₽
              </p>
            </div>
            <div className="grid sm:flex gap-2">
              {product.count > 0 && (
                <ActionIcon type="cart" product={product}/>
              )}
              <ActionIcon type="like" product={product}/>
            </div>
          </div>

          {product.count === 0 ? (
            <AlertOrderProduct product={product}/>
          ) : (
            <button className="w-full py-2 bg-[#6F73EE] text-white rounded-lg hover:bg-[#5a5fd8] transition-colors text-sm">
              Купить в 1 клик
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}