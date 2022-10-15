import React from "react";

// components


import CardPageVisits from "components/Cards/CardPageVisits.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";

export default function AdminHistory() {
  return (

      <>
        <div className="relative  md:ml-64 h-screen bg-blueGray-100">
          <AdminNavbar />
          <div className="w-4/12 px-4">
            <Sidebar />
          </div>
          <div className="w-full pt-32 px-4">
            <CardPageVisits />
          </div>
        </div>
      </>
  
  );
}
