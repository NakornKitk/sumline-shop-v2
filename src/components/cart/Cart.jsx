import CartItem from './CartItem'
import Calculatebar from './Calculatebar'
import { Link } from "react-router-dom";
import iconCart from "@/assets/images/shopping_cart.png";

function Cart() {
  return (
    <div className="mb-auto mt-[80px]">
      <div className="flex justify-between py-[20px] px-[20px] bg-[url('@/assets/images/bg.jpg')] bg-fixed">
          <Link
            to={"/sumline-shop-v2/"}
            className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
          >
            Go to Home page
          </Link>
      </div>
      <div className="flex m-[20px]">
        <h5 className="text-4xl text-black pr-[10px]">
          My Cart
        </h5>
        <img src={iconCart} alt="" className="w-10" />
      </div>
      <div className="p-[20px] pt-[10px] md:flex md:space-x-[10px] justify-items-center">
        <CartItem />
        <Calculatebar />
      </div>
  </div>
  )
}

export default Cart