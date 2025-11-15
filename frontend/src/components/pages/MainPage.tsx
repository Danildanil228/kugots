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
                
                {/* Слайдер - оставляем как есть */}
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

                {/* Блоки подбора модели и сервиса */}
                <div className="flex justify-center mt-6 lg:mt-[60px]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div className="bg-[url('./model.svg')] bg-cover bg-no-repeat bg-center grid gap-3 p-6 lg:px-10 lg:py-8 rounded-[5px] min-h-[180px] lg:min-h-auto">
                                <h1 className="uppercase font-semibold text-lg lg:text-2xl lg:w-[250px] leading-7 lg:leading-10">Подбор модели электросамоката</h1>
                                <p className="text-sm lg:text-base lg:w-120">Пройдите тести выберите электросамокат по своим критериям</p>
                                <button className="text-[#6F73EE] gap-2 flex items-center text-sm lg:text-base w-fit">
                                    Подобрать модель
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                            <div className="bg-[url('./servise.svg')] bg-cover bg-no-repeat bg-center grid gap-3 p-6 lg:px-10 lg:py-8 rounded-[5px] min-h-[180px] lg:min-h-auto">
                                <h1 className="uppercase font-semibold text-lg lg:text-2xl lg:w-[250px] leading-7 lg:leading-10">Сервисное обслуживание</h1>
                                <p className="text-sm lg:text-base lg:w-120">Крупнейший сервисный центр в России для продуктов Kugoo</p>
                                <button className="text-[#6F73EE] gap-2 flex items-center text-sm lg:text-base w-fit">
                                    Подобрать модель
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Акционный баннер */}
                <div className="flex justify-center pt-8 lg:pt-[110px]">
                    <div className="container">
                        <div className="bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] min-h-[180px] lg:min-h-auto">
                            <div className="flex flex-col lg:justify-end lg:items-end gap-4 lg:gap-9 py-6 lg:py-[67px] px-4 lg:px-0">
                                <p className="text-white bg-[#EE685F] w-fit px-3 py-1 rounded-[5px] text-sm lg:text-base">Акция</p>
                                <h1 className="uppercase font-semibold text-xl lg:text-[35px] text-white text-center lg:text-left lg:w-100">
                                    Бесплатная доставка Электросамокатов По России до 01.09
                                </h1>
                                <div className="flex justify-center lg:justify-start">
                                    <button className="px-5 py-2 lg:px-[25px] lg:py-[15px] bg-white rounded-[5px] text-sm lg:text-base font-medium">
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Популярные категории */}
                <div className="justify-center grid pt-8 lg:pt-20">
                    <Category/>
                </div>

                {/* О компании */}
                <div className="flex justify-center my-8 lg:my-[100px]">
                    <div className="container">
                        <div className="bg-[#F4F7FB] rounded-[10px] p-4 lg:p-7 w-full">
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
                                <div className="bg-[url('./bg-kugo.svg')] bg-cover bg-center bg-no-repeat rounded-xl w-full lg:w-[606px] h-[300px] lg:h-[565px] relative">
                                    <div className="absolute bottom-4 lg:bottom-5 right-4 lg:right-5">
                                        <div className="TEXT grid w-fit gap-3 lg:gap-4 rounded-2xl text-white backdrop-blur-[10px] p-4">
                                            <div>
                                                <h2 className="text-base lg:text-[18px] font-semibold">Тест-драйв в Москве</h2>
                                                <p className="text-sm lg:text-base w-40 lg:w-50">Оцените все преимущества самокатов лично</p>
                                            </div>
                                            <More/>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6 lg:gap-8">
                                    <div className="grid gap-3 lg:gap-[18px]">
                                        <p className="text-2xl lg:text-[35px] font-semibold uppercase lg:w-120">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</p>
                                        <p className="text-sm lg:text-base lg:w-135">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                                    </div>
                                    <div className="grid bg-white p-4 lg:p-5 rounded-2xl gap-3">
                                        <p className="font-semibold text-sm lg:text-base">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                                        <div className="grid gap-2">
                                            <div className="flex gap-2 items-center">
                                                <img src="./list.svg" className="w-3 h-3 lg:w-2.5 lg:h-2.5" alt="" />
                                                <p className="text-sm lg:text-base">цены от завода-изготовителя Jilong;</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <img src="./list.svg" className="w-3 h-3 lg:w-2.5 lg:h-2.5" alt="" />
                                                <p className="text-sm lg:text-base">бесплатный тест-драйв самокатов;</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <img src="./list.svg" className="w-3 h-3 lg:w-2.5 lg:h-2.5" alt="" />
                                                <p className="text-sm lg:text-base">фирменную гарантию 1 год;</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <img src="./list.svg" className="w-3 h-3 lg:w-2.5 lg:h-2.5" alt="" />
                                                <p className="text-sm lg:text-base">ремонт и обслуживание от 1 дня в собственном сервисном центре;</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <img src="./list.svg" className="w-3 h-3 lg:w-2.5 lg:h-2.5" alt="" />
                                                <p className="text-sm lg:text-base">более 1 000 запчастей и аксессуаров в наличии</p>
                                            </div>
                                        </div>
                                        <button className="text-[#6F73EE] w-fit text-sm lg:text-base">Смотреть сертификат</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Преимущества магазина */}
                <div className="grid justify-center text-center gap-4 lg:gap-[18px] mb-8 lg:mb-0">
                    <h1 className="text-2xl lg:text-[35px] uppercase font-semibold text-center">Предлагаем самые выгодные цены на продукты Kugoo за счет прямых поставок</h1>
                    <p className="text-sm lg:text-base">и заботимся об удобстве покупателей</p>
                    <SelectSection/>
                </div>

                {/* Видео */}
                <div className="justify-center flex my-8 lg:my-[100px]">
                    <div className="container">
                        <div className="relative w-full h-[200px] lg:h-[630px] rounded-[5px] overflow-hidden">
                            {!isPlaying && (
                                <div 
                                    className="w-full h-full bg-cover bg-center relative cursor-pointer rounded-[5px]"
                                    style={{ backgroundImage: `url('./videomain.svg')` }}
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                        <img src="./playicon.svg" alt="Play" className="w-12 h-12 lg:w-20 lg:h-20" />
                                    </button>
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

                {/* Видеообзоры */}
                <div className='justify-center grid gap-8 lg:gap-14 my-8 lg:my-0'>
                    <div className='container'>
                        <div className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0'>
                            <div className='grid gap-3 lg:gap-4 text-center lg:text-left'>
                                <h1 className='uppercase font-semibold text-2xl lg:text-[35px]'>Вдеообзоры</h1>
                                <p className='text-sm lg:text-base lg:w-115'>Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>
                            </div>
                            <div className='flex justify-center lg:justify-start'>
                                <button className='text-[#6F73EE] flex gap-2 items-center text-center text-sm lg:text-base'>
                                    <p>Смотреть все видеообзоры</p>
                                    <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='justify-center flex mb-8 lg:mb-0'><VideoSwiper/></div>

                {/* Блог */}
                <div className='justify-center flex mb-8 lg:mb-0'>
                    <div className="container">
                        <div className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mb-6 lg:mb-0'>
                            <h1 className='uppercase font-semibold text-2xl lg:text-[35px] text-center lg:text-left'>Новые статьи в блоге</h1>
                        </div>
                        <div>
                            <BlogSwiper/>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="grid justify-center gap-6 lg:gap-[60px] my-8 lg:my-0">
                    <div className="flex justify-center text-2xl lg:text-[35px] uppercase font-semibold text-center">Отвечаем на вопросы покупателей</div>
                    <div><AccordionDemo/></div>
                </div>

                {/* Часто покупают */}
                <div className="justify-center grid mt-8 lg:mt-25 mb-8 lg:mb-0">
                    <div className="container">
                        <div className='flex justify-center'>
                            <h1 className='text-2xl lg:text-[35px] font-semibold uppercase w-fit text-center'>Часто покупают</h1>
                        </div>
                        <div className='mt-6 lg:mt-0'>
                            <HitProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}