import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Our from "./pages/Our/Our";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Home",
          element: <Home />,
        },
        {
          path: "Our",
          element: <Our />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Login",
          element: <Login />,
        },
                {
          path: "Register",
          element: <Register />,
        },
        {
          path: "Wishlist",
          element: <Wishlist />,
        },
        {
          path: "Cart",
          element: <Cart />,
        },
{
  path: "/ProductCart/:id",
  element: <ProductDetails />,
}

      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}