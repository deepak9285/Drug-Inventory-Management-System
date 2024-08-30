import React from "react";
import Sidebar from "./Sidebar/Sidebar";

import { Outlet } from "react-router";
import Dashboard from "./Sidebar/Inventory/Dashboard";
function InstituteContainer() {
  return (
    <div className="border flex">
      <div className="border">
        <Sidebar />
      </div>
      <div className="border w-[80vw]">
        <Outlet />
      </div>
      {/* <div className="w-[70%]"><Dashboard/></div> */}
    </div>
  );
}

export default InstituteContainer;
