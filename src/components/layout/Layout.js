import React  from "react";
import { Outlet, Link } from "react-router-dom";
import './layout.css'

const Layout = () => {
    return(
        <div className="layout">
           <Outlet /> 
        </div>
    );
}

export default Layout;