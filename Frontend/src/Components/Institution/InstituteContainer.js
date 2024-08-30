import React from "react";
import Sidebar from "./Sidebar/Sidebar";

import { Outlet } from "react-router";
function InstituteContainer() {
  return (
    <div className="border">
      
        <div className="border"><Sidebar/></div>
      <div className="border"><Outlet/></div> 
      
    </div>
  );
}

export default InstituteContainer;
