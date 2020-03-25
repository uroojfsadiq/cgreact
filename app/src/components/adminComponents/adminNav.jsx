import React, { Component } from "react";

class AdminNav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default AdminNav;
