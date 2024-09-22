"use client";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden bg-gray-800 text-white p-4 flex justify-between ">
        {/* <h2 className="text-2xl font-bold">Dashboard</h2> */}
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:h-screen lg:flex lg:transform-none`}
      >
        {/* <h2 className="text-2xl font-bold p-4">Dashboard</h2> */}
        <nav className="flex-grow">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <Link href="/dashboard/profile">Profile</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link href="/dashboard/orders">Orders</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link href="/dashboard/wishlist">Wishlist</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
