"use client"
import React, { useRef, useState } from 'react';
import feedback from '@/app/data/testimonial';
// Import Swiper React components
import "./folk.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonial() {
    return (
        <div className='w-full'>
            <h2 className="text-[1.7rem] md:text-[2.2rem] mt-6 md:text-center pl-2 md:pl-0">Client feedbacks</h2>
            <hr className="w-[12rem] border-2 border-primary-blue md:m-auto pl-2 md:pl-0" />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {feedback.map(({ name, feedback }) => {
                    return (
                        <SwiperSlide key={name}>
                            <div className='px-5 pt-3'>
                                <p className='text-[1.8rem] text-sub-heading'>{name}</p>
                                <p className='mt-4 text-paragraph'>{feedback}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}