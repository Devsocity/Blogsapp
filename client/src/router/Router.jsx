import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";
import Layout from "../components/pages/Layout";
import Otp from "../components/pages/Otp";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import ResetPassword from "../components/pages/ResetPassword";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetpass",
    element: <ResetPassword />,
  },
]);
