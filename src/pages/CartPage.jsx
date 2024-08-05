
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Cart from '@/components/cart/Cart'

function CartPage() {
  return (
    <div className="flex flex-col justify-between bg-[url('@/assets/images/bg.jpg')] bg-cover bg-fixed min-h-screen">
      <NavBar />
      <Cart/>
      <Footer/>
    </div>
  )
}

export default CartPage