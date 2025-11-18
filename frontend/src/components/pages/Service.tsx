import SelectSectionService from "../forms/SelectSectionService";

export default function Service(){
    return(
        <>
            <div className="grid justify-center container min-h-screen">
                {/* Проведем диагностику и отремонтируем любую неисправность */}
                <div className="my-20 grid">
                    <div className="justify-center">
                        <h1 className="uppercase font-semibold text-2xl sm:text-[35px] text-center">Проведем диагностику и отремонтируем любую неисправность</h1>
                    </div>
                    <div className="sm:flex py-20 grid gap-10">
                        <div className="grid sm:text-right text-center gap-10">
                            <div className="gap-4 grid sm:w-80">
                                <h1 className="text-2xl sm:text-[20px] font-semibold ">Ремонт от 1 дня</h1>
                                <p className="text-xl sm:text-[16px]">Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p>
                            </div>
                            <div className="gap-4 grid sm:w-80">
                                <h1 className="sm:text-[20px] text-2xl font-semibold">Ремонтируем только то, что сломалось</h1>
                                <p className="text-xl sm:text-[16px]">Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</p>
                            </div>
                            <div className="gap-4 grid sm:w-80">
                                <h1 className="sm:text-[20px] text-2xl font-semibold">Оригинальные запчасти</h1>
                                <p className="text-xl sm:text-[16px]">Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p>
                            </div>
                        </div>
                        <div className="hidden md:block"><img src="./pr.svg" alt="" /></div>
                        <div className="grid sm:text-left text-center gap-10">
                            <div className="gap-4 grid">
                                 <h1 className="sm:text-[20px] text-2xl font-semibold ">Гарантия</h1>
                                 <p className="text-xl sm:text-[16px] ">14 дней на ремонт</p>
                            </div>
                            <div className="gap-4 grid">
                                 <h1 className="sm:text-[20px] text-2xl font-semibold ">Бесплатный ремонт</h1>
                                 <p className="text-xl sm:text-[16px]">в течение 1 года после покупки</p>
                            </div>
                            <div className="gap-4 grid">
                                 <h1 className="sm:text-[20px] text-2xl font-semibold ">Расширенная гарантия</h1>
                                 <p className="text-xl sm:text-[16px] ">до 36 месяцев</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Стоимость ремонта */}
                <div className="grid gap-4 justify-center">
                    <h1 className="text-2xl sm:text-[35px] font-semibold text-center">Стоимость ремонта</h1>
                    <p className="text-center justify-center sm:w-170">Точную стоимость работ вам озвучит специалист сервисного центра после диагностики. Примерные цены на ремонт без учета запчастей смотрите ниже.</p>                
                </div>
                <SelectSectionService/>

                
            </div>

                {/* Определим причину неисправности удаленно или на диагностике! */}
            <div className="flex justify-center pt-8 lg:pt-[110px]">
                <div className="hidden lg:block bg-[url('./bgservice.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                    <div className="justify-end w-7xl grid gap-9 py-[67px]">
                        <p className="text-white bg-[#75D14A] w-fit px-[11px] py-1 rounded-[5px]">Услуга</p>
                        <h1 className="uppercase font-semibold text-[35px] text-white w-110">Определим причину неисправности удаленно или на диагностике!</h1>
                        <button className="w-fit px-[25px] py-[15px] bg-white rounded-[5px]">Записаться на диагностику</button>
                    </div>
                </div>

                <div className="lg:hidden bg-[url('./bgservice.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px]">
                    <div className="flex flex-col justify-end items-end gap-4 py-6 px-4 h-full">
                        <p className="text-white bg-[#75D14A] w-fit px-3 py-1 rounded-[5px] text-sm">Услуга</p>
                        <h1 className="uppercase font-semibold text-lg text-white text-right">
                            Определим причину неисправности<br/>удаленно<br/>или на диагностике!
                        </h1>
                        <button className="px-4 py-2 bg-white rounded-[5px] text-[14px]! font-medium text-[#3C89FD]">
                            Записаться на диагностику
                        </button>
                    </div>
                </div>
            </div>

            {/* Заберем ваш самокат для ремонта и вернем обратно */}
            <div className="flex justify-center pt-8 lg:pt-[110px]">
                <div className="hidden lg:block bg-[url('./bgservice2.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                    <div className="justify-start px-9 w-7xl grid gap-9 py-[67px]">
                        <div>
                            <h1 className="uppercase font-semibold text-[35px] text-black w-110">Заберем ваш самокат для ремонта и вернем обратно</h1>
                            <p className="text-black">Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
                        </div>
                        <div className="grid gap-4">
                            <h1 className="font-semibold">Что дает гидроизоляция:</h1>
                            <div className="flex gap-10">
                                <div className="flex gap-2.5">
                                    <img src="./CheckCircle.svg" alt="" />
                                    <p className="w-50">600 руб. в одну сторону</p>
                                </div>
                                <div className="flex gap-2.5">
                                    <img src="./CheckCircle.svg" alt="" />
                                    <p className="w-50">1000 руб. туда-обратно</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-fit px-[25px] py-[15px] bg-[#6F73EE] text-white rounded-[5px]">Заказать доставку</button>
                    </div>
                </div>

                <div className="lg:hidden bg-[url('./bgservice2.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px]">
                    <div className="flex flex-col justify-start text-left items-start gap-4 py-6 px-4 h-full">
                        <div>
                            <h1 className="uppercase font-semibold text-lg text-black">Заберем ваш самокат<br/>для ремонта<br/>и вернем обратно</h1>
                            <p>Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
                        </div>
                        <button className="px-4 py-2 bg-[#6F73EE] rounded-[5px] text-[14px]! font-medium text-white">
                            Заказать доставку
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pl-5 sm:p-0">
                <div className="sm:grid-cols-2 grid justify-between w-7xl"> 
                    <div className="hidden md:block"><img className="w-[600px]" src="./ser.svg" alt="" /></div>
                    <div className="grid gap-3 max-w-125">
                        <h1 className="text-[25px] font-semibold">Сделаем гидроизоляцию электросамоката</h1>
                        <p>которая позволит вам кататься в любую погоду</p>
                        <p>Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.</p>
                        <h2 className="text-xl font-semibold">Что дает гидроизоляция:</h2>
                        <div className="grid gap-4">
                            <div className="flex gap-3">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Возможность выезжать в дождь или после дождя</p>
                            </div>
                            <div className="flex gap-3">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Можно ездить в любое время года</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Защита от влаги, пыли и грязи продлит срок беспроблемного использования.</p>
                            </div>
                        </div>
                        <p>Подробнее про гидроизоляцию прочитайте в <a href="">нашей статье</a></p>
                    </div>
                    <div className="grid gap-3 max-w-125">
                        <h1 className="text-[25px] font-semibold">Продлим срок службы вашего самоката в 2 раза</h1>
                        <p>благодаря настройкам от специалистов с опытом 7+ лет</p>
                        <p>Перед продажей каждый покупатель может заказать у нас дополнительную услугу – настройка самоката. Для разных моделей Kugoo настройка может отличаться.</p>
                        <h2 className="text-xl font-semibold">Что входит в настройку:</h2>
                        <div className="grid gap-4">
                            <div className="flex gap-3">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Регулировка натяжения тормозного троса</p>
                            </div>
                            <div className="flex gap-3">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Регулировка положения тормозной ручки</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Регулировка тормозных механизмов</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>Протяжка всех соединений</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <img className="w-5" src="./CheckCircle.svg" alt="" />
                                <p>И еще более 35 работ.</p>
                            </div>
                        </div>
                        <p>Подробнее про настройку прочитайте в<a href="">нашей статье</a></p>
                    </div>
                    <div className="hidden md:block"><img src="./sam.svg" alt="" /></div>
                </div>
            </div>

            {/* {Стоимость гидроизоляции и настройки} */}
            <div className="justify-center grid mt-20">
                <div className="sm:text-center">
                    <h1 className="sm:text-[35px] text-2xl font-semibold text-center">Стоимость гидроизоляции и настройки</h1>
                    <p>Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}