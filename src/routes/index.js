import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgetpassword from "../pages/Forgetpassword";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProduct from "../pages/AllProduct";
import UploadProduct from "../components/UploadProduct";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Searchproduct from "../pages/Searchproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "product-category",
        element: <CategoryProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <Forgetpassword />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <Searchproduct />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-products",
            element: <AllProduct />,
          },
          {
            path: "upload-product",
            element: <UploadProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
