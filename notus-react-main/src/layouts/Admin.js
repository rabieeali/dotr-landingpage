import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative  md:ml-64 h-screen bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 flex flex-col justify-between md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/panel/dashboard" exact component={Dashboard} />
            <Route path="/panel/maps" exact component={Maps} />
            <Route path="/panel/ticket" exact component={Settings} />
            <Route path="/panel/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          {/* <FooterAdmin  /> */}
        </div>
      </div>
    </>
  );
}
