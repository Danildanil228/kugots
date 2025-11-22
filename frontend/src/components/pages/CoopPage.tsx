import { Checkbox } from "@radix-ui/themes";
import { Breadcrumbs } from "../Breadcrumbs";
import { PhoneNumber } from "../forms/PhoneNumber";
import { useState } from "react";
import { useFormSubmit } from "../forms/useFormSubmit";
import { ScrollToTop } from "../ScrollToTop";
import { HitProduct } from "../forms/HitProduct";

export default function CoopPage(){
        const [phone, setPhone] = useState('');
        const [isPhoneValid, setIsPhoneValid] = useState(false);
        const [isChecked, setIsChecked] = useState(true);
        const [isSubmitted, setIsSubmitted] = useState(false);
    
    
        const { submit: submitCallOrder, isLoading: isCallLoading, error: callError } = useFormSubmit({
            endpoint: '/api/call-order',
            onSuccess: () => {
                setIsSubmitted(true);
                setPhone('');
                setIsPhoneValid(false);
                setIsChecked(true);
            }
        });
    
        const handlePhoneChange = (value: string, isValid: boolean) => {
            setPhone(value);
            setIsPhoneValid(isValid);
        };
    
        const handleCallOrder = async () => {
            if (!isPhoneValid || !isChecked) return;
            await submitCallOrder({ 
                phone: phone,
                type: 'callback-consult'
            });
        };
    return(
        <>
            <ScrollToTop/>
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
                            <div className="bg-[#6F73EE] text-white w-full max-w-[400px] justify-center text-center rounded-[10px] px-5 py-8">
                                <div className="grid justify-center">
                                    <h2 className="text-[20px] text-center uppercase font-semibold w-65">Получите прайс-лист с оптовыми ценами</h2>
                                    <p className="w-65 text-center">а также рассчитаем вашу прибыль от продажи товаров Kugoo</p>
                                </div>
                                <div className="grid gap-5 mt-8">
                                    <PhoneNumber onPhoneChange={handlePhoneChange} value={phone}/>
                                    <button 
                                        className={`py-3 rounded-[5px] text-[#6F73EE] bg-white transition-colors ${
                                            isSubmitted 
                                                ? 'bg-green-500 cursor-default' 
                                                : !isPhoneValid || !isChecked || isCallLoading 
                                                    ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                    : ''
                                        }`}
                                        onClick={isSubmitted ? undefined : handleCallOrder}
                                        disabled={isSubmitted || !isPhoneValid || !isChecked || isCallLoading}
                                    >
                                        {isSubmitted ? 'Скачано!' : (isCallLoading ? 'Отправка...' : 'Скачать прайс-лист')}
                                    </button>
                                    <div className='flex gap-3 items-center'>
                                        <Checkbox checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
                                        <p className='sm:text-start text-[14px]'>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='underline!'>политикой конфиденциальности</a></p>
                                    </div>

                                </div>
                                    
                                
                            </div>
                        </div>
                    </div>
                    {/* {Выбирайте популярные товары без наценок посредников} */}
                    <div className="mt-20">
                        <div className="justify-center flex uppercase text-2xl font-semibold  text-center sm:text-[35px]">
                            <h1 className="sm:w-170">Выбирайте популярные товары без наценок посредников</h1>
                        </div>
                        <div className="justify-center flex mt-10 sm:mt-0">
                            <HitProduct/>
                        </div>
                    </div>
                    {/* {Выбирайте популярные товары без наценок посредников} */}
                    <div className="justify-center grid gap-8">
                        <div className="sm:flex gap-4 grid justify-between sm:w-7xl items-center">
                            <div className="text-center sm:text-start">
                                <h1 className="uppercase font-semibold text-2xl sm:text-[35px] sm:w-160">Выбирайте популярные товары без наценок посредников</h1>
                                <p>являясь официальным дилером Kugoo в России</p>
                            </div>
                            <div className="flex px-5 py-2 items-center gap-3 border rounded-[10px] border-[#EAEBED] ">
                                <h1 className="sm:text-[50px] font-semibold text-[#6F73EE]">93%</h1>
                                <p className="sm:w-40 leading-4 text-[14px]">партнеров  становятся постоянными, благодаря нашему подходу</p>
                            </div>
                        </div>
                        <div className="grid sm:flex justify-between sm:w-7xl ">
                            <div>
                                <h3 className="font-semibold">Сотрудничая с нами, вы получите:</h3>
                                <div className="flex gap-3 items-center mt-4">
                                    <img className="w-4" src="./CheckCircle.svg" alt="" />
                                    <p>Гарантию на товары 1 месяц и возможность приобрести годовую гарантию</p>
                                </div>
                                <div className="flex gap-3 items-center my-4">
                                    <img className="w-4" src="./CheckCircle.svg" alt="" />
                                    <p>Медиаконтент, который можно разместить на своем сайте и соцсетях</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img className="w-4" src="./CheckCircle.svg" alt="" />
                                    <p>Удобные способы оплаты — наличный и безналичный расчет</p>
                                </div>
                                <div className="flex gap-3 items-center my-4">
                                    <img className="w-4" src="./CheckCircle.svg" alt="" />
                                    <p>Отсутствие демпинга на рынке за счет контролируемой МРЦ</p>
                                </div>

                                <div className="flex gap-5 mt-10 flex-wrap justify-center sm:justify-start">
                                    <div className="text-center bg-[#F4F7FB] p-4 rounded-2xl">
                                        <h1 className="text-[#6F73EE]">До <span className="font-semibold text-[25px]">25%</span></h1>
                                        <p className="w-50">ваша прибыль с продажи единицы товара Kugoo</p>
                                    </div>
                                    <div className="text-center bg-[#F4F7FB] p-4 rounded-2xl">
                                        <h1 className="text-[#6F73EE]">от <span className="font-semibold text-[25px]">3 ШТ.</span></h1>
                                        <p className="w-50">минимальная оптовая партия</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="./sertif.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* {Давайте обсудим условия сотрудничества, которые подходят именно для вашей компании} */}
                    <div className="flex justify-center bg-[#6F73EE] rounded-xl py-9 items-center mt-20">
                        <div className="justify-between sm:w-7xl flex flex-wrap">
                            <div>
                                <h1 className="text-[20px] uppercase font-semibold text-white sm:w-150 sm:text-start text-center">Давайте обсудим условия сотрудничества, которые подходят именно для вашей компании</h1>
                            </div>
                            <div className="flex-wrap flex text-white gap-5 justify-center">
                                <PhoneNumber onPhoneChange={handlePhoneChange} value={phone}/>
                                <button 
                                    className={`py-3 w-50 rounded-[5px] text-[#6F73EE] bg-white transition-colors ${
                                        isSubmitted 
                                            ? 'bg-green-500 cursor-default' 
                                            : !isPhoneValid || !isChecked || isCallLoading 
                                                ? 'bg-[#6F73EE] cursor-not-allowed' 
                                                : ''
                                    }`}
                                    onClick={isSubmitted ? undefined : handleCallOrder}
                                    disabled={isSubmitted || !isPhoneValid || !isChecked || isCallLoading}
                                >
                                    {isSubmitted ? 'Скачано!' : (isCallLoading ? 'Отправка...' : 'Скачать прайс-лист')}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}