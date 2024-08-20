import WishItem from './WishItem'
import { Link } from "react-router-dom";


function Wish() {
  return (
    <div className="mb-auto px-[20px] md:px-[50px] 2xl:px-[175px] ">
      <div className="py-[100px] px-[20px] bg-[#F5F5F5]">
        <p className="text-[26px] font-semibold text-center">WISHLIST</p>
          <div className="flex justify-center py-[10px]">
            <Link
              to={"/sumline-shop-v2/"}
              className="text-[14px] text-[#666666] hover:text-black"
            >
              <p>Home </p>
            </Link>
            <p className="px-[14px]">&#x2022;</p>
            <p className="text-[14px] text-[#666666]">Wishlist</p>
          </div>
      </div>
      <div className="py-[120px] ">
        <WishItem />
      </div>
  </div>
  )
}

export default Wish