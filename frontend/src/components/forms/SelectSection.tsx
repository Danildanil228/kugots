import axios from "axios";
import { useEffect, useState } from "react";

export function SelectSection(){
    const [product, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState<'shop' | 'service'>('shop');
    const activeStyles = "bg-white text-[#6F73EE] border border-[#6F73EE]";
    const inactiveStyles = "bg-[#F4F7FB] text-[#5D6C7B] border border-[#F4F7FB] hover:bg-white hover:text-[#6F73EE] hover:border hover:border-[#6F73EE]";
    
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/product");
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
            <div className="justify-center grid gap-13">
                <div className="flex gap-5 justify-center">
                    <button 
                        onClick={() => setActiveTab('shop')}
                        className={`py-4 px-6 rounded-[5px] transition-colors  ${
                            activeTab === 'shop' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Интернет магазин
                    </button>
                    <button 
                        onClick={() => setActiveTab('service')}
                        className={`py-4 px-6 rounded-[5px] transition-colors ${
                            activeTab === 'service' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Сервисный центр
                    </button>
                </div>
                <div className="flex justify-center">

                    {activeTab === 'shop' && (
                        <div className="grid justify-center gap-10">
                            <div className="flex justify-between w-7xl">
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./cart.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">{product.length} товаров в каталоге</h2>
                                    <p className="w-85">Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. </p>
                                </div>
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./wallet.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">5 способов оплаты</h2>
                                    <p className="w-85">Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                                </div>
                                <div className="grid gap-3 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./gal.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px] w-50">Полная документация и гарантия 1 год</h2>
                                    <p className="w-85">При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
                                </div>
                                
                            </div>
                            <div className="flex justify-between w-7xl">
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./delivery.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">Отправка заказа день в день</h2>
                                    <p className="w-85">Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре</p>
                                </div>
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./proc.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">Рассрочка без переплат</h2>
                                    <div>
                                        <p className="w-85">В нашем магазине можно приобрести любой товар в рассрочку.</p>
                                        <button className="text-[#6F73EE]">Подробнее про условия рассрочки</button>
                                    </div>
                                </div>
                                <div className="py-[27px] px-8 border rounded-[5px] border-[#EAEBED] bg-[url('./masksam.svg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start w-[382px]">
                                    <p className="text-left font-semibold text-[18px]">Больше в каталоге</p>
                                    <button className="flex items-center gap-2 text-[#6F73EE]">
                                        <p>Перейти</p>
                                        <img src="./arrow6.svg" className="w-[11px]" alt="" />
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    )}
                    {activeTab === 'service' && (
                        <div className="grid justify-center gap-10">
                            <div className="flex justify-between w-7xl">
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./cart.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">Ремонт от 1 дня</h2>
                                    <p className="w-85">Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p>
                                </div>
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./wallet.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">Гидроизоляция для долгой службы</h2>
                                    <p className="w-85">Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.</p>
                                </div>
                                <div className="grid gap-2 text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./gal.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">Ремонтируем только то, что сломалось</h2>
                                    <p className="w-85">Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</p>
                                </div>
                                
                            </div>
                            <div className="flex justify-between w-7xl">
                                <div className=" gap text-start py-[27px] px-5 border rounded-[5px] border-[#EAEBED] w-[382px]">
                                    <img src="./delivery.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px] pt-5">Даем гарантию 14 дней на ремонт</h2>
                                </div>
                                <div className="grid gap-2 text-start py-[27px]  px-5 border rounded-[5px] border-[#EAEBED]">
                                    <img src="./proc.svg" alt="" />
                                    <h2 className="mt-1 font-semibold text-[18px]">Оригинальные запчасти</h2>
                                    <p className="w-85">Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p>
                                </div>
                                <div className="py-[27px] px-8 border rounded-[5px] border-[#EAEBED] bg-[url('./maskshur.svg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start w-[382px]">
                                    <p className="text-left font-semibold text-[18px]">Больше в сервисе</p>
                                    <button className="flex items-center gap-2 text-[#6F73EE]">
                                        <p>Перейти</p>
                                        <img src="./arrow6.svg" className="w-[11px]" alt="" />
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}