import React from 'react';

const DrugInventory = () => {
  const drugs = [
    { name: 'Paracetamol 500mg', stock: 25, price: 15, expiry: 'Jan 2026', remark: 'Pain Killer' },
    { name: 'Ibuprofen 400mg', stock: 40, price: 30, expiry: 'Dec 2026', remark: 'Pain Relief' },
    { name: 'Amoxicillin 500mg', stock: 45, price: 45, expiry: 'Feb 2026', remark: 'Antibacterial' },
    { name: 'Cetirizine 10mg', stock: 20, price: 20, expiry: 'Mar 2025', remark: 'Anti allergy' },
    { name: 'Ranitidine 150mg', stock: 50, price: 18, expiry: 'Dec 2025', remark: 'Acid reflux' },
    { name: 'Metformin 500mg', stock: 20, price: 80, expiry: 'Jan 2026', remark: 'Type 2 Diabetic' },
    { name: 'Azithromycin 250mg', stock: 35, price: 50, expiry: 'June 2027', remark: 'Antibacterial' },
    { name: 'Amlodipine 5mg', stock: 40, price: 35, expiry: 'Jan 2026', remark: 'High blood pressure' },
    { name: 'Aspirin 75mg', stock: 10, price: 18, expiry: 'Feb 2025', remark: 'Heart Attack' },
    { name: 'Atorvastatin 10mg', stock: 45, price: 80, expiry: 'Jan 2027', remark: 'Acid reflux' },
  ];

  return (
    <div className="p-5">
      {/* Sidebar */}
      <div className="flex">
        {/* <div className="w-1/4 bg-gray-100 p-5">
          <ul className="space-y-4">
            <li>Dashboard</li>
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

        {/* Main Content */}
        <div className="w-3/4">
          <div className="mb-5">
            <h1 className="text-2xl font-bold">Drug Inventory</h1>
            <div className="flex justify-between mt-2">
              <div>
                <span className="font-semibold">Sort by:</span> Usage frequency / Stock Available / Alphabet
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Available Stock (pcs)</th>
                <th className="py-2 px-4 border-b">Reduce by 1</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Expiry Date</th>
                <th className="py-2 px-4 border-b">Remark</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{drug.name}</td>
                  <td className="py-2 px-4 border-b">{drug.stock}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md">-1</button>
                  </td>
                  <td className="py-2 px-4 border-b">{drug.price}</td>
                  <td className="py-2 px-4 border-b">{drug.expiry}</td>
                  <td className="py-2 px-4 border-b">{drug.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DrugInventory;