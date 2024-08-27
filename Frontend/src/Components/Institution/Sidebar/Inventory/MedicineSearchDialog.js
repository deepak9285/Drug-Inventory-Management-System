import React, { useState } from 'react';

const MedicineSearchDialog = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleSearch = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.get(`/api/medicines?search=${searchTerm}`);
    //   setMedicines(response.data);
    // } catch (error) {
    //   console.error('Error fetching medicines:', error);
    // }
  };

  const handleAddToInventory = () => {
    // Logic to add the selected medicine to the inventory
    console.log('Adding to inventory:', selectedMedicine);
    onClose(); // Close the dialog after adding
  };

  //if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Search Medicines</h2>
        <form onSubmit={handleSearch} className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for medicines..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </form>
        {medicines.length > 0 ? (
          <ul className="space-y-2">
            {medicines.map((medicine) => (
              <li
                key={medicine.id}
                className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedMedicine(medicine)}
              >
                <h3 className="text-lg font-medium">{medicine.name}</h3>
                <p className="text-sm text-gray-500">Category: {medicine.category}</p>
                <p className="text-sm text-gray-500">Price: {medicine.price}</p>
                <p className="text-sm text-gray-500">Expiry Date: {medicine.expiryDate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No medicines found.</p>
        )}
        {selectedMedicine && (
          <div className="mt-4">
            <button
              onClick={handleAddToInventory}
              className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-sm hover:bg-blue-600"
            >
              Add to Inventory
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineSearchDialog;
