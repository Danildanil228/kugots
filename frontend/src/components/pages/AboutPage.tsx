import { useState } from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { AccordionDemo } from "../forms/AccordionDemo";
import { BlogSwiper } from "../forms/BlogSwiper";
import { CaruselSlider } from "../forms/CaruselSlider";
import { HitProduct } from "../forms/HitProduct";
import { SelectSection } from "../forms/SelectSection";
import { VideoSwiper } from "../forms/VideoSwiper";
import { ScrollToTop } from "../ScrollToTop";

export default function AboutPage(){
  const [activeButton, setActiveButton] = useState('Хиты продаж');
  const buttons = ['Хиты продаж', 'Для города', 'Для взрослых', 'Для детей'];
  const [isPlaying, setIsPlaying] = useState(false);
  return(
    <>
      <ScrollToTop/>
      <section className="justify-center flex container">
        <div className="grid">
          <div className="mt-10 sm:px-20">
            <Breadcrumbs
              items={[
                {label: 'Главная', path: '/main'},
                {label: 'О магазине'}
              ]}
            />
          </div>
          <div className="justify-center grid">
            <div className="sm:w-[1440px] bg-[url('/bgabout.svg')] py-10 rounded-2xl justify-between gap-30 flex-wrap flex sm:px-20 px-2 bg-center bg-cover bg-no-repeat text-white">
                <div className='grid gap-20 pb-20'>
                    <h1 className="uppercase sm:text-[35px] text-2xl sm:w-130 font-semibold text-center sm:text-start flex-wrap flex">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h1>
                    <div className="grid grid-cols-3">
                      <div className="grid">
                        <p className='w-18'>Работаем с</p>
                        <h1 className='text-[25px] font-semibold uppercase'>2017 Г</h1>
                      </div>
                      <div className="grid">
                        <p className='w-30'>Специалистов в штате</p>
                        <p className='text-[25px] font-semibold uppercase'>35</p>
                      </div>
                      <div className="grid">
                        <p className='w-40'>Клиентов по России и странам СНГ</p>
                        <h1 className='text-[25px] font-semibold uppercase'>2000</h1>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          {/* С 2017 г. развиваем тему электротранспорта и освещаем его ценность в современном мире */}
          <div className="justify-center flex mt-20">
            <div className="flex justify-between w-7xl">
                <div className="max-w-160 grid gap-10">
                  <h1 className="uppercase font-semibold text-[35px]">С 2017 г. развиваем тему электротранспорта и освещаем его ценность в современном мире</h1>
                  <div className="grid gap-5">
                    <h3 className="font-semibold">Наша цель</h3>
                    <p>Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Cтремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                  </div>
                  <div className="grid gap-5">
                    <h3 className="font-semibold">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h3>
                    <div className="">
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Цены от завода-изготовителя Jilong ;</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Бесплатный тест-драйв самокатов;</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Фирменную гарантию 1 год;</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Ремонт и обслуживание от 1 дня в собственном сервисном центре</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Более 1 000 запчастей и аксессуаров в наличии.</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                  <img src="/sertificat.svg" alt="" />
                </div>
            </div>
          </div>
          {/*  */}
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
          {/*  */}
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
          
                   {/* Заголовок секции Видеообзоры */}
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
      </section>
    </>
  )
}