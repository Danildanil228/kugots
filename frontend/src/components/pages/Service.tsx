export default function Service(){
    return(
        <>
            <div className="grid justify-center container">

                {/* Проведем диагностику и отремонтируем любую неисправность */}
                <div className="my-20 grid">
                    <div className="justify-center">
                        <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] text-center">Проведем диагностику и отремонтируем любую неисправность</h1>
                    </div>
                    <div className="sm:flex py-20 grid gap-10">
                        <div className="grid sm:text-right text-center gap-10">
                            <div className="gap-4 grid">
                                <h1 className="text-2xl sm:text-[20px] font-semibold ">Ремонт от 1 дня</h1>
                                <p className="text-xl sm:text-[16px] sm:w-80">Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p>
                            </div>
                            <div className="gap-4 grid">
                                <h1 className="sm:text-[20px] text-2xl font-semibold">Ремонтируем только то, что сломалось</h1>
                                <p className="text-xl sm:text-[16px] sm:w-80">Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</p>
                            </div>
                            <div className="gap-4 grid">
                                <h1 className="sm:text-[20px] text-2xl font-semibold">Оригинальные запчасти</h1>
                                <p className="text-xl sm:text-[16px] sm:w-80">Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p>
                            </div>
                        </div>
                        <div className="hidden md:block"><img src="./pr.svg" alt="" /></div>
                        <div className="grid sm:text-left text-center gap-10">
                            <div className="gap-4 grid">
                                 <h1 className="sm:text-[20px] text-2xl font-semibold ">Гарантия</h1>
                                 <p className="text-xl sm:text-[16px] sm:w-80">14 дней на ремонт</p>
                            </div>
                            <div className="gap-4 grid">
                                 <h1 className="sm:text-[20px] text-2xl font-semibold ">Бесплатный ремонт</h1>
                                 <p className="text-xl sm:text-[16px] sm:w-80">в течение 1 года после покупки</p>
                            </div>
                            <div className="gap-4 grid">
                                 <h1 className="sm:text-[20px] text-2xl font-semibold ">Расширенная гарантия</h1>
                                 <p className="text-xl sm:text-[16px] sm:w-80">до 36 месяцев</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Стоимость ремонта */}
                <div>

                </div>
            </div>
        </>
    )
}