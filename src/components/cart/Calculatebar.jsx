
import useStore from "@/store/store";
import iconShopee from "https://nakornkitk.github.io/sumline-shop-v2/images/shopee-icon.png";
import iconLine from 'https://nakornkitk.github.io/sumline-shop-v2/images/LINE_Brand_icon.png'
import iconInstagram from 'https://nakornkitk.github.io/sumline-shop-v2/images/ig-instagram-icon.png'

function Calculatebar() {
  const { cartItems } = useStore();
  const allPrice = []
  const allQuantity = []

  cartItems.map((item) => {
    allPrice.push(item.price*item.quantity)
  })

  cartItems.map((item) => {
    allQuantity.push(item.quantity)
  })


  const totalPrice = allPrice.reduce((partialSum, a) => partialSum + a, 0);
  const totalQuantity = allQuantity.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div className="bg-zinc-200 bg-opacity-85 rounded-2xl min-w-[29%] min-h-[240px] max-h-[280px] p-[10px] mt-[10px] md:mt-[0px] ">
      <h5 className="text-4xl text-black mb-[10px]"> Order Summary</h5>
      <div className="flex justify-between">
        <h5 className="text-xl text-black"> Total Price:</h5>
        <h5 className="text-xl font-bold text-black">{totalPrice} ฿</h5>
      </div>
      <div className="flex justify-between mb-[10px]">
        <h5 className="text-xl text-black"> Total Quantity:</h5>
        <h5 className="text-xl font-bold text-black]">{totalQuantity} pcs</h5>
      </div>
      <hr className="bg-black p-[0.5px] my-[5px]"></hr>
      <h5 className=" text-2xl pb-[10px] rounded-[16px] font-bold text-black">Order Now</h5> 
      <div className="px-[10px] flex">
        <a
            href={"https://shopee.co.th/sumline.shop"}
            className="w-10 mr-[10px] hover:scale-110 transform transition duration-2"
          >
            <img src={iconShopee} alt=""/>
          </a>
          <a
            href={"https://www.instagram.com/sumline.shop"}
            className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
          >
            <img src={iconInstagram} alt=""/>
          </a>
          <a
            href={"https://line.me/R/ti/p/@719ojtgk"}
            className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
          >
            <img src={iconLine} alt=""/>
          </a>
      </div>
    </div>
    
  )
}

export default Calculatebar