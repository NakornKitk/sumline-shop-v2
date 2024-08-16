import {useState} from 'react'
import { Link } from 'react-router-dom'
import useStore from "@/store/store";


function ProductCard({image, name, id, price, category, color, wishstatus, cartquantity}) {
  const { data, setCartQuantity, setWishStatus,} = useStore();


  // const [quantity, setQuantity] = useState(0)


  const handlePlusQuantity = (id,quantity) =>{
    setCartQuantity(id,quantity+1)
  }

  const handleWishStatus = (id,status) => {
    setWishStatus(id,status)
  }

  return (
    <div className="mx-[auto]">
      <div className="relative ">
        <Link to={`/sumline-shop-v2/detail/${id}`}>
          <div className=" h-[300px] w-[260px] bg-black ">
            <img className="h-[100%] w-[100%] hover:opacity-75" src={image[0]} alt="" />
          </div>
        </Link>
        <button className=" absolute right-[10px] bottom-[56px] text-black bg-[white] hover:bg-gray-200  text-sm px-2.5 py-2.5 text-center">
          <span className={
              wishstatus ? 'material-symbols-outlined text-[16px] text-[#EF444d] text-white cursor-pointer' : 'material-symbols-outlined text-[16px] text-black cursor-pointer'
            } onClick={() => handleWishStatus(id,wishstatus)}>favorite</span>
        </button>
          <button className=" absolute right-[10px] bottom-[10px] text-black bg-[white] hover:bg-gray-200  text-sm px-2.5 py-2.5 text-center" onClick={() => handlePlusQuantity(id,cartquantity)}>
              <span className="material-symbols-outlined text-[16px]">
                shopping_cart
              </span>
          </button>
      </div>
        <div className="px-5 py-5 text-center">
          <p className=" text-[14px] text-gray-500">{name}</p>
          <p className=" text-[14px] text-[black py-[2px]">color: {color}</p>
          <div className="w-[100%]flex items-center  ">
            <span className="text-[14px] font-semibold">{price} baht</span>
          </div> 
        </div>
    </div>
  )
}

export default ProductCard