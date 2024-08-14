import WishItem from './WishItem'
import { Link } from "react-router-dom";


function Wish() {
  return (
    <div className="mb-auto mt-[80px]">
      <div className="flex justify-between py-[20px] px-[20px] bg-[url('https://nakornkitk.github.io/sumline-shop-v2/images/bg.jpg')] bg-cover bg-fixed">
        <Link
          to={"/sumline-shop-v2/"}
          className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
        >
          Go To Home page
        </Link>
        <Link
          to={"/sumline-shop-v2/cart"}
          className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
        >
          Go to my cart
        </Link>
      </div>
      <div className="flex m-[20px]">
        <h5 className="text-4xl text-black pr-[10px]">
          My Wish List
        </h5>
        <span className="material-symbols-outlined pt-[10px]">favorite</span>
      </div>
      <div className="p-[20px] pt-[10px] md:flex md:space-x-[10px] justify-items-center">
        <WishItem />
      </div>
  </div>
  )
}

export default Wish