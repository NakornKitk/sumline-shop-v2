import {useState} from 'react'
import { Link } from 'react-router-dom'
import useStore from "@/store/store";


function ProductCard({image, name, id, price, category, color}) {
  const { addCartItem, cartItems, setItemQuantity} = useStore();
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
      addCartItem({id:id,name:name,price:price,color:color,quantity:firstQuantity+1})
    }
    setQuantity(quantity => quantity+1)
    console.log(quantity)
  }


  return (
    <div className="w-full max-w-[300px] bg-zinc-100 border border-gray-200 rounded-lg shadow mx-[auto]">
      <Link to={`/detail/${id}`}>
        <img className="hover:scale-105 transform transition duration-2 h-[300px] w-[300px]" src={image[0]} alt="" />
      </Link>
        <div className="px-5 py-5">
          <p className=" text-xl text-black">{name}</p>
          <p className=" text-gray-500">color: {color}</p>
          <div className="flex items-center justify-between mt-2.5 ">
            <span className="text-3xl text-black">{price} ฿</span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handlePlusQuantity(id)}>Add to cart</button>
          </div> 
        </div>
    </div>
  )
}

export default ProductCard