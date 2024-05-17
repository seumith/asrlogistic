"use client"
import {motion , animate , useInView} from "framer-motion"
import { useEffect, useRef, useState } from "react"
const StatNumber = () => {
    const [counter , setCounter] = useState(0)
    const [happyClient , setHappyClient] = useState(0)
    const [experience , setExperience] = useState(0)
    const [ratio , setRatio] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref);
    let [firstTime , setFirstTime] = useState(true)
    useEffect(()=>{
        if(isInView && firstTime){
            console.log(isInView);
            for(let i = 0;i<2501;i++){
                setTimeout(()=>{
                    if(i <= 2415){
                        setHappyClient(i)
                    }
                    if(i <= 5){
                        setTimeout(()=>{
                            setExperience(i)
                        },i*200)
                    }
                    if(i <= 98){
                        setTimeout(()=>{
                            setRatio(i)
                        },i*15)
                    }
                    setCounter(i)
                },i*0.5)
            
            }
            setFirstTime(false)
        }
    },[isInView])
  return (
    <div ref={ref} className="stat-wrapper md:mt-10 flex w-full justify-center h-[35vh] items-center md:h-[40vh]">
        <div className="stat-container w-[80%] md:w-full grid gap-2 grid-cols-2 md:grid-cols-4">
            <div className="move-count">
                <p className=" text-[2.5rem] md:text-[4rem] text-primary-blue font-bold text-center">{counter}+</p>
                <p className="text-[1rem] md:text-2xl text-sub-heading text-center">home & offices moved</p>
            </div>
            <div className="happy-clients">
                <p className=" text-[2.5rem] md:text-[4rem] text-primary-blue font-bold text-center">{happyClient}+</p>
                <p className="text-[1rem] md:text-2xl text-sub-heading text-center">Happy clients</p>
            </div>
            <div className="experience">
                <p className=" text-[2.5rem] md:text-[4rem] text-primary-blue font-bold text-center">{experience}+</p>
                <p className="text-[1rem] md:text-2xl text-sub-heading text-center">Years in business</p>
            </div>
            <div className="satisfaction-ratio">
                <p className=" text-[2.5rem] md:text-[4rem] text-primary-blue font-bold text-center">{ratio}%</p>
                <p className="text-[1rem] md:text-2xl text-sub-heading text-center">Satisfaction ratio</p>
            </div>
        </div>
    </div>
  )
}

export default StatNumber