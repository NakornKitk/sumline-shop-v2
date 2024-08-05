import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";
import ImageSlider from './ImageSlider.jsx';

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
    <div className="w-100% bg-white">
      <div className="flex justify-between py-[20px] px-[20px] bg-[url('@/assets/images/bg.jpg')] bg-cover bg-fixed">
        <Link
          to={"/"}
          className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
        >
          Back
        </Link>
        <h5 className="text-xl py-[5px] md:text-4xl md:py-0 text-white">
          Product Detail
        </h5>
        <Link
          to={"/cart"}
          className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
        >
          Go to my cart
        </Link>
      </div>
      <div className=' px-[20px] py-[40px] md:flex mb-[10px]">'>
        <div className="px-[10%] py-[10px] md:px-[30px] md:max-w-[40%]" >
          <ImageSlider images={image} />
        </div>
        <div className="min-w-[40%] pt-[20px] px-[10%] md:px-[30px]">
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