import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Ticket from "views/Ticket";
import NotFound from "views/NotFound";
import UserProvider from "context/UserProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/panel" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        <Route path="/ticket" exact component={Ticket} />
        <Route path="/notFound" exact component={NotFound} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </BrowserRouter>
    <ToastContainer />
  </UserProvider>,
  document.getElementById("root")
);
