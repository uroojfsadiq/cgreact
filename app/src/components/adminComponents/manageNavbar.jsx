import React, { Component } from "react";
import AdminBar from "./adminBar";

class ManageNavbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AdminBar />
        <div id="manage_navbar">
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h2 className="m-0 text-dark">Manage Menu Links</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Primary Menu</h5>
                        <p className="card-text">
                          <p>
                            <label>Link 01</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                          <p>
                            <label>Link 02</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                          <p>
                            <label>Link 03</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Footer Menu</h5>
                        <p className="card-text">
                          <p>
                            <label>Link 01</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                          <p>
                            <label>Link 02</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                          <p>
                            <label>Link 03</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Secondary Menu</h5>
                        <p className="card-text">
                          <p>
                            <label>Link 01</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                          <p>
                            <label>Link 02</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                          <p>
                            <label>Link 03</label>
                            <input
                              type="text"
                              name="menu-link"
                              className="custom-menu-link"
                            />
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ManageNavbar;
