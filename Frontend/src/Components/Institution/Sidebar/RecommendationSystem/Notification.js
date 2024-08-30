import React from "react";

const Notifications = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="w-4/5 p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Notifications
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start">
            <div className="text-blue-500 bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-.01M12 8h.01M21 12.36l-1.65-1.3a1.998 1.998 0 00-.74-3.34l-1.65-.35a2 2 0 01-1.46-1.46l-.35-1.65a1.998 1.998 0 00-3.34-.74l-1.3 1.65A2 2 0 015 3.94L4.64 2.29A1.998 1.998 0 001.3 1.55l-.35 1.65a2 2 0 01-1.46 1.46L1.3 5.74a1.998 1.998 0 00.74 3.34l1.65 1.3a2 2 0 011.46 1.46l.35 1.65a1.998 1.998 0 003.34.74l1.3-1.65a2 2 0 011.46-1.46l1.65-.35a1.998 1.998 0 00.74 3.34l1.65 1.3a2 2 0 011.46 1.46l.35 1.65a1.998 1.998 0 003.34.74l1.3-1.65a2 2 0 011.46-1.46l1.65-.35a1.998 1.998 0 00.74-3.34z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Low Stock Warning
              </h3>
              <p className="text-gray-600">
                Several items in your inventory are running low. Please restock
                soon.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start">
            <div className="text-yellow-500 bg-yellow-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-.01M12 8h.01M21 12.36l-1.65-1.3a1.998 1.998 0 00-.74-3.34l-1.65-.35a2 2 0 01-1.46-1.46l-.35-1.65a1.998 1.998 0 00-3.34-.74l-1.3 1.65A2 2 0 015 3.94L4.64 2.29A1.998 1.998 0 001.3 1.55l-.35 1.65a2 2 0 01-1.46 1.46L1.3 5.74a1.998 1.998 0 00.74 3.34l1.65 1.3a2 2 0 011.46 1.46l.35 1.65a1.998 1.998 0 003.34.74l1.3-1.65a2 2 0 011.46-1.46l1.65-.35a1.998 1.998 0 00.74 3.34l1.65 1.3a2 2 0 011.46 1.46l.35 1.65a1.998 1.998 0 003.34.74l1.3-1.65a2 2 0 011.46-1.46l1.65-.35a1.998 1.998 0 00.74-3.34z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Expiring Drugs Alert
              </h3>
              <p className="text-gray-600">
                Some drugs in your inventory are nearing expiration. Please
                review and take necessary actions.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start">
            <div className="text-green-500 bg-green-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-.01M12 8h.01M21 12.36l-1.65-1.3a1.998 1.998 0 00-.74-3.34l-1.65-.35a2 2 0 01-1.46-1.46l-.35-1.65a1.998 1.998 0 00-3.34-.74l-1.3 1.65A2 2 0 015 3.94L4.64 2.29A1.998 1.998 0 001.3 1.55l-.35 1.65a2 2 0 01-1.46 1.46L1.3 5.74a1.998 1.998 0 00.74 3.34l1.65 1.3a2 2 0 011.46 1.46l.35 1.65a1.998 1.998 0 003.34.74l1.3-1.65a2 2 0 011.46-1.46l1.65-.35a1.998 1.998 0 00.74 3.34z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Order Status Update
              </h3>
              <p className="text-gray-600">
                Your recent order has been shipped and is on its way.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start">
            <div className="text-purple-500 bg-purple-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-.01M12 8h.01M21 12.36l-1.65-1.3a1.998 1.998 0 00-.74-3.34l-1.65-.35a2 2 0 01-1.46-1.46l-.35-1.65a1.998 1.998 0 00-3.34-.74l-1.3 1.65A2 2 0 015 3.94L4.64 2.29A1.998 1.998 0 001.3 1.55l-.35 1.65a2 2 0 01-1.46 1.46L1.3 5.74a1.998 1.998 0 00.74 3.34l1.65 1.3a2 2 0 011.46 1.46l.35 1.65a1.998 1.998 0 003.34.74l1.3-1.65a2 2 0 011.46-1.46l1.65-.35a1.998 1.998 0 00.74-3.34z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Recommendations
              </h3>
              <p className="text-gray-600">
                Based on your recent inventory trends, we have some
                recommendations for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
