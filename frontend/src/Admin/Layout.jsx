import "./styles/Layout.css";

import React from "react";

import Navbar from "./Navbar";
import SideNavigation from "./SideNavigation";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-gray-50">
        <div className="hidden sm:flex">
          <SideNavigation />
        </div>
        <div className="w-100 mr-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
