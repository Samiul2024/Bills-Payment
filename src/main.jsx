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
import Bills from './Components/bills/Bills.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx'
import PhoneDetails from './Components/PhoneDetails.jsx'

// export const AuthContext = createContext(null);

// const userInfo = {
//   email: 'Potato@alu.com'
// }
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        element: <Home />,
        // hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading Bills , Please wait.....</h1>,
        // loader: () => fetch('/public/bills.json')

      },
      { path: 'login', Component: Login },
      // { path: 'register', Component: Register },
      { path: 'signup', Component: SignUp },
      // { path: 'orders', Component: Orders }
      {
        path: 'bills',
        element: <PrivateRoute>
          <Bills></Bills>,
        </PrivateRoute>,
        hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading Bills , Please wait.....</h1>,
        loader: () => fetch('/public/bills.json')
      },
      {
        path: 'profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
      {
        path: 'updateProfile',
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path: 'bills-page/:id',
        element: <PrivateRoute>
          <PhoneDetails></PhoneDetails>,
        </PrivateRoute>,
        hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading Bills details , Please wait.....</h1>,
        loader: () => fetch('../bills.json'),

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
