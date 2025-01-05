
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Cart from '@/components/cart/Cart'
import useStore from "@/store/store";

function CartPage() {
  const { theme } = useStore();

  
  return (
    <div className={`flex flex-col min-h-screen
    ${theme === "light" ? "bg-white text-gray-500" : "bg-[#222222] text-white"}`}
    >
      <NavBar />
      <Cart/>
      <Footer/>
    </div>
  )
}

export default CartPage