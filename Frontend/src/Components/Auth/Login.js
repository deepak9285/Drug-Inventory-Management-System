// src/components/Login.js

import React,{useState} from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);
  const [success,setSuccess]=useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();
      setSuccess("User logged in successfully");
      console.log(result);
      navigate("/app/Welcome");

      // Retrieve existing users from localStorage
      const existingUsersStr = localStorage.getItem("userData");
      let existingUsers = [];

      // Check if existingUsersStr is not null and parse it
      if (existingUsersStr) {
        try {
          existingUsers = JSON.parse(existingUsersStr);
          // Ensure that the parsed data is an array
          if (!Array.isArray(existingUsers)) {
            throw new Error("Stored users data is not an array");
          }
        } catch (e) {
          console.error("Failed to parse existing users", e);
          existingUsers = [];
        }
      }

      const userExists = existingUsers.some(
        (user) => user.email === result.user.email
      );

      if (!userExists) {
        // Add the new user to the list
        existingUsers.push(result.user);
        // Store the updated list back in localStorage
        localStorage.setItem("userData", JSON.stringify(existingUsers));
      }
      localStorage.setItem("currentUserEmail", result.user.email);
      // Store the updated list back in localStorage
    //  localStorage.setItem("userData", JSON.stringify(existingUsers));
    } catch (error) {
      console.error("Failed to login", error);
      setError("Failed to login user");
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
