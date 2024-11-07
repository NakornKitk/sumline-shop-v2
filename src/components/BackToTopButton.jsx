import {useEffect, useState} from 'react'

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
            <button className="fixed bottom-[50px] right-[50px] h-[50px] w-[50px] bg-[#FCC3A4] rounded-md text-xl font-bold " onClick={scrollUp}>&#128314;</button>
        ) }
    </div>
  )
}

export default BackToTopButton