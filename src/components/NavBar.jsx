import React from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";
import iconCart from "@/assets/images/shopping_cart.png";
import Logo from "@/assets/images/logo.png";

function NavBar() {
  const { cartItems } = useStore();
  const productQuantity = [];

  cartItems.map((item) => {
    productQuantity.push(item.quantity);
  });

  const totalQuantity = productQuantity.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  
  return (
    <nav className="bg-[#7C9097] fixed w-full z-20 top-0 left-0">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/sumline-shop-v2/"
          className="text-2xl font-semibold text-white flex"
        >
          <img src={Logo} alt="" className="w-16 pr-[10px] hover:scale-110 transform transition duration-2"/>
          <p className="my-auto hover:underline">Sumline Shop</p>
        </Link>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative hover:scale-110 transform transition duration-2">
          <Link to="/sumline-shop-v2/cart" className="text-white">
            <img src={iconCart} alt="" className="w-6" />
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
