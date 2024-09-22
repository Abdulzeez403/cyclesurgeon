"use client";
import React, { useState } from "react";
import { SearchInput } from "../inputs/searchInput";
import User from "@/app/assests/user";
import Cart from "@/app/assests/cart";
import Image from "next/image";
import logo from "../../assests/logo.jpeg";
import Drawer from "../modals/drawer";
import Link from "next/link";
export const TopMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="mt-2">
      <div className="overflow-hidden whitespace-nowrap bg-slate-200">
        <p className=" inline-block animate-marquee px-4 text-lg font-semibold text-blue-600">
          🚲 Buy, Sell, or Repair Your Dream Bicycle with Us! – Quality Service,
          Affordable Prices, and Expert Repairs! Contact:
          <span className="text-red-300">0804848484848🚴‍♂️</span>
        </p>
      </div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <Link href="/" className="rounded-full">
            <Image src={logo} alt="logo" width={60} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex lg:flex ">
          <SearchInput />
        </div>
        <div className="navbar-end">
          <Link href="/dashboard">
            <button className="btn btn-ghost btn-circle">
              <User />
            </button>
          </Link>

          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setIsDrawerOpen(true)}
          >
            <div className="indicator">
              <Cart />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Cart Drawer</h2>
        <p>This is a sample drawer content.</p>
      </Drawer>
    </div>
  );
};
