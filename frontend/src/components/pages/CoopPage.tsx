import { Checkbox } from "@radix-ui/themes";
import { Breadcrumbs } from "../Breadcrumbs";
import { PhoneNumber } from "../forms/PhoneNumber";
import { useState } from "react";
import { useFormSubmit } from "../forms/useFormSubmit";
import { ScrollToTop } from "../ScrollToTop";
import { HitProduct } from "../forms/HitProduct";
import { CaruselSlider } from "../forms/CaruselSlider";
import { AccordionDemo } from "../forms/AccordionDemo";
import { useApiData } from "../useApiData";

export default function CoopPage(){
        const [phone, setPhone] = useState('');
        const [isPhoneValid, setIsPhoneValid] = useState(false);
        const [isChecked, setIsChecked] = useState(true);
        const [isSubmitted, setIsSubmitted] = useState(false);
        const { data: submesData } = useApiData('/submes');
    
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
                    <div className="flex justify-center bg-[#6F73EE] rounded-xl py-9 items-center my-20">
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
                    {/* {Доставляем со складов по Москве, Краснодару и минску бесплатно, по России — любой транспортной компанией на ваш выбор} */}
                    <div className="grid justify-center text-center grid-cols-1">
                        <div className=" justify-center grid">
                            <h1 className="sm:w-[978px] font-semibold uppercase text-2xl sm:text-[35px]">Доставляем со складов по <span className="text-[#6F73EE]"> Москве, Краснодару и минску бесплатно</span>, по России — любой транспортной компанией на ваш выбор</h1>
                            <p className="my-6">Ежегодно оформляем и доставляем более 1 000 оптовых и розничных заказов.<br/>Всегда в наличии на складах весь ассортимент, представленный в каталоге.</p>
                        </div>
                        <div>
                            <img src="./map.svg" alt="" />
                        </div>
                    </div>
                    {/* {Покупайте товар тогда, когда получите} */}
                    <div className="grid justify-center text-center grid-cols-1 mt-20">
                        <div className=" justify-center grid">
                            <h1 className="sm:w-[978px] font-semibold uppercase text-2xl sm:text-[35px]">Покупайте товар тогда, когда получите на него заказ и оплату от своего клиента</h1>
                            <p className="my-10">За 4 года разработали удобную схему дропшипинга</p>
                        </div>
                        <div className="justify-center flex">
                            <img src="./buybg.svg" alt="" />
                        </div>
                    </div>
                    {/* {Получите готовый план развития бизнесапо продаже товаров Kugoo} */}
                    <div className="justify-center grid my-25">
                        <div className="sm:w-[1440px] bg-[#6F73EE] text-white rounded-2xl justify-between gap-30 flex-wrap flex sm:px-20 px-2 py-10">
                            <div>
                                <p className="bg-[#75D14A] p-1 w-fit text-white rounded-xl hidden md:block mb-4">Бесплатно</p>
                                <h1 className="uppercase sm:text-[35px] text-2xl sm:w-130 font-semibold text-center sm:text-start flex-wrap flex">Получите готовый план развития бизнесапо продаже товаров Kugoo</h1>
                                <p className="sm:text-start my-4 text-center font-semibold">Подготовим для вас бизнес-план, который включает:</p>
                                <div className="sm:grid sm:grid-cols-1 gap-3 text-center justify-center sm:text-start">
                                    <div className="text-start flex gap-4 items-center">
                                        <img className="w-4" src="./CheckCirclew.svg" alt="" />
                                        <p>индивидуальный прайс-лист</p>
                                    </div>
                                    <div className="flex gap-3 text-start">
                                        <img className="w-4" src="./CheckCirclew.svg" alt="" />
                                        <p>расчет прогнозируемой прибыли и сроков окупаемости</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                       <img className="w-4" src="./CheckCirclew.svg" alt="" />
                                        <p>бренд-зону Kugoo</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <img className="w-4" src="./CheckCirclew.svg" alt="" />
                                        <p>разработку сайта</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <img className="w-4" src="./CheckCirclew.svg" alt="" />
                                        <p>и еще +15 услуг под ключ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6F73EE] text-white w-full max-w-[400px] justify-center text-center rounded-[10px] px-5 py-8 border">
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
                    {/* {Kugoo — самый популярный бренд электротранспорта в России} */}
                    <div className="flex justify-center">
                        <div className="sm:flex justify-between sm:w-7xl grid gap-3">
                            <div className="grid gap-5">
                                <h1 className="text-2xl sm:text-[35px] uppercase font-semibold text-center sm:text-start sm:w-100">Kugoo — самый популярный бренд электротранспорта в России</h1>
                                <p className="sm:w-108">Количество поисковых запросов от потенциальных клиентов в 2020 г. по сравнению с 2019 г. выросло в 2 раза согласно сервису оценки спроса и популярности.</p>
                                <p className="sm:w-108">Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос на продукцию от завода Jilong выше в несколько раз.</p>
                            </div>
                            <div>
                                <img src="./yandexbg.svg" className="" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='justify-center grid mt-20'>
                        <div className='justify-center text-center gap-3 lg:gap-4 grid mb-6 lg:mb-0'>
                            <h1 className='uppercase font-semibold text-2xl lg:text-[35px] sm:w-170'>1 600+ положительных оценок покупателей о продуктах Kugoo</h1>
                            <div className='flex justify-center'>
                                <button className='text-[#6F73EE] flex gap-2 items-center text-center text-sm lg:text-base'>
                                    <p>Читать отзывы на Яндекс</p>
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
                <CaruselSlider/>
            <section className="justify-center flex container">
                <div className="grid">
                    {/* Общаемся с клиентами, чтобы знать пожелания и предлагать лучший ассортимент и сервис */}
                    <div className="justify-between sm:w-7xl sm:flex grid">
                        <div className="grid text-center sm:text-start">
                            <h1 className="text-2xl sm:text-[35px] font-semibold uppercase sm:w-180">Общаемся с клиентами, чтобы знать пожелания и предлагать лучший ассортимент и сервис</h1>
                            <p>И еще приняли активное участие в выставке «Велокульт 2021»</p>
                            <button className='text-[#6F73EE] flex gap-2 items-center justify-center sm:justify-start text-sm lg:text-base'>
                                <p>Смотреть как это было</p>
                                <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                            </button>
                        </div>
                        <div className="bg-[#F4F7FB] p-8 sm:w-[300px] text-white rounded-2xl grid gap-3">
                            
                            <div className="justify-between flex  bg-[#4B729F] p-4 rounded-2xl">
                                <div className="flex gap-5">
                                    <img src="./vkser.svg" alt="" />
                                    <p>{submesData[0]?.mes}</p>
                                </div>
                                <p>{submesData[0]?.sub}</p>
                            </div>
                            <div className="justify-between flex  bg-linear-to-r from-amber-500 via-red-500 to-purple-600 p-4 rounded-2xl">
                                <div className="flex gap-5">
                                    <img src="./instser.svg" alt="" />
                                    <p>{submesData[1]?.mes}</p>
                                </div>
                                <p>{submesData[1]?.sub}</p>
                            </div>
                            <div className="justify-between flex  bg-[#E53935] p-4 rounded-2xl">
                                <div className="flex gap-5">
                                    <img src="./yser.svg" alt="" />
                                    <p>{submesData[2]?.mes}</p>
                                </div>
                                <p>{submesData[2]?.sub}</p>
                            </div>
                            <div className="justify-between flex  bg-[#039BE5] p-4 rounded-2xl">
                                <div className="flex gap-5">
                                    <img src="./tgser.svg" alt="" />
                                    <p>{submesData[3]?.mes}</p>
                                </div>
                                <p>{submesData[3]?.sub}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-center gap-6 lg:gap-[60px] my-8 lg:my-20">
                        <div className="flex justify-center">
                            <h2 className="text-xl lg:text-[35px] uppercase font-semibold text-center px-4 lg:px-0">
                                Отвечаем на вопросы покупателей
                            </h2>
                        </div>
                        <div className="w-full px-4 lg:px-0">
                            <AccordionDemo/>
                        </div>
                    </div> 

                    {/* Обсудите индивидуальное коммерческое предложение */}
                    <div className="justify-center grid my-25">
                        <div className="sm:w-[1440px] bg-[#F4F7FB] text-black rounded-2xl justify-between gap-30 flex-wrap flex sm:px-20 px-2 py-10">
                            <div>
                                <h1 className="uppercase sm:text-[35px] text-2xl sm:w-150 font-semibold text-center sm:text-start flex-wrap flex">Обсудите индивидуальное коммерческое предложение с личным менеджером</h1>
                                
                                <div className="sm:grid sm:grid-cols-1 gap-3 text-center justify-center sm:text-start mt-20">
                                    <div className="text-start flex gap-4 items-center">
                                        <img className="w-4" src="./CheckCircle.svg" alt="" />
                                        <p>Ознакомитесь с актуальным каталогом;</p>
                                    </div>
                                    <div className="flex gap-3 text-start">
                                        <img className="w-4" src="./CheckCircle.svg" alt="" />
                                        <p>Узнаете, какие категории товаров пользуются наибольшим спросом;</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                       <img className="w-4" src="./CheckCircle.svg" alt="" />
                                        <p>Получите доступ к выгодным ценам на закупку оптом.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="bg-[#6F73EE] text-white w-full max-w-[400px] justify-center text-center rounded-[10px] px-5 py-8 border">
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
                </div>
            </section>
        </>
    )
}