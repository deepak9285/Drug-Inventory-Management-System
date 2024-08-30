import React from "react";

const OrderList = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className=" p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Order List</h2>
          <div className="flex space-x-4">
            <div className="flex space-x-2">
              <span className="m-3">Sort By :</span>
              <select name="" id="">
                <option className="">Alphabet</option>
                <option className="">Clearance Date</option>
                <option className="">Remaining Stock</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <span className="m-3">Select Vendors by :</span>
              <select name="" id="">
                <option className="bg-gray-200 px-4 py-2 rounded">
                  Nearest Vendor
                </option>
                <option className="bg-gray-200 px-4 py-2 rounded">Price</option>
                <option className="bg-gray-200 px-4 py-2 rounded">
                  Rating
                </option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 px-4 py-2 rounded"
            />
          </div>
        </div>

        <table className="w-full table-auto border-collapse mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Remaining Stock (pcs)</th>
              <th className="border px-4 py-2">Clearance date</th>
              <th className="border px-4 py-2">Available Vendor</th>
              <th className="border px-4 py-2">Recommended Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Paracetamol 500mg</td>
              <td className="border px-4 py-2">20</td>
              <td className="border px-4 py-2">1-Sept-2024</td>
              <td className="border px-4 py-2">Ram Pharma</td>
              <td className="border px-4 py-2">100</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ibuprofen 400mg</td>
              <td className="border px-4 py-2">15</td>
              <td className="border px-4 py-2">3-Sept-2024</td>
              <td className="border px-4 py-2">Indore Pharma</td>
              <td className="border px-4 py-2">200</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Amoxicillin 500mg</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">1-Sept-2024</td>
              <td className="border px-4 py-2">Ram Pharma</td>
              <td className="border px-4 py-2">30</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cetirizine 10mg</td>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">4-Sept-2024</td>
              <td className="border px-4 py-2">Ram Pharma</td>
              <td className="border px-4 py-2">50</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ranitidine 150mg</td>
              <td className="border px-4 py-2">15</td>
              <td className="border px-4 py-2">2-Sept-2024</td>
              <td className="border px-4 py-2">Indore Pharma</td>
              <td className="border px-4 py-2">100</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded">
            Create a new order
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
