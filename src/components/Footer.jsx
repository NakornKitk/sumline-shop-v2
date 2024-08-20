import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Popup from "@/components/Popup";


function Footer() {
  const [isPopupActive, setIsPopupActive] = useState(false)


  return (
    <footer className="bg-[#F5F5F5] py-[80px] static bottom-0 px-[20px] md:px-[0px]">
      <div className=" md:flex justify-between 2xl:px-[175px] md:px-[50px]">
        <div className="md:w-[20%] justify-between mb-[30px]">
          <p className="text-3xl font-extralight text-black mb-[20px] text-center md:text-start">Sumline Shop</p>
          <p className="text-[13px]  text-[#909090] uppercase">Copyright © 2024 Sumlineshop. All rights reserved.</p>
        </div>
        <div className="md:flex justify-between w-[40%] text-[13px] text-[#909090]">
          <div className="mb-[30px]">
            <Link to="/sumline-shop-v2/">
              <p className="mb-[10px] hover:text-black">Home</p>
            </Link>
            <Link to="/sumline-shop-v2/login">
              <p className="mb-[10px] hover:text-black">My Account</p>
            </Link>
            <Link to="/sumline-shop-v2/cart">
            <p className="mb-[10px] hover:text-black">Shopping Cart</p>
            </Link>
            <Link to="/sumline-shop-v2/wish">
              <p className="mb-[10px] hover:text-black">Wishlist</p>
            </Link>
          </div>
          <div className="mb-[30px]">
            <p className="mb-[10px] hover:text-black"><a href={"https://shopee.co.th/sumline.shop"}>Shopee</a></p>
            <p className="mb-[10px] hover:text-black"><a href={"https://www.instagram.com/sumline.shop"}>Instagram</a></p>
            <p className="mb-[10px] hover:text-black"><a href={"https://line.me/R/ti/p/@719ojtgk"}>Line</a></p>
          </div>
          <div className="mb-[30px]">
            <a href="https://github.com/NakornKitk?tab=repositories" className="flex items-center mb-[10px] hover:text-black">
              <img src="https://nakornkitk.github.io/sumline-shop-v2/images/github-icon.png" alt="" className="w-[20px] mr-[20px] hover:scale-110 transform transition duration-2" />
              <p>GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/nakorn-kitkancharoensin/" className="flex items-center mb-[10px] hover:text-black">
              <img src='https://nakornkitk.github.io/sumline-shop-v2/images/linkedin-square-icon.png' alt="" className="w-[20px] mr-[20px] hover:scale-110 transform transition duration-2"/>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
        <div className="md:w-[25%] text-[13px] text-[#909090]">
            <form className="border-b-[1px] border-[#E6E6E6]">
              <label className="block">Sign up for our newsletter to get the latest news, announcements, and special</label>
              <div className='flex justify-between py-[5px]'>
                <input type="text"className="bg-[#F5F5F5] text-[11px] outline-0" placeholder="ENTER YOUR EMAIL"></input>
                <div className="text-black font-semibold text-[13px] cursor-pointer" onClick={()=> setIsPopupActive(!isPopupActive)} >SUBSCRIBE</div>
              </div>
            </form>
          </div>
      </div>

      {
       isPopupActive && <Popup setpopup = {setIsPopupActive} />
      }
    </footer>
  )
}

export default Footer