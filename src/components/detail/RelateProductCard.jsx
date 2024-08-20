import {useState} from 'react'
import { Link } from 'react-router-dom'
import useStore from "@/store/store";


function RelateProductCard({image, name, id, price, category, color, wishstatus, cartquantity}) {
  const {setCartQuantity, setWishStatus,} = useStore();


  const handlePlusQuantity = (id,quantity) =>{
    setCartQuantity(id,quantity+1)
  }

  const handleWishStatus = (id,status) => {
    setWishStatus(id,status)
  }


  const [isActive, setIsActive] = useState(false)


  return (
    <div className="">
      <div className="relative" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
        <Link to={`/sumline-shop-v2/detail/${id}`}>
          <div className=" h-[335px] w-[335px] bg-black ">
            <img className="h-[100%] w-[100%] hover:opacity-75" src={image[0]} alt="" />
          </div>
        </Link>
        <div className={isActive ? 'block' : 'hidden'}>
          <button className= {`absolute right-[10px] bottom-[56px] text-black text-sm px-2.5 py-2.5 text-center ${wishstatus ? 'bg-[#222222] ' : 'bg-white'}`} onClick={() => handleWishStatus(id,wishstatus)}>
            <span className={`material-symbols-outlined text-[16px] cursor-pointer
                ${wishstatus ? 'text-white' : 'text-gray-500'}`
              }>favorite</span>
          </button>
            <button className=" absolute right-[10px] bottom-[10px] text-black bg-[white] hover:bg-gray-300  text-sm px-2.5 py-2.5 text-center" onClick={() => handlePlusQuantity(id,cartquantity)}>
                <span className="material-symbols-outlined text-[16px]">
                  shopping_cart
                </span>
            </button>
        </div>
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

export default RelateProductCard