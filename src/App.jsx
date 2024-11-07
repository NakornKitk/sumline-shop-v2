import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import HomePage from '@/pages/HomePage';
import DetailPage from '@/pages/DetailPage';
import CartPage from '@/pages/CartPage';
import WishPage from '@/pages/WishPage';
import LoginPage from '@/pages/LoginPage';
import ScrollToTop from '@/utils/ScrollToTop.js'
import BackToTopButton from '@/components/BackToTopButton'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/sumline-shop-v2/" element={<HomePage />} />
        <Route path="/sumline-shop-v2/detail/:id" element={<DetailPage />} />
        <Route path="/sumline-shop-v2/cart" element={<CartPage />} />
        <Route path="/sumline-shop-v2/wish" element={<WishPage />} />
        <Route path="/sumline-shop-v2/login" element={<LoginPage />} />
      </Routes>
      <BackToTopButton/>
    </BrowserRouter>
  )
}

export default App

