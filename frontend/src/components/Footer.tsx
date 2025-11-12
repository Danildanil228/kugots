import { AlertDialog, Button, Checkbox, RadioCards } from "@radix-ui/themes";
import { InputEmail } from "./forms/InputEmail";
import { useState } from 'react';
import { PhoneNumber } from "./forms/PhoneNumber";
import { Link } from "react-router-dom";
import { Messengers } from "./buttons/Messengers";

export function Footer(){
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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
            const response = await fetch('http://localhost:3000/api/subscribe', {
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
                setIsDialogOpen(true);
                setEmail('');
                setIsEmailValid(false);
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка при подписке');
        } finally {
            setIsLoading(false);
        }
    };
    return(
        <>
            <div className="flex justify-center bg-[#6F73EE] py-6">
                <div className="flex items-center justify-between w-7xl">
                    <div className="text-white font-semibold w-[600px] text-xl uppercase">
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

                            <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                                <AlertDialog.Content maxWidth="800px" height="44 hover:border-[]0px" className=''>
                                    <div className='justify-end flex'>
                                        <AlertDialog.Action><img src='./crest.svg' className='rotate-45 cursor-pointer'></img></AlertDialog.Action>
                                    </div>
                                    <div className="grid gap-7 justify-center text-center">
                                        <h1 className="text-[25px] font-semibold uppercase">Благодарим за подписку<br/>на рассылку</h1>
                                        <p>Перейдите в свою почту, чтобы подтвердить подписку и получить<br/>видеообзор «Топ-3 электросамоката 2021г.»</p>
                                        <p className="text-[#5D6C7B]">Выберите свой почтовый сервис</p>
                                        <div className="flex gap-4 justify-center">
                                            <a   className="p-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href=""><img src="./searchIc.svg" alt="" /></a>
                                            <a  className="p-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]" href=""><img src="./yandexIc.svg" alt="" /></a>
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
                            <AlertDialog.Root >
                            <AlertDialog.Trigger className=''>
                                <Button className='bg-transparent! text-[#6F73EE]! font-normal! text-[16px]! items-center! p-0! m-0!  transition-colors duration-200! cursor-pointer!'>Заказать звонок</Button>
                            </AlertDialog.Trigger>
                            <AlertDialog.Content maxWidth="900px" height="650px" className='bg-[url("./maskmodal.svg")] bg-no-repeat bg-cover bg-center bg-left-12'>
                                <div>
                                    <div className='justify-end flex'>
                                        <AlertDialog.Action><img src='./crest.svg' className='rotate-45 cursor-pointer'></img></AlertDialog.Action>
                                    </div>
                                    <div className='flex'>
                                        <div className='grid gap-9'>
                                            <div className='grid gap-4'>
                                                <h1 className='text-[25px] font-semibold uppercase w-115'>Оставьте заявку и получите профессиональную консультациюот нашего менеджера</h1>
                                                <p className='w-80'>Позвоним в течение 5 минут и ответим на все вопросы.</p>
                                            </div>
                                            <div className='grid w-[250px] gap-5'>
                                                <div className="grid gap-2">
                                                    <p className="text-[#5D6C7B]">Как с вами удобнее связаться?</p>
                                                    <div className="flex gap-4">
                                                        <RadioCards.Root defaultValue="1" className="flex! ">
                                                            <RadioCards.Item value="1" className="px-[30px] py-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]">
                                                                <img  className="w-[18px] " src="./viber.svg" alt="" />
                                                            </RadioCards.Item>
                                                            <RadioCards.Item value="2" className="px-[30px] py-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]">
                                                                <img className="w-[18px] " src="./whatsap.svg" alt="" />
                                                            </RadioCards.Item>
                                                            <RadioCards.Item value="3" className="px-[30px] py-4 border border-[#EAEBED] rounded-[5px] hover:border-[#6F73EE]">
                                                                <img  className="w-[18px] "src="./tg.svg" alt="" />
                                                            </RadioCards.Item>
                                                        </RadioCards.Root>
                                                    </div>
                                                </div>
                                                <PhoneNumber/>
                                                <button className='bg-[#6F73EE] py-4 rounded-[5px] text-white'>Позвоните мне</button>
                                                <div className='flex items-baseline gap-3'>
                                                    <Checkbox variant="soft" defaultChecked />
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