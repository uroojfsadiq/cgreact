import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AdminBar from "./components/adminComponents/adminBar";
import AdminDashboard from "./components/adminComponents/adminDashboard";
import AdminManage from "./components/adminComponents/adminManage";
import ManageNavbar from "./components/adminComponents/manageNavbar";
import HomeSec01 from "./components/adminComponents/homeSec01";
import Widgets from "./components/adminComponents/widgets";
import Forms from "./components/adminComponents/forms";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/admin" component={AdminBar} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/admin/manage" component={AdminManage} />
      <Route exact path="/admin/navbar" component={ManageNavbar} />
      <Route exact path="/admin/homepage-section01" component={HomeSec01} />
      <Route exact path="/admin/widgets" component={Widgets} />
      <Route exact path="/admin/forms" component={Forms} />
    </div>
  </Router>
);

export default routing;
