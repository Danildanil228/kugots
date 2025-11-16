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

export default function MainPage(){
   
    const [activeButton, setActiveButton] = useState('Хиты продаж');
    const buttons = ['Хиты продаж', 'Для города', 'Для взрослых', 'Для детей'];
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <>
            <div className="min-h-screen">
                <ScrollToTop/>
                
                {/* Слайдер */}
                <div className="">
                    <SwiperHeader/>
                </div>

                {/* 1. Блок гарантий */}
                <div className="flex justify-center py-8 lg:py-12">
                    <div className="w-7xl">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
                            {/* Левая часть - гарантии */}
                            <div className="flex flex-col lg:flex-row lg:gap-20 gap-6">
                                <div className="text-center lg:text-left">
                                    <h1 className="uppercase text-[25px] font-semibold">Гарантия 1 год</h1>
                                    <p>на весь ассортимент</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h1 className="uppercase text-[25px] font-semibold">Рассрочка</h1>
                                    <p>от 6 месяцев</p>
                                </div>
                            </div>
                            
                            {/* Правая часть - подарки и отзывы */}
                            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[200px] gap-6">
                                <div className="text-center lg:text-left">
                                    <h1 className="uppercase text-[25px] font-semibold">Подарки</h1>
                                    <p>и бонусы к покупкам</p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex gap-[18px] p-3 border border-[#5D6C7B1A] rounded-[5px]">
                                        <a href=""><img src="./yandex.svg" alt="" /></a>
                                        <div className="text-center">
                                            <p className="text-[#5D6C7B]">Яндекс отзывы</p>
                                            <div className="flex items-center justify-center gap-1">
                                                <img src="./star.svg" alt="" />
                                                <p className="text-[25px] font-semibold">5.0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Секция электросамокатов с фильтрами */}
                <div className="flex justify-center pb-8 lg:pb-20">
                    <div className="w-7xl">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 mb-8">
                            <p className="font-semibold uppercase text-[35px] text-center lg:text-left">Электросамокаты</p>
                            <div className="grid grid-cols-2 lg:flex gap-3 justify-center lg:justify-start">
                                {buttons.map((buttonText) => (
                                    <button
                                        key={buttonText}
                                        onClick={() => setActiveButton(buttonText)}
                                        className={`px-5 py-3 rounded-[5px] border transition-all text-sm lg:text-base ${
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
                </div>

                {/* 3. Блоки "Подбор модели" и "Сервисное обслуживание" */}
                <div className="flex justify-center mt-8 lg:mt-[60px]">
                    <div className="w-7xl">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                            {/* Подбор модели */}
                            <div className="bg-[url('./model.svg')] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-6 lg:p-8 rounded-[5px] min-h-[200px] lg:min-h-[280px] lg:w-1/2">
                                <div className="grid gap-3">
                                    <h1 className="uppercase font-semibold text-xl lg:text-2xl leading-7 lg:leading-8">
                                        Подбор модели<br/>электросамоката
                                    </h1>
                                    <p className="text-sm lg:text-base">
                                        Пройдите тест и выберите<br/>электросамокат по своим критериям
                                    </p>
                                </div>
                                <button className="text-[#6F73EE] gap-2 flex items-center text-sm lg:text-base w-fit mt-4">
                                    Подобрать модель
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                            
                            {/* Сервисное обслуживание */}
                            <div className="bg-[url('./servise.svg')] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-6 lg:p-8 rounded-[5px] min-h-[200px] lg:min-h-[280px] lg:w-1/2">
                                <div className="grid gap-3">
                                    <h1 className="uppercase font-semibold text-xl lg:text-2xl leading-7 lg:leading-8">
                                        Сервисное<br/>обслуживание
                                    </h1>
                                    <p className="text-sm lg:text-base">
                                        Крупнейший сервисный центр<br/>в России для продуктов Kugoo
                                    </p>
                                </div>
                                <button className="text-[#6F73EE] gap-2 flex items-center text-sm lg:text-base w-fit mt-4">
                                    Подобрать модель
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Акционный баннер */}
                <div className="flex justify-center pt-8 lg:pt-[110px]">
                    {/* Desktop версия - ТОЧНЫЙ ВАШ КОД */}
                    <div className="hidden lg:block bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                        <div className="justify-end w-7xl grid gap-9 py-[67px]">
                            <p className="text-white bg-[#EE685F] w-fit px-[11px] py-1 rounded-[5px]">Акция</p>
                            <h1 className="uppercase font-semibold text-[35px] text-white w-110">Бесплатная доставка Электросамокатов По России до 01.09</h1>
                            <button className="w-fit px-[25px] py-[15px] bg-white rounded-[5px]">Подробнее</button>
                        </div>
                    </div>

                    {/* Mobile версия */}
                    <div className="lg:hidden bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px]">
                        <div className="flex flex-col justify-end items-end gap-4 py-6 px-4 h-full">
                            <p className="text-white bg-[#EE685F] w-fit px-3 py-1 rounded-[5px] text-sm">Акция</p>
                            <h1 className="uppercase font-semibold text-lg text-white text-right">
                                Бесплатная доставка Электросамокатов<br/>По России до 01.09
                            </h1>
                            <button className="px-4 py-2 bg-white rounded-[5px] text-sm font-medium">
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
                {/* Популярные категории */}
                <div className="justify-center grid pt-8 lg:pt-20">
                    <Category/>
                </div>

                {/* 6. О компании Kugoo */}
                <div className="flex justify-center my-8 lg:my-[100px]">
                    {/* Desktop версия - по сетке 1440px */}
                    <div className="hidden lg:block w-[1440px]">
                        <div className="bg-[#F4F7FB] rounded-[10px] p-7 w-full">
                            <div className="flex justify-between">
                                {/* Левая часть - изображение */}
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
                                
                                {/* Правая часть - текст */}
                                <div className="w-[606px] grid gap-8">
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

                    {/* Mobile версия */}
                    <div className="lg:hidden w-full px-4">
                        <div className="bg-[#F4F7FB] rounded-[10px] p-6 w-full">
                            <div className="flex flex-col gap-6">
                                {/* Текст */}
                                <div className="grid gap-4">
                                    <p className="text-2xl font-semibold uppercase leading-tight">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</p>
                                    <p className="text-sm">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                                </div>
                                
                                {/* Изображение */}
                                <div className="bg-[url('./bg-kugo.svg')] bg-cover bg-center bg-no-repeat rounded-xl w-full h-[200px] relative">
                                    <div className="absolute bottom-4 right-4">
                                        <div className="TEXT grid w-fit gap-3 rounded-2xl text-white backdrop-blur-[10px] p-3 bg-black/30">
                                            <div>
                                                <h2 className="text-base font-semibold">Тест-драйв в Москве</h2>
                                                <p className="text-sm w-40">Оцените все преимущества самокатов лично</p>
                                            </div>
                                            <More/>
                                        </div>
                                    </div>
                                </div>

                                {/* Список преимуществ */}
                                <div className="grid bg-white p-4 rounded-2xl gap-4">
                                    <p className="font-semibold text-sm">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                                    <div className="grid gap-2">
                                        <div className="flex gap-2.5 items-center">
                                            <img src="./list.svg" className="w-3 h-3" alt="" />
                                            <p className="text-sm">цены от завода-изготовителя Jilong;</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center">
                                            <img src="./list.svg" className="w-3 h-3" alt="" />
                                            <p className="text-sm">бесплатный тест-драйв самокатов;</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center">
                                            <img src="./list.svg" className="w-3 h-3" alt="" />
                                            <p className="text-sm">фирменную гарантию 1 год;</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center">
                                            <img src="./list.svg" className="w-3 h-3" alt="" />
                                            <p className="text-sm">ремонт и обслуживание от 1 дня в собственном сервисном центре;</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center">
                                            <img src="./list.svg" className="w-3 h-3" alt="" />
                                            <p className="text-sm">более 1 000 запчастей и аксессуаров в наличии</p>
                                        </div>
                                    </div>
                                    <button className="text-[#6F73EE] w-fit text-sm">Смотреть сертификат</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7. Преимущества магазина */}
                <div className="flex justify-center mb-8 lg:mb-0 py-8 lg:py-16">
                    <div className="w-full lg:w-[1440px] px-4 lg:px-0">
                        <div className="grid justify-center text-center gap-6 lg:gap-[18px]">
                            <h1 className="text-xl lg:text-[35px] uppercase font-semibold text-center leading-tight lg:leading-normal">
                                Предлагаем самые выгодные цены<br className="hidden lg:block"/>
                                на продукты Kugoo за счет прямых поставок
                            </h1>
                            <p className="text-sm lg:text-base text-gray-600">
                                и заботимся об удобстве покупателей
                            </p>
                            <div className="mt-4 lg:mt-6">
                                <SelectSection/>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Видео */}
                <div className="justify-center flex my-8 lg:my-[100px]">
                    <div className="w-full lg:w-[1440px] px-4 lg:px-0">
                        <div className="relative w-full h-[200px] lg:h-[630px] rounded-[5px] overflow-hidden">
                            {!isPlaying && (
                                <div 
                                    className="w-full h-full bg-cover bg-center relative cursor-pointer rounded-[5px]"
                                    style={{ backgroundImage: `url('./videomain.svg')` }}
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                        <img 
                                            src="./playicon.svg" 
                                            alt="Play" 
                                            className="w-12 h-12 lg:w-20 lg:h-20 transition-transform hover:scale-110" 
                                        />
                                    </button>
                                    
                                    {/* Overlay для лучшей видимости кнопки play */}
                                    <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors rounded-[5px]"></div>
                                </div>
                            )}
                            
                            {isPlaying && (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/6n-wJGHyIE0?autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>

                {/* Отзывы */}
                <div className='justify-center grid'>
                    <div className='justify-center text-center gap-3 lg:gap-4 grid mb-6 lg:mb-0'>
                        <h1 className='uppercase font-semibold text-2xl lg:text-[35px]'>Отзывы и фото реальных покупателей</h1>
                        <div className='flex justify-center'>
                            <button className='text-[#6F73EE] flex gap-2 items-center text-center text-sm lg:text-base'>
                                <p>Читать отзывы на Яндекс</p>
                                <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                            </button>
                        </div>
                    </div>
                </div>
                <CaruselSlider/>

         {/* Заголовок секции Видеообзоры - отдельная секция */}
                <div className='justify-center my-8 lg:my-14'>
                    <div className='w-full max-w-7xl mx-auto px-4 lg:px-0'>
                        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0'>
                            <div className='grid gap-3 lg:gap-4 text-center lg:text-left lg:flex-1'>
                                <h1 className='uppercase font-semibold text-xl lg:text-[35px] leading-tight'>Видеообзоры</h1>
                                <p className='text-sm lg:text-base max-w-2xl lg:max-w-120'>
                                    Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.
                                </p>
                            </div>
                            <div className='flex justify-center w-full lg:w-auto lg:justify-start lg:flex-shrink-0'>
                                <button className='text-[#6F73EE] flex gap-2 items-center text-center text-sm lg:text-base hover:gap-3 transition-all'>
                                    <p>Смотреть все видеообзоры</p>
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VideoSwiper компонент - отдельная секция */}
                <div className='justify-center flex mb-8 lg:mb-20'>
                    <VideoSwiper/>
                </div>

                {/* Блог */}
                <div className='justify-center my-8 lg:my-20'>
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mb-6 lg:mb-8'>
                            <div className='text-center lg:text-left lg:flex-1'>
                                <h1 className='uppercase font-semibold text-xl lg:text-[35px] leading-tight'>Новые статьи в блоге</h1>
                            </div>
                            <div className='flex justify-center lg:justify-start lg:flex-shrink-0'>
                                <button className='text-[#6F73EE] flex gap-2 items-center text-center text-sm lg:text-base hover:gap-3 transition-all'>
                                    <p>Все статьи</p>
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <BlogSwiper/>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
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

                {/* Часто покупают */}
                <div className="justify-center my-8 lg:my-20">
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                        <div className='flex justify-center mb-6 lg:mb-8'>
                            <h1 className='text-xl lg:text-[35px] font-semibold uppercase text-center'>Часто покупают</h1>
                        </div>
                        <div className='mt-4 lg:mt-0'>
                            <HitProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}