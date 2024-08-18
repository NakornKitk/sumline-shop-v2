
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Login from '@/components/login/Login'

function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <Login />
      <Footer/>
    </div>
  )
}

export default LoginPage