import React, { useState } from 'react';


const ImageSlider = () => {

  const [isImage1Active, setIsImage1Active] = useState(true)
  const [isImage2Active, setIsImage2Active] = useState(false)


  const handleclick = () => {
    setIsImage1Active(!isImage1Active)
    setIsImage2Active(!isImage2Active)
  }


  return (
    <div className="relative">
      <div className="absolute top-[47%] w-[100%] z-[90]">
        <div className="flex justify-between">
          <span className="material-symbols-outlined text-[40px] cursor-pointer text-black" onClick={handleclick}>chevron_left</span>
          <span className="material-symbols-outlined text-[40px] cursor-pointer text-black" onClick={handleclick}>chevron_right</span>
        </div>
      </div>
      {
        isImage1Active &&

        <div className=" h-[460px] bg-[url('https://nakornkitk.github.io/sumline-shop-v2/images/white.jpg')] bg-cover bg-center ">
          <div className="h-[100%] py-[20px] flex bg-[#F5F5F5] bg-opacity-60 justify-center 2xl:px-[175px] md:px-[50px] ">
            <div className="m-auto ">
              <p className="text-black text-2xl md:text-3xl font-semibold">
                Looking for your favorite Yarn bag?
              </p>
              <p className="text-[#BB6154] text-1xl md:text-2xl">
                Order it at sumline shop...
              </p>
              <div className="pr-[10px] pt-[20px] flex">
                <a
                  href={"https://shopee.co.th/sumline.shop"}
                  className="w-10 mr-[10px] hover:scale-110 transform transition duration-2"
                >
                  <img
                    src="https://nakornkitk.github.io/sumline-shop-v2/images/shopee-icon.png"
                    alt=""
                  />
                </a>
                <a
                  href={"https://www.instagram.com/sumline.shop"}
                  className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
                >
                  <img
                    src="https://nakornkitk.github.io/sumline-shop-v2/images/ig-instagram-icon.png"
                    alt=""
                  />
                </a>
                <a
                  href={"https://line.me/R/ti/p/@719ojtgk"}
                  className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
                >
                  <img
                    src="https://nakornkitk.github.io/sumline-shop-v2/images/LINE_Brand_icon.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="m-auto">
              <img
                src="https://nakornkitk.github.io/sumline-shop-v2/images/logo.png"
                alt=""
                className="h-40 md:h-60 mx-auto rounded-full hover:scale-110 transform transition duration-2"
              />
            </div>
        </div>
      </div>
      }

      {
        isImage2Active &&

        <div className=" h-[460px] bg-[url('https://nakornkitk.github.io/sumline-shop-v2/images/bg.jpg')] bg-cover bg-center">
          <div className="h-[100%] py-[20px] flex bg-[#F5F5F5] bg-opacity-30 backdrop-blur-lg 2xl:px-[175px] md:px-[50px] ">
            <div className="pt-[20px] md:pt-[0px] w-[40%] m-auto ">
              <img
                src="https://nakornkitk.github.io/sumline-shop-v2/images/comingsoon.jpg"
                alt=""
                className="h-40 md:h-80 mx-auto hover:scale-110 transform transition duration-2"
              />
            </div>
            <div className="w-[60%] m-auto">
              <p className="text-black text-2xl md:text-3xl font-semibold">
                Our new product is coming soon...
              </p>
              <p className="text-white text-1xl md:text-2xl">
                dont forget to subscribe to get the latest new.
              </p>
              <div className="pt-[10px] flex">
                <a
                  href={"https://shopee.co.th/sumline.shop"}
                  className="w-10 mr-[10px] hover:scale-110 transform transition duration-2"
                >
                  <span className="material-symbols-outlined text-[40px] text-red-600">mail</span>
                </a>
                
              </div>
            </div>
        </div>
      </div>
      }
      
    </div>
   
  );
};

export default ImageSlider;