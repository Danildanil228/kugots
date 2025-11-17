import { AlertDialog, Button, Checkbox, RadioCards } from "@radix-ui/themes";
import { InputEmail } from "./forms/InputEmail";
import { useEffect, useState } from 'react';
import { PhoneNumber } from "./forms/PhoneNumber";
import { Link } from "react-router-dom";
import { Messengers } from "./buttons/Messengers";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

export function Footer(){
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSubscribeDialogOpen, setIsSubscribeDialogOpen] = useState(false); 
    const [isCallDialogOpen, setIsCallDialogOpen] = useState(false); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEmailChange = (value: string, isValid: boolean) => {
        setEmail(value);
        setIsEmailValid(isValid);
        setError('');
    };

    const handleSubscribe = async () => {
        if (!isEmailValid) return;

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Ошибка при отправке');
            }

            if (result.success) {
                setIsSubscribeDialogOpen(true); 
                setEmail('');
                setIsEmailValid(false);
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка при подписке');
        } finally {
            setIsLoading(false);
        }
    };

    const [data, setData] = useState([]);
    const fetchItems = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/submes`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };
    
    useEffect(() => {
        fetchItems();
    }, []);

    const handleCallOrder = async () => {
        if (!isPhoneValid || !isChecked) return;
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/call-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    phone: phone,
                    type: 'callback-consult'
                }),
            });
            
            if (!response.ok) {
                let errorMessage = 'Ошибка при отправке';
                
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (jsonError) {
                    const textError = await response.text();
                    errorMessage = textError || errorMessage;
                }
                
                throw new Error(errorMessage);
            }
            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true); 
                setPhone('');
                setIsPhoneValid(false);
                setIsChecked(true);
            } else {
                throw new Error(result.message || 'Произошла ошибка');
            }

        } catch (err) {
            console.error('Ошибка:', err);
            setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке заявки');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseCallDialog = () => {
        setIsCallDialogOpen(false);
        setPhone('');
        setIsPhoneValid(false);
        setError('');
    };

    const handleCloseSubscribeDialog = () => {
        setIsSubscribeDialogOpen(false);
    };

    const handlePhoneChange = (value: string, isValid: boolean) => {
        setPhone(value);
        setIsPhoneValid(isValid);
        setError('');
    };

    return(
        <>
            {/* Subscribe Section */}
            <div className="flex justify-center bg-[#6F73EE] py-8 lg:py-12">
                <div className="container">
                    {/* Desktop Version */}
                    <div className="hidden lg:flex lg:items-center lg:justify-between">
                        <div className="text-white font-semibold text-xl uppercase w-[600px]">
                            Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
                        </div>
                        <div className="flex gap-5">
                            <InputEmail onEmailChange={handleEmailChange}/>
                            {error && (
                                <div className="text-red-200 text-sm mt-1">
                                    {error}
                                </div>
                            )}
                            <div className="items-center!">
                                <AlertDialog.Root open={isSubscribeDialogOpen} onOpenChange={setIsSubscribeDialogOpen}>
                                    <AlertDialog.Trigger className='items-center!'>
                                        <Button 
                                            className={`bg-white! text-[#6F73EE]! font-normal! text-[16px]! items-center! py-7! px-6! transition-colors duration-200! ${
                                                !isEmailValid || isLoading ? 'opacity-50 cursor-not-allowed!' : 'cursor-pointer!'
                                            }`}
                                            onClick={handleSubscribe}
                                            disabled={!isEmailValid || isLoading}
                                        >
                                            {isLoading ? 'Отправка...' : 'Подписаться'}
                                        </Button>
                                    </AlertDialog.Trigger>
                                    <AlertDialog.Content maxWidth="800px" height="440px" className=''>
                                        <div className='justify-end flex'>
                                            <AlertDialog.Action>
                                                <img 
                                                    src='./crest.svg' 
                                                    className='rotate-45 cursor-pointer'
                                                    onClick={handleCloseSubscribeDialog}
                                                />
                                            </AlertDialog.Action>
                                        </div>
                                        <div className="grid gap-7 justify-center text-center">
                                            <h1 className="text-[25px] font-semibold uppercase">Благодарим за подписку<br/>на рассылку</h1>
                                            <p>Перейдите в свою почту, чтобы подтвердить подписку и получить<br/>видеообзор «Топ-3 электросамоката 2021г.»</p>
                                            <p className="text-[#5D6C7B]">Выберите свой почтовый сервис</p>
                                            <div className="flex gap-4 justify-center">
                                                <a className="p-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href=""><img src="./searchIc.svg" alt="" /></a>
                                                <a className="p-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href=""><img src="./yandexIc.svg" alt="" /></a>
                                                <a className="p-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href=""><img src="./out.svg" alt="" /></a>
                                                <a className="p-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href=""><img src="./yahoo.svg" alt="" /></a>
                                            </div>
                                            <p className="text-[#5D6C7B]">Если письма не во входящих, проверьте папку «Промоакции»<br/>или «Спам».  Письмо могло попасть туда по ошибке.</p>
                                        </div>
                                    </AlertDialog.Content>
                                </AlertDialog.Root>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Version */}
                    <div className="lg:hidden flex flex-col items-center gap-6 text-center px-4">
                        <div className="text-white font-semibold text-lg uppercase leading-tight">
                            Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
                        </div>
                        <div className="w-full max-w-[400px]">
                            <InputEmail onEmailChange={handleEmailChange}/>
                        </div>
                        {error && (
                            <div className="text-red-200 text-sm -mt-2">
                                {error}
                            </div>
                        )}
                        <div className="w-full max-w-[400px]">
                            <AlertDialog.Root open={isSubscribeDialogOpen} onOpenChange={setIsSubscribeDialogOpen}>
                                <AlertDialog.Trigger className='w-full'>
                                    <Button 
                                        className={`bg-white! text-[#6F73EE]! font-normal! text-[16px]! items-center! py-3! w-full! transition-colors duration-200! rounded-[5px]! ${
                                            !isEmailValid || isLoading ? 'opacity-50 cursor-not-allowed!' : 'cursor-pointer!'
                                        }`}
                                        onClick={handleSubscribe}
                                        disabled={!isEmailValid || isLoading}
                                    >
                                        {isLoading ? 'Отправка...' : 'Подписаться'}
                                    </Button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Content maxWidth="800px" className='max-w-[95vw] mx-auto'>
                                    <div className='p-6'>
                                        <div className='justify-end flex mb-4'>
                                            <AlertDialog.Action>
                                                <img 
                                                    src='./crest.svg' 
                                                    className='rotate-45 cursor-pointer w-6 h-6'
                                                    onClick={handleCloseSubscribeDialog}
                                                    alt="Закрыть"
                                                />
                                            </AlertDialog.Action>
                                        </div>
                                        <div className="grid gap-6 justify-center text-center">
                                            <h1 className="text-xl font-semibold uppercase">Благодарим за подписку на рассылку</h1>
                                            <p className="text-sm">Перейдите в свою почту, чтобы подтвердить подписку и получить видеообзор «Топ-3 электросамоката 2021г.»</p>
                                            <p className="text-[#5D6C7B] text-sm">Выберите свой почтовый сервис</p>
                                            <div className="flex gap-3 justify-center flex-wrap">
                                                <a className="p-3 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href="">
                                                    <img src="./searchIc.svg" alt="Gmail" className="w-6 h-6" />
                                                </a>
                                                <a className="p-3 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href="">
                                                    <img src="./yandexIc.svg" alt="Yandex" className="w-6 h-6" />
                                                </a>
                                                <a className="p-3 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href="">
                                                    <img src="./out.svg" alt="Outlook" className="w-6 h-6" />
                                                </a>
                                                <a className="p-3 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href="">
                                                    <img src="./yahoo.svg" alt="Yahoo" className="w-6 h-6" />
                                                </a>
                                            </div>
                                            <p className="text-[#5D6C7B] text-sm">Если письма не во входящих, проверьте папку «Промоакции» или «Спам». Письмо могло попасть туда по ошибке.</p>
                                        </div>
                                    </div>
                                </AlertDialog.Content>
                            </AlertDialog.Root>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content - Desktop */}
            <div className="hidden lg:block bg-[#F4F7FB]">
                <div className="container py-12!">
                    <div className="flex justify-between">
                        <div className="flex gap-[125px]">
                            <div className="">
                                <div className="grid gap-4">
                                    <h1 className="font-semibold">Каталог товаров</h1>
                                    <div className="grid gap-3">
                                        <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Электросамокаты</a>
                                        <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Электроскутеры</a>
                                        <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Электровелосипеды</a>
                                        <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Аксессуары</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="grid gap-4">
                                    <h1 className="font-semibold">Покупателям</h1>
                                    <div className="flex gap-10">
                                        <div className="grid gap-3">
                                            <Link to='/service' className="text-[#5D6C7B] hover:text-black transition-colors">Сервисный центр</Link>
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Доставка и оплата</a>
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Рассрочка</a>
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Тест-драйв</a>
                                        </div>
                                        <div className="grid gap-3">
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Блог</a>
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Сотрудничество</a>
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Контакты</a>
                                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Акции</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="font-semibold text-lg">Контакты</h1>
                                <AlertDialog.Root open={isCallDialogOpen} onOpenChange={setIsCallDialogOpen}>
                                    <AlertDialog.Trigger className=''>
                                        <Button 
                                            className='bg-transparent! text-[#6F73EE]! font-normal! text-[16px]! items-center! p-0! m-0! transition-colors duration-200! cursor-pointer!'
                                            onClick={() => setIsCallDialogOpen(true)}
                                        >
                                            Заказать звонок
                                        </Button>
                                    </AlertDialog.Trigger>
                                    <AlertDialog.Content maxWidth="900px" height="650px" className='bg-[url("./maskmodal.svg")] bg-no-repeat bg-cover bg-center bg-left-12'>
                                        <div>
                                            <div className='justify-end flex'>
                                                <AlertDialog.Action>
                                                    <img 
                                                        src='./crest.svg' 
                                                        className='rotate-45 cursor-pointer' 
                                                        onClick={handleCloseCallDialog}
                                                    />
                                                </AlertDialog.Action>
                                            </div>
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
                                                        {error && (
                                                            <div className="text-red-500 text-sm mt-1 text-center">{error}</div>
                                                        )}
                                                        <button 
                                                            className={`py-3 rounded-[5px] text-white transition-colors ${
                                                                isSubmitted 
                                                                    ? 'bg-green-500 cursor-default' 
                                                                    : !isPhoneValid || !isChecked || isLoading 
                                                                        ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                                        : 'bg-[#6F73EE] hover:bg-[#5a5fc9]'
                                                            }`}
                                                            onClick={isSubmitted ? undefined : handleCallOrder}
                                                            disabled={isSubmitted || !isPhoneValid || !isChecked || isLoading}
                                                        >
                                                            {isSubmitted ? 'Отправлено!' : (isLoading ? 'Отправка...' : 'Позвоните мне')}
                                                        </button>
                                                        <div className='flex items-baseline gap-3'>
                                                            <Checkbox variant="soft" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
                                                            <p className='w-59 text-[14px]'>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='text-[#6F73EE]'>политикой конфиденциальности</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AlertDialog.Content>
                                </AlertDialog.Root>
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
                </div>
                <div className="bg-[#5D6C7B] w-full h-px opacity-15 mt-10"></div>
                <div className="container py-10">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[60px] py-12">
                            <Link to="/main" className="">
                                <h1 className="font-bold text-3xl cursor-pointer">KUGOO</h1>
                            </Link>
                            <div className="flex gap-3">
                                <a href=""><img src="./pmk.svg" alt="" /></a>
                                <a href=""><img src="./as.svg" alt="" /></a>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {data.map((submes) => (
                                <a href="" key={submes.id}>
                                    <div className="flex gap-3 py-2 px-4 bg-white rounded-[5px]">
                                        <img src={submes.img} alt="" />
                                        <div className="grid">
                                            <p className="font-semibold">{submes.mes}</p>
                                            <p>{submes.sub}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-[#5D6C7B] w-full h-px opacity-15"></div>
                <div className="container py-8">
                    <div className="flex justify-between py-7">
                        <div className="flex gap-10">
                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Реквизиты</a>
                            <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Политика конфиденциальности</a>
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
            </div>

            {/* Mobile Footer - Simplified Version */}
            <div className="lg:hidden bg-[#F4F7FB] py-8">
                <div className="container">
                    {/* Submes in 2 columns */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {data.map((submes) => (
                            <a href="" key={submes.id} className="flex justify-center">
                                <div className="flex gap-3 py-3 px-4 bg-white rounded-[5px] w-full max-w-[200px]">
                                    <img src={submes.img} alt="" className="w-6 h-6" />
                                    <div className="grid">
                                        <p className="font-semibold text-sm">{submes.mes}</p>
                                        <p className="text-sm">{submes.sub}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="bg-[#5D6C7B] w-full h-px opacity-15 my-6"></div>

                    {/* Links - Centered */}
                    <div className="flex flex-col gap-4 items-center text-center mb-10">
                        <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Реквизиты</a>
                        <a href="" className="text-[#5D6C7B] hover:text-black transition-colors">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </>
    )
}