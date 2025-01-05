
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Wish from '@/components/wish/Wish'

function WishPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Wish />
      <Footer/>
    </div>
  )
}

export default WishPage