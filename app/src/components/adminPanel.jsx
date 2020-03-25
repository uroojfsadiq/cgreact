import React from "react";
import AdminNav from "./adminComponents/adminNav";
import AdminAside from "./adminComponents/adminAside";

const adminPanel = () => {
  return (
    <React.Fragment>
      <AdminNav />
      <AdminAside />
    </React.Fragment>
  );
};

export default adminPanel;
