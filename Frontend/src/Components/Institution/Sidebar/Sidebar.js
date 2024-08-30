import React from 'react';
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4">
        <ul className="space-y-4">
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500" onclick = {()=>navigate("/Dashboard")}>Dashboard</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Drug Inventory</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">My Orders</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Analytics</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Transactions</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">To Order List</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Vendors</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Expiring Drugs</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Emergency Orders</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">Chat Support</li>
          <li className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500">My Details</li>
        </ul>
      </div>

      {/* Main Chat Area */}
      
    </div>
  );
};

export default Sidebar;
