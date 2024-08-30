import React, { useState } from 'react';

const DrugInventory = () => {
  // Initial drug data
  const [drugs, setDrugs] = useState([
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
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newDrug, setNewDrug] = useState({
    name: '',
    stock: '',
    price: '',
    expiry: '',
    remark: '',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDrug = () => {
    if (newDrug.name && newDrug.stock && newDrug.price && newDrug.expiry) {
      setDrugs([...drugs, { ...newDrug, stock: parseInt(newDrug.stock), price: parseInt(newDrug.price) }]);
      setNewDrug({ name: '', stock: '', price: '', expiry: '', remark: '' });
    }
  };

  return (
    <div className="p-5">
      <div className="mb-5">
        <h1 className="text-3xl font-bold mb-4">Drug Inventory</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="font-semibold">Sort by:</span> Usage frequency / Stock Available / Alphabet
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        {/* Add New Drug */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Add New Drug</h2>
          <div className="grid grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newDrug.name}
              onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })}
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Stock"
              value={newDrug.stock}
              onChange={(e) => setNewDrug({ ...newDrug, stock: e.target.value })}
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Price"
              value={newDrug.price}
              onChange={(e) => setNewDrug({ ...newDrug, price: e.target.value })}
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Expiry Date"
              value={newDrug.expiry}
              onChange={(e) => setNewDrug({ ...newDrug, expiry: e.target.value })}
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Remark"
              value={newDrug.remark}
              onChange={(e) => setNewDrug({ ...newDrug, remark: e.target.value })}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            onClick={handleAddDrug}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Drug
          </button>
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
            {filteredDrugs.map((drug, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{drug.name}</td>
                <td className="py-2 px-4 border-b">{drug.stock}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() =>
                      setDrugs(
                        drugs.map((d, i) =>
                          i === index && d.stock > 0 ? { ...d, stock: d.stock - 1 } : d
                        )
                      )
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    -1
                  </button>
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
  );
};

export default DrugInventory;
