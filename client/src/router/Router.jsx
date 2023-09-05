import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import Layout from '../pages/Layout.jsx';
import Otp from '../pages/Otp.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ResetPassword from '../pages/ResetPassword.jsx';
import RegisterTokenVerify from '../pages/RegisterTokenVerify.jsx';

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> }
    ]
  },
  {
    path: '/otp',
    element: <Otp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/resetpass',
    element: <ResetPassword />
  },
  {
    path: '/verify/:token',
    element: <RegisterTokenVerify />
  }
]);
