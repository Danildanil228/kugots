import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

export function BlogSwiper(){
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
                        768: {
                            slidesPerView: 2.1,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 'auto',
                            spaceBetween: 30
                        }
                    }}
                >
                    <SwiperSlide className='!w-[280px] lg:!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./swiperblog1.svg" alt="" className='w-full h-[160px] lg:h-[200px]! object-cover' />
                            <div className='p-3 lg:p-4 flex flex-col gap-2 lg:gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-base lg:text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-xs lg:text-sm leading-relaxed'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-4 lg:gap-6 mt-1 lg:mt-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./swiperblog2.svg" alt="" className='w-full h-[160px] lg:h-[200px]! object-cover' />
                            <div className='p-3 lg:p-4 flex flex-col gap-2 lg:gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-base lg:text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-xs lg:text-sm leading-relaxed'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-4 lg:gap-6 mt-1 lg:mt-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./swiperblog3.svg" alt="" className='w-full h-[160px] lg:h-[200px]! object-cover' />
                            <div className='p-3 lg:p-4 flex flex-col gap-2 lg:gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-base lg:text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-xs lg:text-sm leading-relaxed'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-4 lg:gap-6 mt-1 lg:mt-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[280px] lg:!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                            <img src="./blogswiper4.jpg" alt="" className='w-full h-[160px] lg:h-[200px]! object-cover' />
                            <div className='p-3 lg:p-4 flex flex-col gap-2 lg:gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-base lg:text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-xs lg:text-sm leading-relaxed'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-4 lg:gap-6 mt-1 lg:mt-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}