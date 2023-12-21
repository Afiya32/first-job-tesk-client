/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loadingpage from "./Loadingpage";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    
      if(loader){
        return <Loadingpage/>
      }
      if(user){
        return children;
      }
      return <Navigate to ='/signup'></Navigate>
};

export default PrivateRoute;