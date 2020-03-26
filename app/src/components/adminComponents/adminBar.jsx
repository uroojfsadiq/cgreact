import React, { Component } from "react";

class AdminBar extends Component {
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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Page # 2
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Page # 3
              </a>
            </li>
          </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-2">
          <a
            href
            className="brand-link"
            style={{
              padding: "20px 0.2rem 40px",
              borderBottom: "none",
              background: "white"
            }}
          >
            <img
              src="../images/Code-Girls-Logo-1-1536x230.png"
              alt="CODEGIRLS-LOGO"
              className="brand-image img-rectangle"
              style={{ opacity: 1 }}
            />
          </a>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="../images/admin-img.webp"
                  className="img-circle elevation-2"
                  alt="admin"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Admin
                </a>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item" id="dashboard_button">
                  <a href="/admin/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-chalkboard" />
                    <p> Dashboard</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/manage" className="nav-link">
                    <i className="nav-icon fas fa-users-cog" />
                    <p> Manage Admin </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/navbar" className="nav-link">
                    <i className="nav-icon fas fa-bars" />
                    <p>Manage Navbar</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-home" />
                    <p>
                      Manage Homepage
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview menu-open">
                    <li className="nav-item">
                      <a
                        href="/admin/homepage-section01"
                        className="nav-link nav-sublink"
                      >
                        <i className="fab fa-react nav-icon" />
                        <p>Section 01</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link nav-sublink">
                        <i className="fab fa-react nav-icon" />
                        <p>Section 02</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/admin/widgets" className="nav-link">
                    <i className="nav-icon fas fa-hashtag" />
                    <p>Widgets</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/forms" className="nav-link">
                    <i className="nav-icon fab fa-wpforms" />
                    <p>Forms</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default AdminBar;
