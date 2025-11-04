import { Messengers } from "./buttons/Messengers";
import { InputEmail } from "./forms/InputEmail";
import { Link, useLocation } from 'react-router-dom';

export function Footer(){
    return(
        <>
            <div className="flex justify-center bg-[#6F73EE] py-6">
                <div className="flex items-center justify-between w-7xl">
                    <div className="text-white font-semibold w-[600px] text-xl uppercase">
                        Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
                    </div>
                    <div className="flex gap-5">
                        <InputEmail/>
                        <button className="text-[#6F73EE] py-4 px-6 bg-white rounded-[5px]">Подписаться</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#F4F7FB] justify-center grid">
                <div className="flex justify-between w-7xl py-10">
                    <div className="flex gap-[125px]">
                        <div>
                            <div className="grid gap-4">
                                <h1 className="font-semibold">Каталог товаров</h1>
                                <div className="grid gap-3">
                                    <a href="" className="text-[#5D6C7B]">Электросамокаты</a>
                                    <a href="" className="text-[#5D6C7B]">Электроскутеры</a>
                                    <a href="" className="text-[#5D6C7B]">Электровелосипеды</a>
                                    <a href="" className="text-[#5D6C7B]">Электровелосипеды</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-4">
                                <h1 className="font-semibold">Покупателям</h1>
                                <div className="flex gap-10">
                                    <div className="grid gap-3">
                                        <a href="" className="text-[#5D6C7B]">Сервисный центр</a>
                                        <a href="" className="text-[#5D6C7B]">Доставка и оплата</a>
                                        <a href="" className="text-[#5D6C7B]">Рассрочка</a>
                                        <a href="" className="text-[#5D6C7B]">Тест-драйв</a>
                                    </div>
                                    <div className="grid gap-3">
                                        <a href="" className="text-[#5D6C7B]">Блог</a>
                                        <a href="" className="text-[#5D6C7B]">Сотрудничество</a>
                                        <a href="" className="text-[#5D6C7B]">Контакты</a>
                                        <a href="" className="text-[#5D6C7B]">Акции</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="font-semibold text-lg">Контакты</h1>
                            <button className="text-[#6F73EE] font-medium">Заказать звонок</button>
                        </div>
                        
                        <div className="grid gap-7">
                            <div className="flex gap-8">
                                <div className="grid gap-2">
                                    <p>Call-центр</p>
                                    <h1 className="font-bold text-[17px]">+7 (800) 505-54-61</h1>
                                    <p>Пн-Вс 10:00 - 20:00</p>
                                </div>
                                <div className="grid gap-2">
                                    <p>Сервисный центр</p>
                                    <h1 className="font-bold text-[17px]">+7 (499) 350-76-92</h1>
                                    <p>Пн-Вс 10:00 - 20:00</p>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="max-w-[150px] grid gap-2">
                                    <p>Магазин в Москве ул. Ткацкая, 5 стр. 16</p>
                                    <p>+7 (499) 406 15 87</p>
                                </div>
                                <div className="max-w-[150px] grid gap-2">
                                    <p>Магазин в Санкт-Петербурге ул. Фрунзе, 2</p>
                                    <p>+7 (499) 406 15 87</p>
                                </div>
                                <div className="max-w-[170px] grid gap-2">
                                    <p>Магазин в Краснодаре ул. Восточно-Кругликовская, 86</p>
                                    <p>+ 7 (800) 505 54 61</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#5D6C7B] w-full h-px opacity-15 mt-10"></div>
                <div className="justify-between flex my-10">
                    <div className="flex items-center gap-[60px]">
                        <Link to="/main" className="">
                            <h1 className="font-bold text-3xl cursor-pointer">KUGOO</h1>
                        </Link>
                        <div className="flex gap-3">
                            <a href=""><img src="./pmk.svg" alt="" /></a>
                            <a href=""><img src="./as.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <a href="">
                            <div className="flex gap-3 py-2 px-4 bg-white rounded-[5px]">
                                <img src="./vksub.svg"  alt="" />
                                <div className="grid">
                                    <p className="font-semibold">ВКонтакте</p>
                                    <p>DataBase</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex gap-3 py-2 px-4 bg-white rounded-[5px]">
                                <img src="./instsub.svg"  alt="" />
                                <div className="grid">
                                    <p className="font-semibold">Instagram</p>
                                    <p>DataBase</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex gap-3 py-2 px-4 bg-white rounded-[5px]">
                                <img src="./youtubesub.svg"  alt="" />
                                <div className="grid">
                                    <p className="font-semibold">YouTube</p>
                                    <p>DataBase</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://t.me">
                            <div className="flex gap-3 py-2 px-4 bg-white rounded-[5px]">
                                <img src="./tgsub.svg"  alt="" />
                                <div className="grid">
                                    <p className="font-semibold">Telegram</p>
                                    <p>DataBase</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bg-[#5D6C7B] w-full h-px opacity-15"></div>
                <div className="flex justify-between py-5">
                    <div className="flex gap-10">
                        <a href="">Реквизиты</a>
                        <a href="">Политика конфиденциальности</a>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex gap-1">
                            <img src="./PM4.svg" alt="" />
                            <img src="./PM3.svg" alt="" />
                            <img src="./PM2.svg" alt="" />
                            <img src="./PM.svg" alt="" />
                            <img src="./PM5.svg" alt="" />
                            <img src="./webmoney.svg" alt="" />
                            <img src="./qiwi.svg" alt="" />
                        </div>
                        <div className="flex gap-4">
                            <p>Online чат:</p>
                            <Messengers/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}