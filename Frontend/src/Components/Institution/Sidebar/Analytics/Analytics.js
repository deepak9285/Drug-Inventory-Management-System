import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Analytics = () => {

  const therapeuticData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Cardiovascular Drugs',
        data: [20, 30, 25, 40, 35, 30],
        borderColor: 'rgb(29, 78, 216)', // blue-600
        backgroundColor: 'rgba(29, 78, 216, 0.2)',
        fill: true,
      },
      {
        label: 'Respiratory Drugs',
        data: [10, 20, 15, 30, 25, 20],
        borderColor: 'rgb(96, 165, 250)', // blue-400
        backgroundColor: 'rgba(96, 165, 250, 0.2)',
        fill: true,
      },
      {
        label: 'Gastrointestinal Drugs',
        data: [30, 25, 40, 20, 25, 35],
        borderColor: 'rgb(167, 139, 250)', // purple-400
        backgroundColor: 'rgba(167, 139, 250, 0.2)',
        fill: true,
      }
    ]
  };

  const pharmacologicalData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Antibiotics',
        data: [15, 25, 20, 35, 30, 25],
        borderColor: 'rgb(29, 78, 216)', // blue-600
        backgroundColor: 'rgba(29, 78, 216, 0.2)',
        fill: true,
      },
      {
        label: 'Analgesics (Pain Relievers)',
        data: [20, 15, 30, 25, 35, 40],
        borderColor: 'rgb(96, 165, 250)', // blue-400
        backgroundColor: 'rgba(96, 165, 250, 0.2)',
        fill: true,
      },
      {
        label: 'Antidepressants',
        data: [10, 30, 25, 20, 30, 35],
        borderColor: 'rgb(167, 139, 250)', // purple-400
        backgroundColor: 'rgba(167, 139, 250, 0.2)',
        fill: true,
      }
    ]
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-6">Analytics</h2>
        {/* Therapeutic Use Chart */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Drugs based on Therapeutic Use:</h3>
          <Line data={therapeuticData} />
        </div>
        {/* Pharmacological Classification Chart */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Drugs based on Pharmacological Classification:</h3>
          <Line data={pharmacologicalData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
