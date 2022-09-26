import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import useAuth from "hooks/useAuth";

export default function Settings() {

  
  return (
    <>
      <div className="relative  md:ml-64 h-screen bg-blueGray-100">
        <AdminNavbar />
        <div className="w-4/12 px-4">
          <Sidebar />
        </div>
        <div className="w-full pt-32 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
