"use client"
import faq from "@/app/data/faq"
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import "./faq.css"
import SecondaryBtn from "../buttons/secondary-btn";
const FAQ = () => {
    return (
      <>
      <h2 id="faq" className="text-[1.7rem] md:text-[2.2rem] mt-20 md:text-center pl-2 md:pl-0">FAQ</h2>
      <hr className="w-[5rem] border-2 border-primary-blue md:m-auto pl-2 md:pl-0 mb-6 lg:mb-16" />
      <Accordion>
        {faq.map(({id,q,a})=>{
          return (
            
            <AccordionItem key={id} area-label={`Accordian ${id}`} title={q}>
              {a}
            </AccordionItem>
          )
        })}
      </Accordion>
      </>
    )
}

export default FAQ















// let [show, setShow] = useState("closed");
//     useEffect(()=>{
//       let allQue = document.querySelectorAll(".que")
//       allQue.forEach((elem)=>{
//         elem.classList.replace("opened","closed")
//         elem.addEventListener("click",(e)=>{
//           let currentElem = e.target;
//           let nextElem = elem.nextElementSibling;
//           nextElem?.classList.replace("closed","opened")
//         })
//       })
//     },[])
//     return (
//         <div className="faq-wrapper">
//             {faq.map(({id, q, a }) => {
//                 return (
//                     <motion.div key={id}>
//                         <motion.div className="que w-full h-max">{q}</motion.div>
//                         <motion.div className={`ans ${show} overflow-hidden`}>{a}</motion.div>
//                     </motion.div>
//                 )
//             })}
//         </div>
//     )