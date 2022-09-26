import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "../../components/Navbars/AdminNavbar";

export default function Dashboard() {
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
