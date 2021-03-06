import React, { Component } from "react";
import AdminBar from "./adminBar";

class Widgets extends Component {
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
                    <h1 className="m-0 text-dark">Widgets</h1>
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
                        <h5 className="card-title">
                          Widget 01 e.g. Social Media Links
                        </h5>
                        <p className="card-text">
                          <textarea
                            className="form-control"
                            rows={15}
                            defaultValue={""}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Widget 02</h5>
                        <p className="card-text">
                          <textarea
                            className="form-control"
                            rows={15}
                            defaultValue={""}
                          />
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

export default Widgets;
