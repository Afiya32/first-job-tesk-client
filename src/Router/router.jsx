import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../Pages/Home";
import HomeComponent from "../Components/HomeComponent";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashBoard from "../Pages/DashBoard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
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
    }
  ]);

export default router;