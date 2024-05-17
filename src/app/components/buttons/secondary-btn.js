"use client"
import Link from "next/link"
import { MdOutlineArrowOutward } from "react-icons/md";
import globalStyles from "@/app/global-component.module.css"
import {motion} from "framer-motion"
import { useState } from "react";


  const variants = {
    hover : {
      x : 3 , y : -3
    },
    initial : {
      x : 0,
      y : 0
    }
  }
  
  const SecondaryBtn = ({ title , link , arrD , width , bg}) => {
    const [isHovered , setIsHovered] = useState(false)
    function handleMouseEnter() {
      setIsHovered(true);
    }
  
    function handleMouseLeave() {
      setIsHovered(false);
    }
    return (
      <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`mt-6 pl-2 pr-2 md:pl-0 md:pr-0 ${width == "full" ? "w-full" : "w-max"}`}>
        <Link href={link} className={`${globalStyles["secondary-btn"]} ${width == "full" && "w-full"} inline-flex text-[1.1rem] items-center justify-center ${bg ? "bg-link-bg" : ""}`}>
          {title}
          <motion.span variants={variants} animate={isHovered ? "hover" : "initial"} transition={{ease : "easeOut" , duration : 0.2}}><MdOutlineArrowOutward className={`text-[1.5rem] ml-2 ${arrD}`} /></motion.span>
        </Link>
      </motion.div>
    );
  };

export default SecondaryBtn;