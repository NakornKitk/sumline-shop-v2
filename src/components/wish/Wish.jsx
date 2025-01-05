import WishItem from './WishItem'
import { Link } from "react-router-dom";
import useStore from "@/store/store";


function Wish() {
  const { theme } = useStore();
  return (
    <div className={`"mb-auto px-[20px] md:px-[50px] 2xl:px-[175px] "
    ${theme === "light" ? "bg-white text-gray-500 " : "bg-[#222222] text-white"}`}
    >
      <div className="py-[100px] px-[20px] bg-[#F5F5F5]">
        <p className="text-[26px] font-semibold text-center text-black">WISHLIST</p>
          <div className="flex justify-center py-[10px]">
            <Link
              to={"/sumline-shop-v2/"}
              className="text-[14px] text-[#666666] hover:text-black"
            >
              <p>Home</p>
            </Link>
            <p className="px-[14px] text-[#666666] ">&#x2022;</p>
            <p className="text-[14px] text-[#666666]">Wishlist</p>
          </div>
      </div>
      <div className="py-[120px]"
      >
        <WishItem />
      </div>
  </div>
  )
}

export default Wish