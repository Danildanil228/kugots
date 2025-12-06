import { Breadcrumbs } from "../Breadcrumbs";
import { formatPrice } from '../format';
import { useCompare } from "../../contexts/CompareContext";
import { Link } from "react-router-dom";
import { useApiData } from "../useApiData";

export default function Compare() {
    const { compareItems, removeFromCompare } = useCompare();
    
    // Получаем полные данные товаров из базы
    const { data: products, loading } = useApiData<any[]>('/product', []);
    
    // Фильтруем товары из compareItems
    const compareProducts = products.filter(product => 
        compareItems.some(item => item.id === product.id)
    );

    // Данные характеристик (можно расширить при необходимости)
    const characteristics = [
        { name: "Доступность", key: "availability" },
        { name: "Вес", key: "weight" },
        { name: "Мощность", key: "power" },
        { name: "Емкость аккумулятора", key: "acum" },
        { name: "Время полной зарядки", key: "time" },
        { name: "Максимальная скорость", key: "speed" },
        { name: "Максимальный пробег", key: "range" },
        { name: "Максимальная нагрузка", key: "load" },
        { name: "Размер колес", key: "wheelSize" },
        { name: "Тип колес", key: "wheelType" },
        { name: "Габариты, см", key: "dimensions" },
        { name: "Подсветка", key: "lighting" },
        { name: "Привод", key: "drive" },
        { name: "Тормозная система", key: "brakes" },
        { name: "Комплектация", key: "equipment" },
        { name: "Гарантия", key: "warranty" },
        { name: "Сумма скидки", key: "discount" }
    ];

    // Функция для получения значения характеристики
    const getCharacteristicValue = (product, key) => {
        if (!product) return "-";
        
        switch(key) {
            case "availability":
                return product.count > 0 ? "В наличии" : "Нет в наличии";
            case "weight":
                return product.weight || "-";
            case "power":
                return product.power || "-";
            case "acum":
                return product.acum ? `${product.acum} mAh` : "-";
            case "time":
                return product.time ? `${product.time} ч` : "-";
            case "speed":
                return product.speed ? `${product.speed} км/ч` : "-";
            case "range":
                return product.range || "-";
            case "load":
                return product.load || "-";
            case "wheelSize":
                return product.wheelSize || "-";
            case "wheelType":
                return product.wheelType || "-";
            case "dimensions":
                return product.dimensions || "-";
            case "lighting":
                return product.lighting || "-";
            case "drive":
                return product.drive || "-";
            case "brakes":
                return product.brakes || "-";
            case "equipment":
                return product.equipment || "-";
            case "warranty":
                return product.warranty || "-";
            case "discount":
                return product.discount || "-";
            default:
                return product[key] || "-";
        }
    };

    return (
        <section className="flex container justify-center mb-20!">
            <div className="w-7xl">
                <div className="mt-10">
                    <Breadcrumbs items={[
                        { label: 'Главная', path: '/main' },
                        { label: 'Сравнение товаров' }
                    ]} />
                </div>
                
                <div className="mb-10">
                    <h1 className="font-semibold uppercase text-[35px] mb-4">Сравнение</h1>
                    <p className="text-gray-600 mb-6">
                        Здесь вы можете сравнить выбранные товары по различным параметрам и характеристикам, и выбрать оптимальное решение
                    </p>
                    
                    {compareItems.length === 0 ? (
                        <div className="grid gap-4">
                            <div className="justify-center grid w-full text-center items-center bg-[#F4F7FB] gap-3 py-12 rounded-xl">
                                <div className="justify-center flex">
                                    <img src="/bgimc.svg" alt="" />
                                </div>
                                <h1 className="font-semibold text-[25px] uppercase">
                                    Нет товаров для сравнения
                                </h1>
                                <p>
                                    Добавьте товары для сравнения, чтобы увидеть их характеристики
                                </p>
                                <button className="mt-10">
                                    <Link
                                        className="text-white bg-[#6F73EE] px-8 rounded-xl py-2"
                                        to="/catalog"
                                    >
                                        Перейти в каталог
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid gap-8">
                            {/* Кнопки управления */}
                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                <div className="flex gap-4">
                                    <button className="text-[#6F73EE] font-medium px-4 py-2 border border-[#6F73EE] rounded-lg hover:bg-[#6F73EE] hover:text-white">
                                        Все характеристики
                                    </button>
                                    <button className="text-gray-600 font-medium px-4 py-2 border border-gray-300 rounded-lg hover:border-[#6F73EE] hover:text-[#6F73EE]">
                                        Показать различия
                                    </button>
                                </div>
                                <button 
                                    onClick={() => compareItems.forEach(item => removeFromCompare(item.id))}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Удалить все
                                </button>
                            </div>

                            {/* Таблица сравнения */}
                            <div className="overflow-hidden">
                                {/* Заголовок таблицы */}
                                <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-300">
                                    <div className="p-4 font-semibold text-lg">Параметры</div>
                                    {compareProducts.slice(0, 3).map((item, index) => (
                                        <div key={item.id} className="p-4 relative border-l border-gray-300">
                                            <button 
                                                onClick={() => removeFromCompare(item.id)}
                                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                                            >
                                                ✕
                                            </button>
                                            <div className="flex flex-col items-center">
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name}
                                                    className="w-32 h-32 object-cover mb-4"
                                                />
                                                <h3 className="font-semibold text-lg mb-2 text-center">{item.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Заполнитель если меньше 3 товаров */}
                                    {Array.from({ length: 3 - Math.min(compareProducts.length, 3) }).map((_, index) => (
                                        <div key={`empty-${index}`} className="p-4 border-l border-gray-300"></div>
                                    ))}
                                </div>

                                {/* Характеристики */}
                                {characteristics.map((char, index) => (
                                    <div key={index} className="grid grid-cols-4 border-b border-gray-300 hover:bg-gray-50">
                                        <div className="p-4 font-medium border-r border-gray-300">{char.name}</div>
                                        {compareProducts.slice(0, 3).map((product, productIndex) => (
                                            <div key={`${product.id}-${index}`} className="p-4 border-r border-gray-300 last:border-r-0">
                                                <p className="whitespace-pre-line">{getCharacteristicValue(product, char.key)}</p>
                                            </div>
                                        ))}
                                        {/* Заполнитель если меньше 3 товаров */}
                                        {Array.from({ length: 3 - Math.min(compareProducts.length, 3) }).map((_, idx) => (
                                            <div key={`empty-val-${idx}`} className="p-4 border-r border-gray-300 last:border-r-0"></div>
                                        ))}
                                    </div>
                                ))}

                                {/* Цены */}
                                <div className="grid grid-cols-4">
                                    <div className="p-4 font-medium border-r border-gray-300">Цена</div>
                                    {compareProducts.slice(0, 3).map((item) => (
                                        <div key={`price-${item.id}`} className="p-4 border-r border-gray-300 last:border-r-0">
                                            <div className="text-center">
                                                <p className="text-[20px] font-semibold text-black">
                                                    {formatPrice(item.price)} ₽
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Заполнитель если меньше 3 товаров */}
                                    {Array.from({ length: 3 - Math.min(compareProducts.length, 3) }).map((_, idx) => (
                                        <div key={`empty-price-${idx}`} className="p-4 border-r border-gray-300 last:border-r-0"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Если товаров больше 3, показываем сообщение */}
                            {compareProducts.length > 3 && (
                                <div className="text-center py-4 text-gray-500">
                                    Показано только 3 товара. Удалите некоторые товары для сравнения большего количества.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}