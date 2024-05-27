"use client"
import {motion , stagger, animate} from "framer-motion"
import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { MdAddCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
const Navbar = () => {
    let [theme , setTheme] = useState("")
    useEffect(()=>{
        setTheme(document.body.getAttribute("data-theme"))
        // animate(".link-wrapper",{y : [-10,0],opacity : [0,1]},{delay:stagger(0.1)})
    },[])
    function toggleTheme(){
        if(theme === "dark"){
            document.body.setAttribute("data-theme","light")
            setTheme("light")
            localStorage.setItem("theme","light")
        }else{
            document.body.setAttribute("data-theme","dark")
            setTheme("dark")
            localStorage.setItem("theme","dark")
        }
    }
  return (
    <nav className="w-full h-[5rem] hidden sm:block relative z-10">
        <div className="links-container flex justify-end w-full items-center h-[100%] sm:justify-center">
            <ul className="flex justify-left flex-col items-center gap-2 sm:justify-center sm:flex-row">
                <li className="link-wrapper ">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/" ? "text-[#4479E2]" : styles["link-style"]}`} href="/">Home</Link>
                </li>
                <li className="link-wrapper ">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/about" ? "text-[#4479E2]" : styles["link-style"]}`} href="/about">About us</Link>
                </li>
                <li className="link-wrapper ">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/contact" ? "text-[#4479E2]" : styles["link-style"]}`} href="/contact">Contact us</Link>
                </li>
                <li className="link-wrapper ">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/city-network" ? "text-[#4479E2]" : styles["link-style"]}`} href="/city-network">City network </Link>
                </li>
                <li className="link-wrapper ">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/our-services" ? "text-[#4479E2]" : styles["link-style"]}`} href="/#our-services">Our services</Link>
                </li>
                <li className="link-wrapper ">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/faq" ? "text-[#4479E2]" : styles["link-style"]}`} href="/#faq">Faq</Link>
                </li>
                <li className="link-wrapper ">
                    <Link target="_blank" className={`${styles.whatsappLink} ${styles.linkPadding} flex items-center gap-2`} href="https://wa.me/9664424141"><IoLogoWhatsapp className="text-[1.35rem]" />Whatsapp</Link>
                </li>
                <li className="link-wrapper ">
                    <Link className={`${styles.callusLink} ${styles.linkPadding} flex items-center gap-2`} href="/"><MdAddCall className="text-[1.3rem]"/>Call us</Link>
                </li>
                <li className="link-wrapper  px-2 py-2 text-[1.3rem]">
                    <button onClick={toggleTheme} className="theme-icons">{
                        theme === "light" ? <FiMoon/> : <FiSun/>
                    }</button>
                </li>
            </ul>
        </div>
    </nav>
  ) 
}

export default Navbar