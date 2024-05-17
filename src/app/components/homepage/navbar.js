"use client"
import {motion , stagger, animate} from "framer-motion"
import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { useEffect } from "react"



const Navbar = () => {

    useEffect(()=>{

        animate(".link-wrapper",{y : [-10,0],opacity : [0,1]},{delay:stagger(0.1)})
    },[])
  return (
    <nav className="w-full h-[5rem] hidden sm:block relative z-10">
        <motion.div className="links-container flex justify-end w-full items-center h-[100%] sm:justify-center">
            <ul className="flex justify-left flex-col items-center gap-2 sm:justify-center sm:flex-row">
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/" ? "text-[#4479E2]" : styles["link-style"]}`} href="/">Home</Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/about" ? "text-[#4479E2]" : styles["link-style"]}`} href="/about">About us</Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/contact" ? "text-[#4479E2]" : styles["link-style"]}`} href="/contact">Contact us</Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/city-network" ? "text-[#4479E2]" : styles["link-style"]}`} href="/city-network">City network </Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/our-services" ? "text-[#4479E2]" : styles["link-style"]}`} href="/#our-services">Our services</Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.linkPadding} ${usePathname() == "/faq" ? "text-[#4479E2]" : styles["link-style"]}`} href="/#faq">Faq</Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link target="_blank" className={`${styles.whatsappLink} ${styles.linkPadding}`} href="https://wa.me/9664424141">Whatsapp</Link>
                </li>
                <li className="link-wrapper opacity-0">
                    <Link className={`${styles.callusLink} ${styles.linkPadding}`} href="/">Call us</Link>
                </li>
            </ul>
        </motion.div>
    </nav>
  ) 
}

export default Navbar