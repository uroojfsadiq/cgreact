import React, { Component } from "react";
import AdminBar from "./adminBar";

class AdminManage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AdminBar />
        <div id="admin_manage">
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Manage Admin Settings</h1>
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
                        <h5 className="card-title">Some Heading</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <a href="#" className="card-link">
                          Some Link
                        </a>
                        <a href="#" className="card-link">
                          Another link
                        </a>
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

export default AdminManage;
