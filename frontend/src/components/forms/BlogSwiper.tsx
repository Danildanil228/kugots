import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

export function BlogSwiper(){
    return(
        <>
            <div className='mt-[60px] mb-25'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    freeMode={true}
                    
                    modules={[FreeMode]}
                    className="w-7xl !overflow-visible"
                >
                    <SwiperSlide className='!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg  overflow-hidden'>
                            <img src="./swiperblog1.svg" alt="" className='w-full h-[200px]! object-cover' />
                            <div className='p-4 flex flex-col gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-sm'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-6 mt-2'>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./eye.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg  overflow-hidden'>
                            <img src="./swiperblog2.svg" alt="" className='w-full h-[200px]! object-cover' />
                            <div className='p-4 flex flex-col gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-sm'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-6 mt-2'>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./eye.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg  overflow-hidden'>
                            <img src="./swiperblog3.svg" alt="" className='w-full h-[200px]! object-cover' />
                            <div className='p-4 flex flex-col gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-sm'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-6 mt-2'>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./eye.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!w-[400px] bg-transparent!'>
                        <div className='flex flex-col bg-white rounded-lg  overflow-hidden'>
                            <img src="./blogswiper4.jpg" alt="" className='w-full h-[200px]! object-cover' />
                            <div className='p-4 flex flex-col gap-3 bg-[#F4F7FB] text-start'>
                                <h3 className='font-semibold text-[20px] leading-tight'>Как правильно заряжать электросамокат</h3>
                                <p className='text-gray-600 text-sm'>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className='flex gap-6 mt-2'>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./calendar.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>01.09.2021</p>
                                    </div>
                                    <div className='flex gap-2.5 items-center'>
                                        <img src="./eye.svg" alt="" className='w-4 h-4' />
                                        <p className='text-sm text-gray-500'>53</p>
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