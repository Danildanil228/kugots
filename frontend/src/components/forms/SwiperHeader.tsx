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

    // Вычисляем прогресс в процентах
    const progressWidth = ((activeIndex + 1) / totalSlides) * 100;

    return(
        <>
            <div className="relative py-[30px]">
                <Swiper
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    modules={[Navigation]}
                    className="w-[1441px] h-105 rounded-[5px] bg-[#6F73EE]"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    
                >
                    <SwiperSlide className='bg-[url("./bgswiper.svg")]! bg-cover! bg-no-repeat! bg-center! '>
                        <div className='flex py-[35px] px-20'>
                            <div className='grid justify-between w-6xl text-start text-white gap-[34px]'>
                                <div className='flex'>
                                    <p className='px-2.5 py-1 border-white border rounded-[5px]'>Новинка</p>    
                                </div>
                                <div className='w-[610px] grid gap-2'>
                                    <h1  className='uppercase text-[35px] font-semibold'>Электросамокаты Kugoo Kirin от официального дилера</h1>
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
                </Swiper>
                
                <div className="absolute bottom-15 left-36 transform -translate-x-1/2 z-10 flex items-center gap-2">
                    <button className="custom-prev">
                        <img src="./arrowslide.svg" alt="Назад" />
                    </button>
                    <span className="text-white">{activeIndex + 1}</span>
                    
                    {/* Кастомный прогресс-бар */}
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
                
            </div>
            <div className='justify-center flex'>
                <div className='justify-between w-7xl'>

                </div>
            </div>
        </>
    );
}