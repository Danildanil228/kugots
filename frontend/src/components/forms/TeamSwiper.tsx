// TeamSwiper.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

export default function TeamSwiper(){
    return(
        <>
            <div className='mt-6 lg:mt-[60px] mb-8 lg:mb-25'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={16}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="w-full lg:w-7xl px-4 lg:px-0"
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 16
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 16
                        },
                        640: {
                            slidesPerView: 2.1,
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1280: {
                            slidesPerView: 'auto',
                            spaceBetween: 30
                        }
                    }}
                >
                    <SwiperSlide className='!w-[280px] lg:!w-[320px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./t1.svg" alt="Дмитрий Никитенко" className='w-full h-[200px] lg:h-[300px] object-cover' />
                            <div className='p-3 lg:p-5 border-t-2 border-[#6F73EE]'>
                                <h2 className='font-semibold text-sm lg:text-base'>Дмитрий Никитенко</h2>
                                <p className='text-xs lg:text-sm text-[#5D6C7B]'>Руководитель сервисного центра</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[320px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./t2.svg" alt="Анастасия Горина" className='w-full h-[200px] lg:h-[300px] object-cover' />
                            <div className='p-3 lg:p-5 border-t-2 border-[#6F73EE]'>
                                <h2 className='font-semibold text-sm lg:text-base'>Анастасия Горина</h2>
                                <p className='text-xs lg:text-sm text-[#5D6C7B]'>Заместитель директора</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[320px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./t3.svg" alt="Юлия Кортич" className='w-full h-[200px] lg:h-[300px] object-cover' />
                            <div className='p-3 lg:p-5 border-t-2 border-[#6F73EE]'>
                                <h2 className='font-semibold text-sm lg:text-base'>Юлия Кортич</h2>
                                <p className='text-xs lg:text-sm text-[#5D6C7B]'>Менеджер по продажам</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[320px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./t4.svg" alt="Сергей Бойко" className='w-full h-[200px] lg:h-[300px] object-cover' />
                            <div className='p-3 lg:p-5 border-t-2 border-[#6F73EE]'>
                                <h2 className='font-semibold text-sm lg:text-base'>Сергей Бойко</h2>
                                <p className='text-xs lg:text-sm text-[#5D6C7B]'>Мастер по ремонту самокатов</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[320px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./t5.svg" alt="Дмитрий Никитенко" className='w-full h-[200px] lg:h-[300px] object-cover' />
                            <div className='p-3 lg:p-5 border-t-2 border-[#6F73EE]'>
                                <h2 className='font-semibold text-sm lg:text-base'>Дмитрий Никитенко</h2>
                                <p className='text-xs lg:text-sm text-[#5D6C7B]'>Руководитель сервисного центра</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}