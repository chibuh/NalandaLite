import React from "react";
import { Navigate, Outlet, Redirect, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"


import {useDispatch} from "react-redux";
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';

function ProtectedRoute() {
    
    const dispatch = useDispatch();
    const isAuthenticated = localStorage.getItem("token");
    const name = localStorage.getItem("name");
  
    if(isAuthenticated) dispatch(actionCreators.loggedIN(name))
    else dispatch(actionCreators.loggedOUT(""));

  return (
    isAuthenticated ? <Outlet/> : <Navigate to="/"/>
  );
}

export default ProtectedRoute;