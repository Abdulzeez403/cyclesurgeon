import React from "react";
import { SearchInput } from "../inputs/searchInput";
import User from "@/app/assests/user";
import Cart from "@/app/assests/cart";
import Image from "next/image";
import logo from "../../assests/logo.jpeg";
export const TopMenu = () => {
  return (
    <div className="mt-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="rounded-full">
            <Image src={logo} alt="logo" width={60} height={60} />
          </div>
        </div>
        <div className="navbar-center">
          <SearchInput />
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <User />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Cart />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
