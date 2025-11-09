import { WatchAll } from "../buttons/WatchAll";
import { AccordionDemo } from "../forms/AccordionDemo";
import { Product } from "../forms/Product";
import { SwiperHeader } from "../forms/SwiperHeader";

export function MainPage(){
    return(
        <>
            <div className="grid justify-center">
                <div>
                    <SwiperHeader/>
                </div>
                <div className="flex justify-center pb-20">
                    <div className="justify-between flex w-7xl items-center">
                        <div className="flex gap-20">
                            <div>
                                <h1 className="uppercase text-[25px] font-semibold">Гарантия 1 год</h1>
                                <p>на весь ассортимент</p>
                            </div>
                            <div>
                                <h1 className="uppercase text-[25px] font-semibold">Рассрочка</h1>
                                <p>от 6 месяцев</p>
                            </div>
                            
                        </div>
                        <div className="flex items-center gap-[200px]">
                            <div>
                                <h1 className="uppercase text-[25px] font-semibold">Подарки</h1>
                                <p>и бонусы к покупкам</p>
                            </div>
                            <div className="flex gap-[18px] p-3 border border-[#5D6C7B1A] rounded-[5px]">
                                <a href=""><img src="./yandex.svg" alt="" /></a>
                                <div className="text-center">
                                    <p className="text-[#5D6C7B]">Яндекс отзывы</p>
                                    <div className="flex">
                                        <img src="./star.svg" alt="" />
                                        <p className="text-[25px] font-semibold">DataBase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center grid">
                    <div className="flex justify-between w-7xl items-center">
                        <p className="font-semibold uppercase text-[35px]">Электросамокаты</p>
                        <div className="flex gap-3">
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px] hover:text-[#6F73EE] border-[#F4F7FB] border hover:bg-white hover:border-[#6F73EE]">Хиты продаж</button>
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px] hover:text-[#6F73EE] border-[#F4F7FB] border hover:bg-white hover:border-[#6F73EE]">Для города</button>
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px] hover:text-[#6F73EE] border-[#F4F7FB] border hover:bg-white hover:border-[#6F73EE]">Для взрослых</button>
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px] hover:text-[#6F73EE] border-[#F4F7FB] border hover:bg-white hover:border-[#6F73EE]">Для детей</button>
                        </div>
                    </div>
                    <div className="database py-[50px]">
                        <Product/>
                    </div>
                    <div className="flex justify-center">
                        <WatchAll/>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex justify-between w-7xl">
                        <div className="bg-[url('./model.svg')] bg-cover bg-no-repeat bg-center grid gap-3 px-10 py-8 rounded-[5px]">
                            <h1 className="uppercase font-semibold text-2xl w-[250px] leading-10">Подбор модели электросамоката</h1>
                            <p className="w-120">Пройдите тести выберите <br/>электросамокат по своим критериям</p>
                            <button className=" text-[#6F73EE] gap-2 flex items-center">Подобрать модель<img  src="./arrow4.svg" alt="" /></button>
                        </div>
                        <div className="bg-[url('./servise.svg')] bg-cover bg-no-repeat bg-center grid gap-3 px-10 py-8 rounded-[5px]">
                            <h1 className="uppercase font-semibold text-2xl w-[250px] leading-10">Сервисное обслуживание</h1>
                            <p className="w-120">Крупнейший сервисный центр<br/>в России для продуктов Kugoo</p>
                            <button className=" text-[#6F73EE] gap-2 flex items-center">Подобрать модель<img  src="./arrow4.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Бесплатная доставка электросамокатов по России до 01.09">

            </div>

            <div className="Популярные категории">

            </div>

            <div className="Kugoo-Russia — первый официальный дилер Kugoo Kirin в России">

            </div>

            <div className="flex justify-center text-center uppercase font-semibold text-[35px]">
                <div>Предлагаем самые выгодные цены<br/>на продукты Kugoo за счет прямых поставок</div>
                <div>и заботимся об удобстве покупателей</div>
                <div></div>
            </div>
            <div className="grid justify-center gap-[60px]">
                <div className="flex justify-center text-[35px] uppercase font-semibold text-center">Отвечаем на вопросы<br/>покупателей</div>
                <div><AccordionDemo/></div>
                     
            </div>
        </>
    )
}