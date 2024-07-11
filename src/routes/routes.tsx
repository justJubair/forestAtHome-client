import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "@/pages/ProductsPage/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
