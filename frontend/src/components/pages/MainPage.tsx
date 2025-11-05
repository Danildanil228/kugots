import { WatchAll } from "../buttons/WatchAll";

export function MainPage(){
    return(
        <>
            <div className="grid justify-center">
                <div className="Электросамокаты ">
                    <div className="flex justify-between w-7xl items-center">
                        <p className="font-semibold uppercase">Электросамокаты</p>
                        <div className="flex gap-3">
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px]">Хиты продаж</button>
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px]">Для города</button>
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px]">Для взрослых</button>
                            <button className="text-[#5D6C7B] px-5 py-3 bg-[#F4F7FB] rounded-[5px]">Для детей</button>
                        </div>
                    </div>
                    <div className="database">

                    </div>
                    <div className="flex justify-center">
                        <WatchAll/>
                    </div>
                </div>

                <div className="Подбор модели электросамоката">

                </div>
            </div>

            <div className="Бесплатная доставка электросамокатов по России до 01.09">

            </div>

            <div className="Популярные категории">

            </div>

            <div className="Kugoo-Russia — первый официальный дилер Kugoo Kirin в России">

            </div>

            <div className="Предлагаем самые выгодные цены на продукты Kugoo за счет прямых поставок">

            </div>
        </>
    )
}