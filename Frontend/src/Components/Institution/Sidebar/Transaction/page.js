import React from 'react';

const Transactions = () => {
  const transactions = [
    { name: 'Paracetamol 500mg', initialStock: 46, transactionAmount: -1, dateTime: '12:49 pm/ 30-Aug-24', currentStock: 45 },
    { name: 'Ibuprofen 400mg', initialStock: 30, transactionAmount: -5, dateTime: '3:40 pm/ 29-Aug-24', currentStock: 25 },
    { name: 'Paracetamol 500mg', initialStock: 47, transactionAmount: -1, dateTime: '1:40 pm/ 29-Aug-24', currentStock: 45 },
    { name: 'Paracetamol 500mg', initialStock: 48, transactionAmount: -1, dateTime: '11:00 am/ 29-Aug-24', currentStock: 45 },
    { name: 'Ibuprofen 400mg', initialStock: 35, transactionAmount: -5, dateTime: '10:55 am/ 29-Aug-24', currentStock: 25 },
  ];

  return (
    <div className="flex">
  
      {/* Transactions Table */}
      <div className="w-4/5 p-8">
        <h2 className="text-2xl font-semibold mb-6">Transactions</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Initial Stock(pcs)</th>
              <th className="border px-4 py-2">Transaction amount</th>
              <th className="border px-4 py-2">Date and Time</th>
              <th className="border px-4 py-2">Current Stock(pcs)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{transaction.name}</td>
                <td className="border px-4 py-2">{transaction.initialStock}</td>
                <td className="border px-4 py-2">{transaction.transactionAmount}</td>
                <td className="border px-4 py-2">{transaction.dateTime}</td>
                <td className="border px-4 py-2">{transaction.currentStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;