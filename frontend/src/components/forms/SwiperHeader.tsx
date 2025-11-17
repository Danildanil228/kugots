import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BackCatalog } from '../buttons/BackCatalog';
import { Catologist } from '../buttons/Catologist';

export function SwiperHeader(){
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 5;

    const progressWidth = ((activeIndex + 1) / totalSlides) * 100;

    return(
        <>
            <div className="relative py-[30px]">
                {/* Десктоп версия слайдера */}
                <div className="hidden lg:block relative">
                    <Swiper
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        modules={[Navigation]}
                        className="w-full max-w-[1441px] h-105 rounded-[5px] bg-[#6F73EE] mx-auto"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        <SwiperSlide className='bg-[url("./bgswiper.svg")]! bg-cover! bg-no-repeat! bg-center! '>
                            <div className='flex py-[35px] px-20'>
                                <div className='grid justify-between w-6xl text-start text-white gap-[34px]'>
                                    <div className='flex'>
                                        <p className='px-2.5 py-1 border-white border rounded-[5px]'>Новинка</p>    
                                    </div>
                                    <div className='w-[610px] grid gap-2'>
                                        <h1 className='uppercase text-[35px] font-semibold'>Электросамокаты Kugoo Kirin от официального дилера</h1>
                                        <p>с бесплатной доставкой по РФ от 1 дня</p>
                                    </div>
                                    <div>
                                        <Catologist/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                    <div className="absolute bottom-4 left-20 z-10 flex items-center gap-2">
                        <button className="custom-prev">
                            <img src="./arrowslide.svg" alt="Назад" />
                        </button>
                        <span className="text-white">{activeIndex + 1}</span>
                        
                        <div className="w-[35px] h-1 bg-gray-200 rounded overflow-hidden">
                            <div 
                                className="h-full bg-[#6F73EE] transition-all duration-300"
                                style={{ width: `${progressWidth}%` }}
                            ></div>
                        </div>
                        
                        <span className="text-white">{totalSlides}</span>
                        <button className="custom-next rotate-180">
                            <img src="./arrowslide.svg" alt="Вперед" />
                        </button>
                    </div>
                    </Swiper>

                    {/* Десктоп навигация слева */}
                </div>

                {/* Мобильная версия слайдера */}
                <div className="lg:hidden w-full px-4">
                    <Swiper
                        modules={[Navigation]}
                        className="w-full h-full mt-10 rounded-[5px] bg-[#6F73EE]"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        <SwiperSlide className='bg-[url("./bgheadermobile.svg")]! bg-cover! bg-no-repeat! bg-center! '>
                            <div className='flex h-full items-center justify-center'>
                                <div className='text-start text-white gap-4 w-full max-w-[90%]'>
                                    <div className='flex my-4'>
                                        <p className='px-3 py-1.5 border-white border rounded-[5px] text-sm'>Новинка</p>    
                                    </div>
                                    <div className='grid gap-3 mb-3'>
                                        <h1 className='uppercase text-2xl font-semibold leading-tight'>
                                            Электросамокаты Kugoo Kirin от официального дилера
                                        </h1>
                                        <p className='text-base'>с бесплатной доставкой по РФ от 1 дня</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[#6F73EE]! flex items-center justify-center'>
                            <div className='text-start text-white w-full max-w-[90%]'>
                                <h2 className='text-2xl font-semibold mb-2'>Slide 2</h2>
                                <p>Описание слайда 2</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[#6F73EE]! flex items-center justify-center'>
                            <div className='text-start text-white w-full max-w-[90%]'>
                                <h2 className='text-2xl font-semibold mb-2'>Slide 3</h2>
                                <p>Описание слайда 3</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[#6F73EE]! flex items-center justify-center'>
                            <div className='text-start text-white w-full max-w-[90%]'>
                                <h2 className='text-2xl font-semibold mb-2'>Slide 4</h2>
                                <p>Описание слайда 4</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[#6F73EE]! flex items-center justify-center'>
                            <div className='text-start text-white w-full max-w-[90%]'>
                                <h2 className='text-2xl font-semibold mb-2'>Slide 5</h2>
                                <p>Описание слайда 5</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                {/* Мобильная навигация */}
                <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-2">
                    <div className="flex gap-2">
                        {[...Array(totalSlides)].map((_, index) => (
                            <div 
                                key={index}
                                className={`w-16 h-1 rounded-full transition-all ${
                                    index === activeIndex 
                                        ? 'bg-[#6F73EE]'
                                        : 'bg-[#5D6C7B]'
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}