import { Breadcrumbs } from "../Breadcrumbs";
import { More } from "../buttons/More";
import { Category } from "../forms/Category";
import { HitProduct } from "../forms/HitProduct";
import { VideoSwiper } from "../forms/VideoSwiper";
import { ScrollToTop } from "../ScrollToTop";

export default function Catalog(){
    return(
        <>
            <ScrollToTop/>
            <section className="container justify-center flex min-h-screen">
                <div className="">
                    <div className="mt-10 sm:px-20">
                        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Каталог'}]}/> 
                    </div>
                    <div className="justify-center flex sm:w-[1440px]">
                        <img src="./bgcat.svg" alt="" />
                    </div>
                    <div className="justify-center grid pt-8 lg:pt-20">
                        <Category/>
                    </div>
                    <div className="flex justify-center my-8 lg:my-[100px]">
                        <div className="hidden lg:block w-[1440px]">
                            <div className="bg-[#F4F7FB] rounded-[10px] p-7 w-full">
                                <div className="flex justify-between">
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
                    <div className='justify-center flex mb-8 lg:mb-20'>
                        <VideoSwiper/>
                    </div>
                    


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
            </section>
        </>
    )
}