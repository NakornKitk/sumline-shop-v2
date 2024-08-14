import {useState} from 'react'
import { Link } from 'react-router-dom'
import useStore from "@/store/store";


function ProductCard({image, name, id, price, category, color, wishstatus}) {
  const { addCartItem, cartItems, setItemQuantity, setWishStatus,} = useStore();
  let firstQuantity = 0;

  cartItems.map((item) => {
    if(item.id == id) {
      firstQuantity += item.quantity
    }
  })

  const [quantity, setQuantity] = useState(firstQuantity)


  const handlePlusQuantity = (id) =>{
    if (cartItems.some(item => item.id === id)) {
      setItemQuantity(id,quantity+1)
    } else {
      addCartItem({id:id,name:name,price:price,color:color,image:image[0],quantity:firstQuantity+1})
    }
    setQuantity(quantity => quantity+1)
  }

  const handleWishStatus = (id,status) => {
    setWishStatus(id,status)
  }

  return (
    <div className="w-full max-w-[300px] bg-zinc-100 border border-gray-200 rounded-lg shadow mx-[auto] ">
      <div className="relative hover:scale-105 transform transition duration-2">
        <Link to={`/sumline-shop-v2/detail/${id}`}>
          <img className="h-[300px] w-[300px] rounded-t-lg" src={image[0]} alt="" />
        </Link>
        <span className={
            wishstatus ? 'material-symbols-outlined absolute right-[4%] top-[4%] rounded-full p-[5px] bg-[#EF4444] text-white cursor-pointer' : 'material-symbols-outlined absolute right-[4%] top-[4%] p-[5px] text-black cursor-pointer'
          } onClick={() => handleWishStatus(id,wishstatus)}>favorite</span>
      </div>
        <div className="px-5 py-5">
          <p className=" text-xl text-black">{name}</p>
          <p className=" text-gray-500">color: {color}</p>
          <div className="flex items-center justify-between mt-2.5 ">
            <span className="text-3xl text-black">{price} ฿</span>
            <button className="text-white bg-[#7C9097] hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handlePlusQuantity(id)}>Add to cart</button>
          </div> 
        </div>
    </div>
  )
}

export default ProductCard