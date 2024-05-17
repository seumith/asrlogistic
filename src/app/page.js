"use client"
import QuoteForm from "./components/quote/page"
import SecondaryBtn from "./components/buttons/secondary-btn"
import makesUsBestData from "./data/whywebest"
import OurServiceSection from "./components/ourservices/ourServiceSection"
import StatNumber from "./components/stats/StatNumber"
import Testimonial from "./components/testimonials/Testimonial"
import {motion , useScroll} from "framer-motion"
import { useEffect, useRef } from "react"
import FAQ from "./components/faq/FAQ"

const Main = () => {
  const brandNameRef = useRef(null)
  const mainPageRef = useRef(null)
  const { scrollYProgress } = useScroll()
  useEffect(()=>{
    if(mainPageRef && mainPageRef.current){
      mainPageRef.current.addEventListener("mousemove",(e)=>{
        brandNameRef.current.style.filter = `hue-rotate(${(e.clientX + e.clientY)/80}deg)`
      })
    }
  },[])
  return (
    <div ref={mainPageRef} className="relative">
      <motion.div className={`fixed progress-bar hidden lg:block top-[25%] left-[1rem] w-1 h-[20rem] bg-primary-blue z-10`} style={{scaleY : scrollYProgress , transformOrigin : "top left"}}></motion.div>
      <section className="lg:h-screen m-auto flex flex-col lg:flex-row relative">
      <div className="pl-2 lg:mt-[-8rem] lg:pl-0 hero-heading mt-[4rem] w-[99%] flex items-center lg:w-[80%]">
        <div>
        <motion.p animate={{x : [-100 , 0],opacity : [0,1]}} transition={{ease : "easeOut" , duration : 1}} className="text-[1.3rem] lg:text-[2.5rem] opacity-0">🎉 Welcome to</motion.p>
        <motion.h1 ref={brandNameRef} animate={{x : [-100 , 0],opacity : [0,1]}} transition={{ease : "easeOut" , duration : 1.2 , delay : 0.2}} className="brand-name text-[3rem] font-[700] leading-[3rem] opacity-0 pt-4 lg:pt-0 lg:text-[6rem] lg:leading-[7rem]">ASR Logistics Packers & Movers</motion.h1>
        <motion.p animate={{opacity : [0 , 0.5 , 1]}} transition={{ease : "easeOut" , duration : 0.7 , delay : 0.8}} className="font-light text-paragraph mt-3 opacity-0 text-left text-[1rem] w-[99%] lg:text-[1.1rem] lg:w-[60%] lg:mt-0">Most reliable, trusted and affordable packers and movers in Delhi, experts in packing and moving of households, office goods and car transportation in <span className="font-bold text-[#cfcfcf]">Delhi to all over India.</span> 🚚</motion.p>
        </div>
      </div>
      <motion.div animate={{y : [50,0],opacity : [0,1]}} transition={{ease : "easeOut" , duration : 1}} className="opacity-0">
        <QuoteForm/>
      </motion.div>
    </section>
    <section className="about-section pl-2 lg:pl-0">
      <h1 className=" text-[1.7rem] lg:text-[2.2rem] mt-[3rem] lg:mt-0 lg:text-center">About us</h1>
      <hr className="w-[8rem] border-2 border-primary-blue lg:m-auto"/>
      <h2 className=" leading-6 lg:leading-normal text-[1.2rem] lg:text-[1.4rem] lg:text-2xl mt-8 text-sub-heading">ASR Packers and Movers in Delhi: Your Trusted Partner for Seamless Relocations -</h2>
      <p className="text-paragraph mt-4">ASR Logistics Packers and Movers in Delhi is a leading moving service provider, renowned for its reliability, trustworthiness, and affordability. Our expertise lies in packing and moving, loading and unloading, local shifting, house shifting, office shifting, vehicle shifting (including cars and bikes), insurance services, and warehouse and storage services in Delhi, catering to clients across India.</p>
      <h2 className=" leading-6 lg:leading-normal text-[1.2rem] lg:text-[1.4rem] lg:text-2xl mt-8 text-sub-heading">Searching for Packers and Movers in Delhi? -</h2>
      <p className="text-paragraph mt-4">If you are seeking a dependable partner for your shifting requirements, ASR Logistics Packers and Movers in Delhi is here to assist you. We offer top-notch services to fulfill all your needs, including house shifting services and office shifting services in Delhi. Our goal is to ensure a hassle-free relocation experience for our valued customers.</p>
    </section>
    <SecondaryBtn title="Read more" link="/about" arrD="inline-block" bg={true}/>
    {/* Why we are best secrtion */}
    <section className="whywebest pl-2 lg:pl-0">
    <h1 className=" text-[1.7rem] lg:text-[2.2rem] mt-[3rem] lg:mt-0 lg:text-center">What makes us best ?</h1>
      <hr className="w-[12rem] border-2 border-primary-blue lg:m-auto"/>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 mt-8">
        {makesUsBestData.map((e)=>{
          return Object.values(e).map(item => {
            return (<div className="bg-box-color flex flex-col justify-center rounded-[8px] w-full h-[12rem] lg:h-[15rem]" key={item.title}>
              <h3 className="text-[1.3rem] lg:text-[1.6rem] px-2 lg:px-5">{item.title}</h3>
              <p className="px-2 lg:px-5 text-paragraph">{item.description}</p>
            </div>)
          })
        })}
      </div>
    </section>
    <OurServiceSection/>
    <StatNumber/>
    <Testimonial/>
    <FAQ/>
    </div>
  )
}

export default Main