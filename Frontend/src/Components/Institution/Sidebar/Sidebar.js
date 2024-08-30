import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-100 w-[20vw] p-4">
        <ul className="space-y-4 p-[3rem]">
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/InstituteDashboard")}
          >
            Dashboard
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/DrugInventory")}
          >
            Drug Inventory
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/MyOrders")}
          >
            My Orders
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/InstituteAnalytics")}
          >
            Analytics
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/Transactions")}
          >
            Transactions
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/to-orders-list")}
          >
            To Order List
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/vendors")}
          >
            Vendors
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/expiring-drugs")}
          >
            Expiring Drugs
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/emergency-orders")}
          >
            Emergency Orders
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/Notifications")}
          >
           Notifications
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/Institute/chat-support")}
          >
            Chat Support
          </li>
          <li
            className="text-gray-800 font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/my-details")}
          >
            My Details
          </li>
        </ul>
      </div>

      {/* Main Chat Area */}
    </div>
  );
};

export default Sidebar;
