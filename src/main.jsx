import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import Orders from './Components/orders/Orders.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'

// export const AuthContext = createContext(null);

// const userInfo = {
//   email: 'Potato@alu.com'
// }
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'signup', Component: SignUp },
      // { path: 'orders', Component: Orders }
      {
        path: 'orders',
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path:'dashboard',
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    {/* <AuthContext value={userInfo}>
      <RouterProvider router={router}></RouterProvider>
</AuthContext> */}
  </StrictMode>,
)
