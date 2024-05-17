"use client"
import React, { useEffect, useRef, useState } from "react"
import ourServices from "@/app/data/ourservices"
import Image from "next/image"
import SecondaryBtn from "../buttons/secondary-btn"
import style from "./our-service.module.css"
import { useInView, animate, stagger } from "framer-motion"

const OurServiceSection = () => {
    const ref = useRef(null)
    const [firstTime, setFirstTime] = useState(true)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView && firstTime) {
            animate(".service-box", { y: [50, 0], opacity: [0, 1] }, { delay: stagger(0.1), ease: "easeOut", duration: 0.6 })
            setFirstTime(false)
        }
    }, [isInView, firstTime])

    return (
        <section className="w-full pl-2">
            <h2 className="text-[1.7rem] lg:text-[2.2rem] mt-6 lg:text-center" id="our-services">Our services</h2>
            <hr className="w-[12rem] border-2 border-primary-blue lg:m-auto" />
            <div ref={ref} className={`w-full grid grid-cols-2 lg:grid-cols-4 gap-2 mt-6 ${style["service-container"]}`}>
                {ourServices.map((data) => (
                    <div key={data.service} className="w-full service-box overflow-hidden relative opacity-0 rounded-[8px] bg-box-color h-[20rem] lg:h-[25rem] pb-[8rem] lg:pb-0">
                        <div className="w-full h-[50%] overflow-hidden">
                            <Image className="object-cover" width={300} height={200} src={data.img} alt="serviceimage" />
                        </div>
                        <h3 className="text-sub-heading px-2 text-[1.1rem] lg:text-[1.3rem] pt-3">{data.service}</h3>
                        <p className="px-2 text-paragraph text-[0.7rem] lg:text-[0.9rem] mt-2">{data.description}</p>
                        <div className="w-full lg:px-2 absolute bottom-2">
                            <SecondaryBtn title="Book now" link="/quote-form" arrD="block" width="full" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurServiceSection
