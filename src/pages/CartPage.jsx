
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Cart from '@/components/cart/Cart'

function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <Cart/>
      <Footer/>
    </div>
  )
}

export default CartPage