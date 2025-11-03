import { InputEmail } from "./forms/InputEmail";

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
            <div className="bg-[#F4F7FB] justify-center flex">
                <div className="flex justify-between w-7xl">

                    <div className="flex gap-[125px]">
                        <div>
                            <div className="grid gap-4">
                                <h1 className="font-semibold">Каталог товаров</h1>
                                <div className="grid gap-3 ">
                                    <a href="" className="text-[#5D6C7B]!">Электросамокаты</a>
                                    <a href="" className="text-[#5D6C7B]!">Электроскутеры</a>
                                    <a href="" className="text-[#5D6C7B]!">Электровелосипеды</a>
                                    <a href="" className="text-[#5D6C7B]!">Электровелосипеды</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid gap-4">
                                <h1 className="font-semibold">Покупателям</h1>
                                <div className="flex gap-10">
                                    <div className="grid gap-3">
                                        <a href="" className="text-[#5D6C7B]!">Сервисный центр</a>
                                        <a href="" className="text-[#5D6C7B]!">Доставка и оплата</a>
                                        <a href="" className="text-[#5D6C7B]!">Рассрочка</a>
                                        <a href="" className="text-[#5D6C7B]!">Тест-драйв</a>
                                    </div>
                                    <div className="grid gap-3">
                                        <a href="" className="text-[#5D6C7B]!">Блог</a>
                                        <a href="" className="text-[#5D6C7B]!">Сотрудничество</a>
                                        <a href="" className="text-[#5D6C7B]!">Контакты</a>
                                        <a href="" className="text-[#5D6C7B]!">Акции</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <h1 className="font-semibold">Контакты</h1>
                            <button className="text-[#6F73EE]">Заказать звонок</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}