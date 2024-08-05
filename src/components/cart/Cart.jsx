import CartItem from './CartItem'
import Calculatebar from './Calculatebar'
import { Link } from "react-router-dom";
import iconCart from "@/assets/images/shopping_cart.png";

function Cart() {
  return (
    <div className="mb-auto">
      <div className="flex justify-between py-[20px] py-[20px] px-[20px]">
        <div className="flex ">
          <h5 className="text-3xl md:text-4xl text-white pr-[10px]">
            My Cart
          </h5>
          <img src={iconCart} alt="" className="w-10" />
        </div>
          <Link
            to={"/sumline-shop/"}
            className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
          >
            Go to Home page
          </Link>
      </div>
      <div className=" p-[20px]  md:flex space-x-[10px] justify-items-center">
        <CartItem />
        <Calculatebar />
      </div>
  </div>
  )
}

export default Cart