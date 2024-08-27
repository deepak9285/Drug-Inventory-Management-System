import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="text-center  mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
          Inventory Dashboard
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-100 border-b border-blue-300">
              <th className="py-3 px-4 text-left text-blue-700 font-semibold border-r border-blue-300">Medicine ID</th>
              <th className="py-3 px-4 text-left text-blue-700 font-semibold border-r border-blue-300">Name</th>
              <th className="py-3 px-4 text-left text-blue-700 font-semibold border-r border-blue-300">Category</th>
              <th className="py-3 px-4 text-left text-blue-700 font-semibold border-r border-blue-300">Quantity</th>
              <th className="py-3 px-4 text-left text-blue-700 font-semibold border-r border-blue-300">Price</th>
              <th className="py-3 px-4 text-left text-blue-700 font-semibold">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 border-r border-gray-200">001</td>
              <td className="py-3 px-4 border-r border-gray-200">Aspirin</td>
              <td className="py-3 px-4 border-r border-gray-200">Pain Reliever</td>
              <td className="py-3 px-4 border-r border-gray-200">100</td>
              <td className="py-3 px-4 border-r border-gray-200">$10.00</td>
              <td className="py-3 px-4">2025-12-31</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 border-r border-gray-200">002</td>
              <td className="py-3 px-4 border-r border-gray-200">Tylenol</td>
              <td className="py-3 px-4 border-r border-gray-200">Pain Reliever</td>
              <td className="py-3 px-4 border-r border-gray-200">200</td>
              <td className="py-3 px-4 border-r border-gray-200">$15.00</td>
              <td className="py-3 px-4">2024-11-30</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
