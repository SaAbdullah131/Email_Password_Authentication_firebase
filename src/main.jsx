import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RegisterRbs from './component/RegisterRbs.jsx/RegisterRbs';
import RegisterBs from './component/RegisterBs/RegisterBs';

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children: [
       {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      }, 
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rbs',
        element:<RegisterRbs></RegisterRbs>
      },
      {
        path:'/register-bs',
        element:<RegisterBs></RegisterBs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
