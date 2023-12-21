import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../Pages/Home";
import HomeComponent from "../Components/HomeComponent";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashBoard from "../Pages/DashBoard";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Error from "../Pages/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element : <HomeComponent/>
        },{
            path:"/about",
            element:<About/>
        },{
            path:"/contact",
            element:<Contact/>
        },
      ]
    },{
        path:'/dashboard',
        element:<DashBoard/>
    },{
        path:'/signup',
        element:<SignUp/>
    },{
        path:'/login',
        element:<Login/>
    }
  ]);

export default router;