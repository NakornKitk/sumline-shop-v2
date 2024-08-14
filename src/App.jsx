import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import HomePage from '@/pages/HomePage';
import DetailPage from '@/pages/DetailPage';
import CartPage from '@/pages/CartPage';
import WishPage from '@/pages/WishPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/sumline-shop-v2/",
      element: <HomePage />
    },
    {
      path: "/sumline-shop-v2/detail/:id",
      element: <DetailPage />
    },
    {
      path: "/sumline-shop-v2/cart",
      element: <CartPage />
    },
    {
      path: "/sumline-shop-v2/wish",
      element: <WishPage />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

