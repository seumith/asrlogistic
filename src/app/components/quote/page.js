"use client"
import styles from "./qoute.module.css"
const QuoteForm = () => {
  return (
    <div className="w-[95%] m-auto sm:w-[25rem] min-h-max pb-[1rem] mt-[3rem] rounded-[26px] sm:mt-[1rem] border-[2px] border-primary-blue flex flex-col items-center bg-[rgb(0,0,0)]">
        <h3 className="text-2xl w-[100%] text-center mt-4">Get free moving estimate</h3>
        <form action="" className="flex flex-col w-full items-center">
        <input type="text" required placeholder="Your name" className={`w-[90%] pl-3 rounded-[8px] bg-box-color-dark h-[3.6rem] mt-4 pr-2 input-field ${styles["input-field"]}`}/>
        <input type="number" minLength="10" required placeholder="Mobile number" className={`w-[90%] pl-3 rounded-[8px] bg-box-color-dark h-[3.6rem] mt-4 input-field ${styles["input-field"]}`}/>
        <input type="text" required placeholder="Moving from" className={`w-[90%] pr-2 pl-3 rounded-[8px] bg-box-color-dark h-[3.6rem] mt-4 input-field ${styles["input-field"]}`}/>
        <input type="text" required placeholder="Moving to" className={`w-[90%] pr-2 pl-3 rounded-[8px] bg-box-color-dark h-[3.6rem] mt-4 input-field ${styles["input-field"]}`}/>
        <textarea type="text" required minLength="10" placeholder="Message" className={`w-[90%] pl-3 rounded-[8px] bg-box-color-dark h-[7.6rem] pt-2 pr-2 mt-4 input-field ${styles["input-field"]} ${styles["input-field-area"]}`}/>
        <button className="w-[90%] bg-primary-blue h-[4rem] rounded-[9px] mt-4">Get Quote</button>
        </form>
    </div>
  )
}

export default QuoteForm