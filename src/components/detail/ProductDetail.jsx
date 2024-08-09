import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";
import ImageSlider from './ImageSlider.jsx';
import icon from "https://nakornkitk.github.io/sumline-shop-v2/images/search-product-icon.svg";

function ProductDetail({
  image,
  name,
  id,
  price,
  category,
  description,
  color,
}) {
  const { cartItems, setItemQuantity, addCartItem } = useStore();
  let firstQuantity = 0;

  cartItems.map((item) => {
    if (item.id == id) {
      firstQuantity += item.quantity;
    }
  });

  const [quantity, setQuantity] = useState(firstQuantity);

  const handleMinusQuantity = (id) => {
    if (quantity == 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
      setItemQuantity(id, quantity - 1);
    }
  };

  const handlePlusQuantity = (id) => {
    if (cartItems.some((item) => item.id === id)) {
      setItemQuantity(id, quantity + 1);
    } else {
      addCartItem({
        id: id,
        name: name,
        price: price,
        color: color,
        quantity: firstQuantity + 1,
      });
    }
    setQuantity((quantity) => quantity + 1);
  };


  return (
    <div className="w-100% bg-white mt-[80px]">
      <div className="flex justify-between py-[20px] px-[20px] bg-[url('https://nakornkitk.github.io/sumline-shop-v2/images/bg.jpg')] bg-fixed">
        <Link
          to={"/sumline-shop-v2/"}
          className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
        >
          Back
        </Link>
        <Link
          to={"/sumline-shop-v2/cart"}
          className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
        >
          Go to my cart
        </Link>
      </div>
      <div className="flex px-[auto] pt-[30px] px-[20px]">
          <h5 className="text-3xl md:text-4xl text-black pl-[10%]">
            Product Detail
          </h5>
          <img src={icon} alt="" className="w-10 pl-[10px]" />
        </div>
      <div className=' px-[20px] pt-[20px] pb-[40px] md:flex mb-[10px]">'>
        <div className="px-[10%] py-[10px] md:max-w-[50%] min-w-[283px]" >
          <ImageSlider images={image} />
        </div>
        <div className="md:max-w-[50%] pt-[20px] px-[10%] md:pl-[0px]">
          <h5 className="mb-2 text-2xl md:text-4xl font-semibold tracking-tight textblack ">
            {name}
          </h5>
          <p className="text-gray-500 font-semibold capitalize">
            Category: {category}
          </p>
          <p className="text-gray-500 font-semibold capitalize">
            Color: {color}
          </p>

          <p className="text-black text-3xl pt-[10px]">{price} ฿</p>

          <div className="flex pt-[15px]">
            <button
              className="text-black font-bold mr-[5px] bg-zinc-200 px-[16px] py-[4px] rounded-[16px] hover:scale-105 transform transition duration-2"
              onClick={() => handleMinusQuantity(id)}
            >
              -
            </button>
            <p className="text-black font-bold mr-[5px] px-[10px] py-[4px] rounded-[16px]">
              {quantity}
            </p>
            <button
              className="text-black font-bold mr-[5px] bg-zinc-200 px-[16px] py-[4px] rounded-[16px] hover:scale-105 transform transition duration-2"
              onClick={() => handlePlusQuantity(id)}
            >
              +
            </button>
          </div>
          <div className="pt-[15px] text-black">
            <p className="font-semibold">Description</p>
            <p className=""> {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
