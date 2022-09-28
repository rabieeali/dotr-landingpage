import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Index from "views/Index.js";
import Ticket from "views/Ticket";
import NotFound from "views/NotFound";
import { AuthProvider } from "context/AuthProvider";
import "mapbox-gl/dist/mapbox-gl.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "views/admin/Dashboard";
import Settings from "views/admin/Settings";
import PersistLogin from "components/PersistLogin";
import RequireAuth from "components/RequireAuth";
import Layout from "components/Layout";

const FORMS = {
  "/": "0", //	صفحه اصلی
  "users": "1", //	لیست کاربران
  "profile": "2", //	پروفایل کاربر
  "userSecurity": "3", //	دسترسی کاربران
  "securityGroups": "4", //	گروههای دسترسی
  "changePassword": "5", //	تغییر رمز عبور
  "history": "8", //	تیکت های من
  "requestTicket": "9", //	تیکت پشتیبانی
  "ticket-manage": "10", //	مدیریت تیکت ها
};

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* pblic routes */}
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />

        {/* auth required routes */}

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedForms={[FORMS.history]} />}>
            <Route path="/history" element={<Dashboard />} />
          </Route>
          <Route element={<RequireAuth allowedForms={[FORMS.requestTicket]} />}>
            <Route path="/request-ticket" element={<Settings />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </AuthProvider>,
  document.getElementById("root")
);
