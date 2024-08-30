import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <div className="w-1/4 bg-gray-200 p-4">
        <ul className="space-y-4">
          <li className="text-xl font-semibold">Dashboard</li>
          <li>Drug Inventory</li>
          <li>My Orders</li>
          <li>Analytics</li>
          <li>Transactions</li>
          <li>To Order List</li>
          <li>Notifications</li>
          <li>Vendors</li>
          <li>Expiring Drugs</li>
          <li>Emergency Orders</li>
          <li>Chat Support</li>
          <li>My Details</li>
        </ul>
      </div> */}

      {/* Main Dashboard */}
      <div className="w-3/4 bg-white p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-300 p-4 text-center">
            <h2 className="text-xl font-semibold">Drugs</h2>
            <p className="text-2xl">100</p>
          </div>
          <div className="bg-gray-300 p-4 text-center">
            <h2 className="text-xl font-semibold">My Orders</h2>
            <p className="text-2xl">21</p>
          </div>
          <div className="bg-gray-300 p-4 text-center">
            <h2 className="text-xl font-semibold">To Order</h2>
            <p className="text-2xl">10</p>
          </div>
          <div className="bg-gray-300 p-4 text-center">
            <h2 className="text-xl font-semibold">Expiring Drugs (1 month)</h2>
            <p className="text-2xl">23</p>
          </div>
        </div>

        {/* Consumption Data */}
        <h2 className="text-xl font-semibold mb-4">Last 365 days consumption data</h2>
        <div className="bg-white p-4 shadow-lg">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

// Mock Line Chart component
const LineChart = () => {
  return (
    <svg viewBox="0 0 600 300" className="w-full h-64">
      {/* X and Y axis */}
      <line x1="50" y1="250" x2="550" y2="250" stroke="black" strokeWidth="2" />
      <line x1="50" y1="250" x2="50" y2="50" stroke="black" strokeWidth="2" />

      {/* Chart Data */}
      <polyline
        fill="none"
        stroke="black"
        strokeWidth="3"
        points="50,240 100,220 150,200 200,190 250,210 300,200 350,160 400,150 450,180 500,140"
      />

      {/* Data Points */}
      {[
        [50, 240],
        [100, 220],
        [150, 200],
        [200, 190],
        [250, 210],
        [300, 200],
        [350, 160],
        [400, 150],
        [450, 180],
        [500, 140]
      ].map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="5" fill="black" />
      ))}
    </svg>
  );
};

export default Dashboard;