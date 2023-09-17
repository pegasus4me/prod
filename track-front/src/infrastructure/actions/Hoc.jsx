// ---------------------------------------------------------------------
// High level component for auth ---------------------------------------
// ---------------------------------------------------------------------
import React from "react";
import { Navigate } from "react-router-dom";

const AuthCheckPoint = (Component) => (props) => {

  const UserCheckPoint = window.localStorage.getItem("user");
  const TokenCheckPoint = window.localStorage.getItem("token");

  if (UserCheckPoint && TokenCheckPoint) {
    return <Component {...props} />;
  }
   return <Navigate to="/login"/>
 
};

export default AuthCheckPoint;
