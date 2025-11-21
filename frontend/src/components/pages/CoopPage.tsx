import { Breadcrumbs } from "../Breadcrumbs";

export default function CoopPage(){
    return(
        <>
            <section className="justify-center flex container">
                <div className="grid">
                    <div className="mt-10 sm:px-20">
                        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Сотрудничество'}]}/>  
                    </div>
                    {/* {Покупайте товары Kugoo по оптовым ценамот официального дилера } */}
                    <div className="justify-center grid">
                        <div className="sm:w-[1440px] bg-[#F4F7FB] py-10 rounded-2xl justify-between gap-30 flex-wrap flex sm:px-20 px-2">
                            <div>
                                <h1 className="uppercase sm:text-[35px] text-2xl sm:w-130 font-semibold text-center sm:text-start flex-wrap flex">Покупайте товары Kugoo по оптовым ценам от официального дилера</h1>
                                <p className="sm:text-start my-4 text-center">Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара</p>
                                <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-wrap text-center justify-center sm:text-start">
                                    <div className="flex gap-4 items-center">
                                        <img src="./wal.svg" alt=""></img>
                                        <p className=" w-50">Отсутствие демпинга — контроль цен и МРЦ</p>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <img src="./del.svg" alt=""></img>
                                        <p className=" w-50">Бесплатная доставка до любой ТК</p>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <img src="./img.svg" alt=""></img>
                                        <p className=" w-50">Беспроблемный возврат и замена брака</p>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <img src="./ret.svg" alt=""></img>
                                        <p className=" w-50">Готовый медиаконтент для вашего сайта и соцсетей</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6F73EE] text-white ">
                                <h2 className="text-[20px] text-center uppercase font-semibold w-65">Получите прайс-лист с оптовыми ценами</h2>
                                <p className="w-65 text-center">а также рассчитаем вашу прибыль от продажи товаров Kugoo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}