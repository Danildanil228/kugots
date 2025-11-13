import { useState, useRef } from 'react';
import { More } from "../buttons/More";
import { AccordionDemo } from "../forms/AccordionDemo";
import { Category } from "../forms/Category";
import { Product } from "../forms/Product";
import { SelectSection } from "../forms/SelectSection";
import { SwiperHeader } from "../forms/SwiperHeader";
import { CaruselSlider } from '../forms/CaruselSlider';
import { VideoSwiper } from '../forms/VideoSwiper';
import { BlogSwiper } from '../forms/BlogSwiper';
import { HitProduct } from '../forms/HitProduct';
import { ScrollToTop } from '../ScrollToTop';

export function MainPage(){
   
    const [activeButton, setActiveButton] = useState('Хиты продаж');
    const buttons = ['Хиты продаж', 'Для города', 'Для взрослых', 'Для детей'];
    const [isPlaying, setIsPlaying] = useState(false);
    return(
        <>

            <div className="grid justify-center">
                <ScrollToTop/>
                <div>
                    <SwiperHeader/>
                </div>
                <div className="flex justify-center pb-20">
                    <div className="justify-between flex w-7xl items-center">
                        <div className="flex gap-20">
                            <div>
                                <h1 className="uppercase text-[25px] font-semibold">Гарантия 1 год</h1>
                                <p>на весь ассортимент</p>
                            </div>
                            <div>
                                <h1 className="uppercase text-[25px] font-semibold">Рассрочка</h1>
                                <p>от 6 месяцев</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[200px]">
                            <div>
                                <h1 className="uppercase text-[25px] font-semibold">Подарки</h1>
                                <p>и бонусы к покупкам</p>
                            </div>
                            <div className="flex gap-[18px] p-3 border border-[#5D6C7B1A] rounded-[5px]">
                                <a href=""><img src="./yandex.svg" alt="" /></a>
                                <div className="text-center">
                                    <p className="text-[#5D6C7B]">Яндекс отзывы</p>
                                    <div className="flex">
                                        <img src="./star.svg" alt="" />
                                        <p className="text-[25px] font-semibold">DataBase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="justify-center grid">
                    <div className="flex justify-between w-7xl items-center">
                        <p className="font-semibold uppercase text-[35px]">Электросамокаты</p>
                        <div className="flex gap-3">
                            {buttons.map((buttonText) => (
                                <button
                                    key={buttonText}
                                    onClick={() => setActiveButton(buttonText)}
                                    className={`px-5 py-3 rounded-[5px] border transition-all ${
                                        activeButton === buttonText
                                            ? "text-[#6F73EE] bg-white border-[#6F73EE]"
                                            : "text-[#5D6C7B] bg-[#F4F7FB] border-[#F4F7FB] hover:text-[#6F73EE] hover:bg-white hover:border-[#6F73EE]"
                                    }`}
                                >
                                    {buttonText} 
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="py-[50px]">
                        <Product activeFilter={activeButton} />
                    </div>
                </div>





                <div className="flex justify-center mt-[60px]">
                    <div className="flex justify-between w-7xl">
                        <div className="bg-[url('./model.svg')] bg-cover bg-no-repeat bg-center grid gap-3 px-10 py-8 rounded-[5px]">
                            <h1 className="uppercase font-semibold text-2xl w-[250px] leading-10">Подбор модели электросамоката</h1>
                            <p className="w-120">Пройдите тести выберите<br/>электросамокат по своим критериям</p>
                            <button className=" text-[#6F73EE] gap-2 flex items-center">Подобрать модель<img  src="./arrow4.svg" alt="" /></button>
                        </div>
                        <div className="bg-[url('./servise.svg')] bg-cover bg-no-repeat bg-center grid gap-3 px-10 py-8 rounded-[5px]">
                            <h1 className="uppercase font-semibold text-2xl w-[250px] leading-10">Сервисное обслуживание</h1>
                            <p className="w-120">Крупнейший сервисный центр<br/>в России для продуктов Kugoo</p>
                            <button className=" text-[#6F73EE] gap-2 flex items-center">Подобрать модель<img  src="./arrow4.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-[110px]">
                <div className="bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat  items-center w-[1440px] rounded-[5px]">
                    <div className="justify-end w-7xl grid gap-9 py-[67px]" py->
                        <p className="text-white bg-[#EE685F] w-fit px-[11px] py-1 rounded-[5px]">Акция</p>
                        <h1 className="uppercase font-semibold text-[35px] text-white w-100">Бесплатная доставка Электросамокатов По России до 01.09</h1>
                        <button className="w-fit px-[25px] py-[15px] bg-white rounded-[5px]">Подробнее</button>
                    </div>
                </div>
            </div>

            <div className="justify-center grid pt-20">
                <Category/>
            </div>

            
           <div className="flex justify-center my-[100px]">
                <div className="flex justify-between w-[1440px]">
                    <div className="bg-[#F4F7FB] rounded-[10px] p-7 w-full">
                        <div className="flex justify-between w-7xl">
                            <div className="bg-[url('./bg-kugo.svg')] bg-cover bg-center bg-no-repeat rounded-xl w-[606px] h-[565px] relative">
                                <div className="absolute bottom-5 right-5">
                                    <div className="TEXT grid w-fit gap-4 rounded-2xl text-white backdrop-blur-[10px]">
                                        <div className="pt-[17px] px-5">
                                            <h2 className="text-[18px] font-semibold">Тест-драйв в Москве</h2>
                                            <p className="w-50">Оцените все преимущества самокатов лично</p>
                                        </div>
                                        <More/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="grid gap-[18px]">
                                    <p className="text-[35px] font-semibold uppercase w-120">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</p>
                                    <p className="w-135">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                                </div>
                                <div className="grid bg-white p-5 rounded-2xl">
                                    <p className="font-semibold">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                                    <div>
                                        <div className="flex gap-2.5 items-center"><img src="./list.svg" className="w-2.5" alt="" /><p>цены от завода-изготовителя Jilong;</p></div>
                                        <div className="flex gap-2.5 items-center"><img src="./list.svg" className="w-2.5" alt="" /><p>бесплатный тест-драйв самокатов;</p></div>
                                        <div className="flex gap-2.5 items-center"><img src="./list.svg" className="w-2.5" alt="" /><p>фирменную гарантию 1 год;</p></div>
                                        <div className="flex gap-2.5 items-center"><img src="./list.svg" className="w-2.5" alt="" /><p>ремонт и обслуживание от 1 дня в собственном сервисном центре;</p></div>
                                        <div className="flex gap-2.5 items-center"><img src="./list.svg" className="w-2.5" alt="" /><p>более 1 000 запчастей и аксессуаров в наличии</p></div>
                                    </div>
                                    <button className="text-[#6F73EE] w-fit">Смотреть сертификат</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           <div className="grid justify-center text-center gap-[18px]">
                <h1 className="text-[35px] uppercase font-semibold text-center">Предлагаем самые выгодные цены<br/>на продукты Kugoo за счет прямых поставок</h1>
                <p>и заботимся об удобстве покупателей</p>
                <SelectSection/>
           </div>

            <div className="justify-center flex my-[100px]">
                <div className="relative w-[1440px] h-[630px] ">
                    {!isPlaying && (
                        <div 
                            className="w-[1440px] h-[630px] bg-cover bg-center relative cursor-pointer rounded-[5px]"
                            style={{ backgroundImage: `url('./videomain.svg')` }}
                            onClick={() => setIsPlaying(true)}
                        >
                            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <img src="./playicon.svg" alt="Play" className="w-20 h-20" />
                            </button>
                        </div>
                    )}
                    
                    {isPlaying && (
                        <iframe
                            width="1440"
                            height="630"
                            src="https://www.youtube.com/embed/6n-wJGHyIE0?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-[1440px] h-[630px]"
                        ></iframe>
                    )}
                </div>
            </div>
            <div className='justify-center grid'>
                <div className='justify-center text-center gap-4 grid'>
                    <h1 className='uppercase font-semibold text-[35px]'>Отзывы и фото реальных покупателей</h1>
                    <div className='flex justify-center'>
                        <button className='text-[#6F73EE] flex gap-2 items-center text-center'>
                            <p>Читать отзывы на Яндекс</p>
                            <img src="./arrow4.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <CaruselSlider/>

            <div className='justify-center grid gap-14'>
                <div className='justify-between w-7xl flex'>
                    <div className='grid gap-4'>
                        <h1 className='uppercase font-semibold text-[35px]'>Вдеообзоры</h1>
                        <p className='w-115'>Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>
                    </div>
                    <div>
                        <button className='text-[#6F73EE] flex gap-2 items-center text-center'>
                            <p>Смотреть все видеообзоры</p>
                            <img src="./arrow4.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='justify-center flex'><VideoSwiper/></div>
            <div className='justify-center flex'>
                <div>
                    <div className='justify-between w-7xl'>
                        <h1 className='uppercase font-semibold text-[35px]'>Новые статьи в блоге</h1>
                    </div>
                    <div>
                        <BlogSwiper/>
                    </div>
                </div>
            </div>

            <div className="grid justify-center gap-[60px]">
                <div className="flex justify-center text-[35px] uppercase font-semibold text-center">Отвечаем на вопросы покупателей</div>
                <div><AccordionDemo/></div>
            </div>
            <div className="justify-center grid mt-25">
                <div className='flex justify-center'>
                    <h1 className='text-[35px] font-semibold uppercase w-fit'>Часто покупают</h1>
                </div>
                <div className=''>
                    <HitProduct/>
                </div>
            </div>
            
        </>
    )
}