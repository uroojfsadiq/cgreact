import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import adminPanel from "./components/adminPanel";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={adminPanel} />
    </div>
  </Router>
);

export default routing;
