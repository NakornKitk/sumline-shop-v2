import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";
import RelateProductList from './RelateProductList.jsx';

function ProductDetail({
  image,
  name,
  id,
  price,
  category,
  description,
  color,
  wishstatus,
  cartquantity
}) {

  const {setWishStatus, setCartQuantity } = useStore();

  const [inboxQuantity, setinboxQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0)

  const handleIndex = (index) => {
    setImageIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [image.length]); // Dependency array includes images.length

  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-100% bg-white">
       <div className="py-[100px] px-[20px] bg-[#F5F5F5]">
          <div className="flex justify-center py-[10px]">
            <Link
              to={"/sumline-shop-v2/"}
              className="text-[14px] text-[#666666] hover:text-black"
            >
              <p>Home</p>
            </Link>
            <p className="px-[14px]">&#x2022;</p>
            <p className="text-[14px] text-[#666666]">{name}</p>
            <p className="px-[14px]">&#x2022;</p>
            <p className="text-[14px] text-[#666666] capitalize">{color}</p>
          </div>
      </div>
      
      <div className='pt-[100px] pb-[20px] md:flex md:justify-between mb-[10px]">'>
        <div className="md:w-[52%] md:h-[600px] mb-[30px] md:mb-[0px]" >
          <img className="w-[100%] h-[100%] " src={image[imageIndex]} alt=""></img>
        </div>
        <div className="md:w-[43%] md:pl-[0px]">
          <div className="flex justify-between">
            <p className="mb-2 text-2xl font-bold tracking-tight text-[#222222] ">
              {name}
            </p>
          </div>
          <p className="text-black text-3xl font-bold py-[10px]">{price} ฿</p>
          <p className="text-gray-500 text-[14px] pt-[5px]"> {description}</p>

          <div className="flex py-[50px] ">
            <div className="flex justify-between border border-gray-300 w-[80px] h-[45px] text-center mr-[20px]">
                <p className="text-gray-500e text-[14px] my-[auto] w-[70%]">
                  {inboxQuantity}
                </p>
                <div className="block w-[30%]">
                  <p
                    className="text-gray-500 border border-gray-300 text-center h-[50%] cursor-pointer"
                    onClick={() => setinboxQuantity(inboxQuantity+1)}
                  >
                    +
                  </p>
                  <p
                    className="text-gray-500  border border-gray-300 text-center h-[50%] cursor-pointer"
                    onClick={() => setinboxQuantity(inboxQuantity > 0 ? inboxQuantity-1 : inboxQuantity )}
                  >
                    -
                  </p>
                </div>
            </div>
            <div className="flex bg-[#222222] rounded-[20px] mr-[5px] cursor-pointer" onClick={() => setCartQuantity(id, cartquantity+inboxQuantity)}>
              <span className="material-symbols-outlined text-[16px] text-white pl-[16px] my-[auto]">
                shopping_cart
              </span>

              <p className="text-[14px] text-white pl-[10px] pr-[15px] py-[12px]">
                Add to cart
              </p>
            </div>
            <span className={
              wishstatus ? 'material-symbols-outlined rounded-full bg-[#222222] text-white cursor-pointer flex items-center justify-center w-[45px] ' : 'material-symbols-outlined rounded-full bg-[#B5B5B5] text-white cursor-pointer flex items-center justify-center w-[45px]'
            } onClick={() => setWishStatus(id,wishstatus)}>favorite</span>
          </div>

          <div className="flex">
            <p className="text-black uppercase text-[12px] my-[auto] pr-[30px]">SHARE THIS</p>
            <a href="https://www.facebook.com/">
              <img  className="h-[18px] pr-[30px]"src="https://nakornkitk.github.io/sumline-shop-v2/images/facebook-app-round-icon.svg"></img>
            </a>
            <a href="https://x.com/">
              <img  className="h-[18px] pr-[30px]"src="https://nakornkitk.github.io/sumline-shop-v2/images/twitter-icon.svg"></img>
            </a>
            <a href="https://www.linkedin.com/">
              <img  className="h-[18px] pr-[30px]"src="https://nakornkitk.github.io/sumline-shop-v2/images/linkedin-square-icon.png"></img>
            </a>
            <a href="https://www.google.com/">
              <img  className="h-[18px] pr-[30px]"src="https://nakornkitk.github.io/sumline-shop-v2/images/google-icon.svg"></img>
            </a>
            
          </div>
          <p className="text-gray-500 uppercase text-[12px] py-[25px]">
            Category: {category}
          </p>
            
          <div className="flex gap-x-[15px] cursor-pointer py-[10px]">
              {image.map((item, index) => (
                <div key={index} className="bg-black w-[100px] h-[100px]">
                  <img
                src={item}
                alt=""
                className=" hover:opacity-70 w-[100%] h-[100%]"
                onClick={() => {handleIndex(index)}}
              />
                </div>
            ))}
          </div>

        </div>
      </div>

      <div className="pb-[20px]">
        <div className= "flex py-[30px]">
            <p className={`uppercase pr-[40px] text-[18px] font-bold cursor-pointer ${isActive ? 'text-[#444444]' : 'text-[#c6c6c6]'}`} onClick={() => handleToggle()}>
              Description
            </p>
            <p className={`uppercase pr-[40px] text-[18px] font-bold cursor-pointer ${isActive ? 'text-[#c6c6c6]' : 'text-[#444444]'}`} onClick={() => handleToggle()}>
              Additional information
            </p>
        </div>

        <div className={`bg-[#F8F8F8] py-[30px] px-[30px] text-gray-500 text-[14px] ${isActive ? '' : 'hidden'}`}>
            {description}
        </div>

        <div className={`${isActive ? 'hidden' : ''}`}>
          <table className="border border-gray-300 w-[100%]">
            <tbody>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-[20px] py-[20px] font-bold text-[14px] text-gray-500 w-[20%]">Color</td>
                <td className="border border-gray-300 capitalize px-[20px] py-[20px] text-[14px]">{color}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-hidden">
        <RelateProductList/>
      </div>
    </div>
  );
}

export default ProductDetail;
