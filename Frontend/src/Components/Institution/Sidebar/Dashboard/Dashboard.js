import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", consumption: 400 },
    { name: "Feb", consumption: 300 },
    { name: "Mar", consumption: 200 },
    { name: "Apr", consumption: 278 },
    { name: "May", consumption: 189 },
    { name: "Jun", consumption: 239 },
    { name: "Jul", consumption: 349 },
    { name: "Aug", consumption: 200 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-3xl font-bold mb-8">Dashboard</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-lg">Drugs</div>
          <div className="text-3xl font-bold">100</div>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-lg">My Orders</div>
          <div className="text-3xl font-bold">21</div>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-lg">To Order</div>
          <div className="text-3xl font-bold">10</div>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-lg">Expiring Drugs (1 month)</div>
          <div className="text-3xl font-bold">23</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-xl font-bold mb-4">Last 365 days consumption data</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="consumption" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
