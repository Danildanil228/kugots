
import { AccordionDemo } from "../forms/AccordionDemo";
import SelectSectionService from "../forms/SelectSectionService";
import SelectSectionServicePrice from "../forms/SelectSectionServicePrice";
import TeamSwiper from "../forms/TeamSwiper";
import { ScrollToTop } from "../ScrollToTop";
import { useState } from "react";
import { Modal, ModalClose } from "../ui/Modal";
import { PhoneNumber } from "../forms/PhoneNumber";
import { AlertDialog, Checkbox, RadioCards } from "@radix-ui/themes";
import { useApiData } from "../useApiData";
import { useFormSubmit } from "../forms/useFormSubmit";
import { Breadcrumbs } from "../Breadcrumbs";

export default function Service(){
        const [email, setEmail] = useState('');
        const [isEmailValid, setIsEmailValid] = useState(false);
        const [isSubscribeDialogOpen, setIsSubscribeDialogOpen] = useState(false); 
        const [isCallDialogOpen, setIsCallDialogOpen] = useState(false); 
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
    
        const handleCloseCallDialog = () => {
            setIsCallDialogOpen(false);
            setPhone('');
            setIsPhoneValid(false);
            setIsSubmitted(false);
        };
    
    return(
        <>
            <div className="flex justify-center container mt-10!">
                <div className="justify-between w-7xl">
                    <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Сервис'}]}/>   
                </div>
            </div>
            <ScrollToTop/>
            <div className="flex justify-center pt-8 ">
                <div className="hidden lg:block bg-[url('./bgservicehead.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                    <div className="justify-start px-9 w-7xl grid gap-9 py-[67px]">
                        <div>
                            <h1 className="uppercase font-semibold text-[35px] text-white w-130">Ремонт и обслуживание товаров Kugoo Kirin</h1>
                            <p className="text-white">в фирменных сервисых центрах</p>
                        </div>
                        <div className="flex gap-10 text-white items-center">
                            <div className="flex gap-3 w-70">
                                <img className="w-10" src="./rec3.svg" alt="" />
                                <p>Сервисные центры в Москве, Санкт-Петербурге и Краснодаре</p>
                            </div>
                            <div className="flex gap-3 w-50">
                                <img className="w-10" src="./rec2.svg" alt="" />
                                <p>Гарантия 14 дней на ремонт</p>
                            </div>
                            <div className="flex gap-3 w-75">
                                <img className="w-10" src="./rec1.svg" alt="" />
                                <p>Всегда в наличии оригинальные запчасти от производителя</p>
                            </div>
                        </div>
                        <button className="w-fit px-[25px] py-[15px] bg-white text-[#F3A712] rounded-[5px]">Записаться</button>
                    </div>
                </div>

                <div className="lg:hidden bg-[url('./bgservicehead.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px]">
                    <div className="flex flex-col justify-start text-left items-start gap-4 py-6 px-4 h-full">
                        <div>
                            <h1 className="uppercase font-semibold text-lg text-black">Ремонт и обслуживание товаров Kugoo Kirin</h1>
                            <p>в фирменных сервисых центрах</p>
                        </div>
                        <button className="px-4 py-2 bg-white text-[#F3A712] rounded-[5px] text-[14px]! font-medium ">
                            Записаться
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid justify-center container min-h-screen">
                {/* Проведем диагностику и отремонтируем любую неисправность */}
                <div className="my-20 grid">
                    <div className="justify-center">
                        <h1 className="uppercase font-semibold text-2xl sm:text-[35px] text-center">Проведем диагностику и отремонтируем любую неисправность</h1>
                    </div>
                    <div className="sm:flex py-20 grid gap-20">
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
                        <div className="hidden md:block "><img src="./pr.svg" alt="" /></div>
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
                <div className="grid gap-4 justify-center mb-10">
                    <h1 className="text-2xl sm:text-[35px] font-semibold text-center uppercase">Стоимость ремонта</h1>
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
                        <AlertDialog.Root open={isCallDialogOpen} onOpenChange={setIsCallDialogOpen}>
                            <AlertDialog.Trigger>
                                <button className="w-fit px-[25px] py-[15px] bg-white rounded-[5px]">Записаться на диагностику</button>
                            </AlertDialog.Trigger>
                            <Modal 
                                open={isCallDialogOpen} 
                                onOpenChange={setIsCallDialogOpen} 
                                maxWidth="900px"
                                className='bg-[url("./maskmodal.svg")] bg-no-repeat bg-cover bg-center bg-left-12'
                            >
                                <div>
                                    <ModalClose onClick={handleCloseCallDialog} />
                                    <div className='flex'>
                                        <div className='grid gap-9'>
                                            <div className='grid gap-4'>
                                                <h1 className='text-[25px] font-semibold uppercase w-115'>Оставьте заявку и получите профессиональную консультацию от нашего менеджера</h1>
                                                <p className='w-80'>Позвоним в течение 5 минут и ответим на все вопросы.</p>
                                            </div>
                                            <div className='grid w-[250px] gap-5'>
                                                <div className="grid gap-2">
                                                    <p className="text-[#5D6C7B]">Как с вами удобнее связаться?</p>
                                                    <div className="flex gap-4">
                                                        <RadioCards.Root defaultValue="1" className="flex! ">
                                                            <RadioCards.Item value="1" className="px-[30px] py-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]">
                                                                <img className="w-[18px] " src="./viber.svg" alt="" />
                                                            </RadioCards.Item>
                                                            <RadioCards.Item value="2" className="px-[30px] py-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]">
                                                                <img className="w-[18px] " src="./whatsap.svg" alt="" />
                                                            </RadioCards.Item>
                                                            <RadioCards.Item value="3" className="px-[30px] py-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]">
                                                                <img className="w-[18px] "src="./tg.svg" alt="" />
                                                            </RadioCards.Item>
                                                        </RadioCards.Root>
                                                    </div>
                                                </div>
                                                <PhoneNumber onPhoneChange={handlePhoneChange} value={phone}/>
                                                {callError && (
                                                    <div className="text-red-500 text-sm mt-1 text-center">{callError}</div>
                                                )}
                                                <button 
                                                    className={`py-3 rounded-[5px] text-white transition-colors ${
                                                        isSubmitted 
                                                            ? 'bg-green-500 cursor-default' 
                                                            : !isPhoneValid || !isChecked || isCallLoading 
                                                                ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                                : 'bg-[#6F73EE] hover:bg-[#5a5fc9]'
                                                    }`}
                                                    onClick={isSubmitted ? undefined : handleCallOrder}
                                                    disabled={isSubmitted || !isPhoneValid || !isChecked || isCallLoading}
                                                >
                                                    {isSubmitted ? 'Отправлено!' : (isCallLoading ? 'Отправка...' : 'Позвоните мне')}
                                                </button>
                                                <div className='flex items-baseline gap-3'>
                                                    <Checkbox variant="soft" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
                                                    <p className='w-59 text-[14px]'>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='text-[#6F73EE]'>политикой конфиденциальности</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </AlertDialog.Root>
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
            {/* {Сделаем гидроизоляцию электросамоката} */}
            <div className="flex justify-center pl-5 sm:p-0 lg:pt-25">
                <div className="grid sm:grid-cols-2 justify-between w-7xl gap-8"> 
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
            
            {/* {Стоимость гидроизоляции и настройки} */}
            <div className="grid gap-4 justify-center mb-10">
                <h1 className="text-2xl sm:text-[35px] font-semibold text-center uppercase">Стоимость гидроизоляции и настройки</h1>
                <p className="text-center justify-center">Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>                
            </div>
            <SelectSectionServicePrice/>

            {/* {Команда сервисного центра} */}
            <div className="flex justify-center container">
                <div>
                    <div>
                        <h1 className="font-semibold uppercase text-2xl sm:text-[35px] text-center mb-10">Команда сервисного центра</h1>
                    </div>
                    <div className="sm:w-7xl  sm:justify-between flex! flex-wrap gap-10">
                        <div className="flex gap-8 pl-8 pr-4 py-4 border rounded-xl border-[#EAEBED]">
                            <img src="./com.svg" alt="" />
                            <p className="sm:w-91 text-[14px]">Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их</p>
                        </div>
                        <div className="flex gap-8 pl-8 pr-4 py-4 border rounded-xl border-[#EAEBED]">
                            <img src="./samk.svg" alt="" />
                            <p className="sm:w-91 text-[14px]">Консультант сервисного центра сопровождает васна протяжении всего времени эксплуатации и помогает решить возникающие вопросы.</p>
                        </div>
                    </div>
                </div>
            </div>
            <TeamSwiper/>
            {/* {Посмотрите на процесс работы} */}
            <div className="hidden md:block">
                <div className="justify-center grid mb-10">
                    <div className="justify-between flex w-7xl items-center ">
                        <h1 className="text-[35px] font-semibold uppercase">Посмотрите<br/>на процесс работы</h1>
                        <div className="flex bg-[#6F73EE] py-4 px-6 rounded-[5px]">
                            <img src="./set.svg" alt="" />
                            <div className="text-white">
                                <p className=" opacity-70 text-[12px]">В среднем</p>
                                <h2 className=" text-[20px]">350 доработок</h2>
                                <p>специалисты выполняют за 1 месяц</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="justify-center flex">
                    <div className="grid gap-7">
                        <div className="flex justify-between w-[1440px]">
                            <img src="./service1.svg" alt="" />
                            <img src="./service2.svg" alt="" />
                            <img src="./service5.svg" alt="" />
                        </div>
                        <div className="flex justify-between">
                            <img src="./service4.svg" alt="" />
                            <img src="./service3.svg" alt="" />
                            <img src="./service6.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* {Отвечаем на вопросы покупателей} */}
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

            {/* {Адреса сервисных центров} */}
            <div className="justify-center grid container">
                <div className="text-center">
                    <h1 className="text-2xl uppercase font-semibold sm:text-[35px]">Адреса сервисных центров</h1>
                </div>
                <div className="sm:w-[1440px] bg-[#F4F7FB] py-10 rounded-2xl justify-center gap-30 flex-wrap flex my-20">
                    <div className="grid gap-4">
                        <h1 className="font-semibold text-[20px] uppercase">Москва</h1>
                        <div className="flex items-start gap-4">
                            <img src="./pin.svg" className="w-[18px]" alt="" />
                            <div>
                                <p className="font-semibold">Ткацкая улица, 5с16</p>
                                <p>Пн - Вс 10:00 - 19:00</p>
                                <a href="">Смотреть на карте</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="./call.svg" className="w-[18px]" alt="" />
                            <p className="font-semibold">+7 (499) 350-76-92</p>
                        </div>
                        <div className="flex gap-4">
                            <img src="./warning.svg" className="w-[18px]" alt="" />
                            <p className="w-70">При себе иметь паспорт для прохождения через пропускной пункт</p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h1 className="font-semibold text-[20px] uppercase">Санкт-Петербург</h1>
                        <div className="flex items-start gap-4">
                            <img src="./pin.svg" className="w-[18px]" alt="" />
                            <div>
                                <p className="font-semibold">Восточно-Кругликовская улица, 86</p>
                                <p>Вт - Сб 10:00 - 20:00</p>
                                <a href="">Смотреть на карте</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="./call.svg" className="w-[18px]" alt="" />
                            <p className="font-semibold">+7 (499) 350-76-92</p>
                        </div>
                    </div>
                    
                    <div className="grid gap-4">
                        <h1 className="font-semibold text-[20px] uppercase">Краснодар</h1>
                        <div className="flex items-start gap-4">
                            <img src="./pin.svg" className="w-[18px]" alt="" />
                            <div>
                                <p className="font-semibold">Восточно-Кругликовская улица, 86</p>
                                <p>Вт - Сб 10:00 - 20:00</p>
                                <a href="">Смотреть на карте</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="./call.svg" className="w-[18px]" alt="" />
                            <p className="font-semibold">+7 (499) 350-76-92</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}