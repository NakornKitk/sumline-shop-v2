import {useEffect, useState} from 'react'
import { FaArrowUp } from 'react-icons/fa'

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100)  {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {backToTopButton && (
            <button className="fixed bottom-[50px] right-[50px] h-[50px] w-[50px] bg-[#A49C8E] rounded-md text-xl text-white font-bold flex items-center justify-center text-center shadow-lg hover:bg-[#C54C37] transition duration-300" onClick={scrollUp}>
                <FaArrowUp className="" />
            </button>
        ) }
    </div>
  )
}

export default BackToTopButton