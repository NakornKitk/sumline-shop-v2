import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import HomePage from '@/pages/HomePage';
import DetailPage from '@/pages/DetailPage';
import CartPage from '@/pages/CartPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/sumline-shop/",
      element: <HomePage />
    },
    {
      path: "/sumline-shop/detail/:id",
      element: <DetailPage />
    },
    {
      path: "/sumline-shop/cart",
      element: <CartPage />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

