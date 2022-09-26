import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import CardSettings from "components/Cards/CardSettings";
import useAuth from "hooks/useAuth";

export default function Admin() {


  return (
    <>
      <div className="relative  md:ml-64 h-screen bg-blueGray-100">
        <AdminNavbar />
     
        <HeaderStats />
        <div className="px-4 flex flex-col justify-between md:px-10 mx-auto w-full -m-24">
          <Sidebar />
          <FooterAdmin  />
        </div>
      </div>
    </>
  );
}
