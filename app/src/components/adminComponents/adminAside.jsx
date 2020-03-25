import React, { Component } from "react";

class AdminAside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <aside className="main-sidebar sidebar-light-primary elevation-2">
          <a
            href
            className="brand-link"
            style={{ padding: "0.8125rem 0.2rem", borderBottom: "none" }}
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
                <li className="nav-item has-treeview menu-open">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-home" />
                    <p>
                      Home Components
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview menu-open">
                    <li className="nav-item">
                      <a href="#" className="nav-link active">
                        <i className="fab fa-react nav-icon" />
                        <p>Component-01</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default AdminAside;
