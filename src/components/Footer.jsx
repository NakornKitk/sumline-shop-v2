import React from 'react'


function footer() {
  return (
    <footer className="bg-[#F5F5F5] py-[80px] static bottom-0">
      <div className=" flex justify-between 2xl:px-[175px] md:px-[50px]">
        <div className="w-[20%] justify-between">
          <p className="text-3xl font-extralight text-black mb-[20px]">Sumline Shop</p>
          <p className="text-[13px]  text-[#909090]">Copyright © 2024 Sumlineshop. All rights reserved.</p>
        </div>
        <div className="flex justify-between w-[40%] text-[13px] text-[#909090]">
          <div>
            <p className="mb-[10px] hover:text-black">Order History</p>
            <p className="mb-[10px] hover:text-black">My Account</p>
            <p className="mb-[10px] hover:text-black">About</p>
            <p className="mb-[10px] hover:text-black">Contact us</p>
          </div>
          <div>
            <p className="mb-[10px] hover:text-black">Checkout</p>
            <p className="mb-[10px] hover:text-black">Wishlist</p>
            <p className="mb-[10px] hover:text-black">Shop</p>
            <p className="mb-[10px] hover:text-black">Shopping Cart</p>
          </div>
          <div>
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
        <div className="w-[25%] text-[13px] text-[#909090]">
            <form className="border-b-[1px] border-[#E6E6E6]">
              <label className="block">Sign up for our newsletter to get the latest news, announcements, and special</label>
              <div className='flex justify-between py-[5px]'>
                <input type="text"className="bg-[#F5F5F5] text-[11px] outline-0" placeholder="ENTER YOUR EMAIL"></input>
                <button className="text-black font-semibold text-[13px]" onClick={()=> alert("This function is not available!!")} >SUBSCRIBE</button>
              </div>
            </form>
          </div>
      </div>
    </footer>
  )
}

export default footer