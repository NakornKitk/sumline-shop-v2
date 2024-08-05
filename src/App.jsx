import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import HomePage from '@/pages/HomePage';
import DetailPage from '@/pages/DetailPage';
import CartPage from '@/pages/CartPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/detail/:id",
      element: <DetailPage />
    },
    {
      path: "/cart",
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

