// src/components/HomePage.js

import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-indigo-600">
            Drug Inventory Management System
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-indigo-600 text-white py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Efficient Drug Inventory Management
            </h2>
            <p className="text-lg mb-6">
              Manage your drug inventory with ease and accuracy using our
              state-of-the-art system.
            </p>
            <a
              href="#"
              className="bg-white text-indigo-600 py-2 px-4 rounded shadow hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl font-bold mb-8">Features</h3>
            <div className="flex flex-wrap justify-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="bg-white p-6 rounded shadow-md max-w-sm">
                <h4 className="text-xl font-semibold mb-2">
                  Real-Time Tracking
                </h4>
                <p>
                  Monitor inventory levels in real-time, ensuring no stockouts
                  or overstocking.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-md max-w-sm">
                <h4 className="text-xl font-semibold mb-2">Automated Alerts</h4>
                <p>
                  Get notified when stock levels are low or when it's time to
                  reorder.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-md max-w-sm">
                <h4 className="text-xl font-semibold mb-2">
                  Comprehensive Reporting
                </h4>
                <p>
                  Generate detailed reports on inventory usage, expiry, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center px-4">
          <p>
            &copy; 2024 Drug Inventory Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
