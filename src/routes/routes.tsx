import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetailsPage from "@/pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "@/pages/ProductsPage/ProductsPage";
import CheckoutPage from "@/pages/CheckoutPage/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:5000/api/v1/productCount"),
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default router;
