import React, { useState, useMemo } from "react";
import { FaSearch, FaPlus, FaSort } from "react-icons/fa";

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  const vendors = useMemo(
    () => [
      {
        name: "Ram Pharma",
        address: "Indore",
        contact: "-",
        rating: 3.9,
        remarks: "-",
      },
      {
        name: "Indore Pharma",
        address: "Indore",
        contact: "-",
        rating: 4.0,
        remarks: "-",
      },
      {
        name: "Krishna Pharma",
        address: "Indore",
        contact: "-",
        rating: 3.6,
        remarks: "-",
      },
      {
        name: "Indian Pharma",
        address: "Indore",
        contact: "-",
        rating: 4.1,
        remarks: "-",
      },
      {
        name: "Sharma Distributors",
        address: "Bhopal",
        contact: "-",
        rating: 4.3,
        remarks: "-",
      },
      {
        name: "Agarwal Medicos",
        address: "Gwalior",
        contact: "-",
        rating: 4.2,
        remarks: "Known for timely delivery",
      },
      {
        name: "Jain Pharma",
        address: "Indore",
        contact: "-",
        rating: 3.8,
        remarks: "-",
      },
      {
        name: "City Medicos",
        address: "Jabalpur",
        contact: "-",
        rating: 4.5,
        remarks: "Preferred for quality",
      },
      {
        name: "Soni Pharma",
        address: "Ujjain",
        contact: "-",
        rating: 3.7,
        remarks: "-",
      },
      {
        name: "Vikas Distributors",
        address: "Ratlam",
        contact: "-",
        rating: 4.0,
        remarks: "Offers discounts on bulk orders",
      },
      {
        name: "Khandelwal Pharma",
        address: "Indore",
        contact: "-",
        rating: 4.1,
        remarks: "-",
      },
      {
        name: "Mishra Medicals",
        address: "Bhopal",
        contact: "-",
        rating: 3.9,
        remarks: "-",
      },
      {
        name: "Singh Pharma",
        address: "Gwalior",
        contact: "-",
        rating: 4.4,
        remarks: "Reliable service",
      },
      {
        name: "Gupta Medicals",
        address: "Indore",
        contact: "-",
        rating: 4.2,
        remarks: "-",
      },
      {
        name: "Verma Distributors",
        address: "Jabalpur",
        contact: "-",
        rating: 3.8,
        remarks: "Average service",
      },
      {
        name: "Patel Pharma",
        address: "Ujjain",
        contact: "-",
        rating: 4.0,
        remarks: "-",
      },
      {
        name: "Mehta Medicals",
        address: "Ratlam",
        contact: "-",
        rating: 4.3,
        remarks: "-",
      },
      {
        name: "Chawla Medicos",
        address: "Indore",
        contact: "-",
        rating: 4.1,
        remarks: "Fast delivery",
      },
      {
        name: "Nath Distributors",
        address: "Bhopal",
        contact: "-",
        rating: 3.9,
        remarks: "-",
      },
      {
        name: "Kapoor Pharma",
        address: "Gwalior",
        contact: "-",
        rating: 4.5,
        remarks: "Highly recommended",
      },
    ],
    []
  );

  const filteredVendors = vendors
    .filter(
      (vendor) =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (sortKey === "name") return a.name.localeCompare(b.name);
      if (sortKey === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Vendors</h2>

      <div className="flex items-center mb-4">
        <span className="mr-4">Sort by:</span>
        <button
          onClick={() => setSortKey("name")}
          className={`px-4 py-2 mr-2 border ${
            sortKey === "name" ? "bg-gray-300" : ""
          }`}
        >
          Alphabet <FaSort className="inline ml-2" />
        </button>
        <button
          onClick={() => setSortKey("rating")}
          className={`px-4 py-2 border ${
            sortKey === "rating" ? "bg-gray-300" : ""
          }`}
        >
          Rating <FaSort className="inline ml-2" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center border rounded">
          <input
            type="text"
            placeholder="Search vendors..."
            className="px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-gray-500 mx-2" />
        </div>
        <div>
          <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded flex items-center">
            <FaSearch className="mr-2" /> Find
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded flex items-center">
            <FaPlus className="mr-2" /> Add
          </button>
        </div>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Contact Number</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map((vendor, index) => (
            <tr
              key={index}
              className="text-center odd:bg-gray-100 even:bg-gray-50"
            >
              <td className="border px-4 py-2">{vendor.name}</td>
              <td className="border px-4 py-2">{vendor.address}</td>
              <td className="border px-4 py-2">{vendor.contact}</td>
              <td className="border px-4 py-2">{vendor.rating}</td>
              <td className="border px-4 py-2">{vendor.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vendors;
