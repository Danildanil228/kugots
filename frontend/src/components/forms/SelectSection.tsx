import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import { Link } from "react-router-dom";

export function SelectSection(){
    const [product, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState<'shop' | 'service'>('shop');
    const activeStyles = "bg-white text-[#6F73EE] border border-[#6F73EE]";
    const inactiveStyles = "bg-[#F4F7FB] text-[#5D6C7B] border border-[#F4F7FB] hover:bg-white hover:text-[#6F73EE] hover:border hover:border-[#6F73EE]";
    
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/product`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <>
            <div className="justify-center grid gap-8 lg:gap-13">
                {/* Переключатели табов - адаптированные для мобильных */}
                <div className="flex gap-3 lg:gap-5 justify-center">
                    <button 
                        onClick={() => setActiveTab('shop')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'shop' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Интернет магазин
                    </button>
                    <button 
                        onClick={() => setActiveTab('service')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'service' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Сервисный центр
                    </button>
                </div>
                
                {/* Контент табов */}
                <div className="flex justify-center">
                    {activeTab === 'shop' && (
                        <div className="grid gap-6 lg:gap-10 w-full max-w-7xl px-4 lg:px-0">
                            {/* Первая строка - 3 колонки на десктопе, 1 на мобильном */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./cart.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">{product.length} товаров в каталоге</h2>
                                    <p className="text-sm lg:text-base">Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.</p>
                                </div>
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./wallet.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">5 способов оплаты</h2>
                                    <p className="text-sm lg:text-base">Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                                </div>
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./gal.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Полная документация и гарантия 1 год</h2>
                                    <p className="text-sm lg:text-base">При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
                                </div>
                            </div>
                            
                            {/* Вторая строка */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./delivery.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Отправка заказа день в день</h2>
                                    <p className="text-sm lg:text-base">Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре</p>
                                </div>
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./proc.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Рассрочка без переплат</h2>
                                    <div>
                                        <p className="text-sm lg:text-base">В нашем магазине можно приобрести любой товар в рассрочку.</p>
                                        <button className="text-[#6F73EE] text-sm lg:text-base mt-1">Подробнее про условия рассрочки</button>
                                    </div>
                                </div>
                                <div className="p-4 lg:p-8 border rounded-[5px] border-[#EAEBED] bg-[url('./masksam.svg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start min-h-[120px] lg:min-h-auto">
                                    <p className="text-left font-semibold text-base lg:text-[18px]">Больше в каталоге</p>
                                    <button className="flex items-center gap-2 text-[#6F73EE] text-sm lg:text-base mt-1">
                                        <p>Перейти</p>
                                        <img src="./arrow6.svg" className="w-[11px]" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'service' && (
                        <div className="grid gap-6 lg:gap-10 w-full max-w-7xl px-4 lg:px-0">
                            {/* Первая строка для сервиса */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./cart.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Ремонт от 1 дня</h2>
                                    <p className="text-sm lg:text-base">Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p>
                                </div>
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./wallet.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Гидроизоляция для долгой службы</h2>
                                    <p className="text-sm lg:text-base">Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.</p>
                                </div>
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./gal.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Ремонтируем только то, что сломалось</h2>
                                    <p className="text-sm lg:text-base">Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</p>
                                </div>
                            </div>
                            
                            {/* Вторая строка для сервиса */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                                <div className="text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./delivery.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px] pt-3 lg:pt-5">Даем гарантию 14 дней на ремонт</h2>
                                </div>
                                <div className="grid gap-2 text-start p-4 lg:p-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./proc.svg" alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
                                    <h2 className="mt-1 font-semibold text-base lg:text-[18px]">Оригинальные запчасти</h2>
                                    <p className="text-sm lg:text-base">Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p>
                                </div>
                                <div className="p-4 lg:p-8 border rounded-[5px] border-[#EAEBED] bg-[url('./maskshur.svg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start min-h-[120px] lg:min-h-auto">
                                    <p className="text-left font-semibold text-base lg:text-[18px]">Больше в сервисе</p>
                                    <Link to='/service' className="flex items-center gap-2 text-[#6F73EE] text-sm lg:text-base mt-1">
                                        <p>Перейти</p>
                                        <img src="./arrow6.svg" className="w-[11px]" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}