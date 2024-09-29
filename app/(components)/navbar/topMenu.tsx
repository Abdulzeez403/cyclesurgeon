"use client";
import React, { useState } from "react";
import { SearchInput } from "../inputs/searchInput";
import User from "@/app/assests/user";
import Cart from "@/app/assests/cart";
import Image from "next/image";
import logo from "../../assests/logo.jpeg";
import Drawer from "../modals/drawer";
import Link from "next/link";
import EmptyCartSVG from "@/app/assests/empytcart";
import CartItemComponent, { CartItem } from "../cart/microCart";
import Modal from "../modals/modal";
import { AuthPage } from "@/app/auth/detail";
import { useAuth } from "@/app/context";

interface User {
  email: string;
  password?: string;
}
export const TopMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  // const router = useRouter();
  // useEffect(() => {
  //   // Get session using the updated method
  //   const getSession = async () => {
  //     const {
  //       data: { session },
  //       error,
  //     } = await supabase.auth.getSession();

  //     if (session?.user) {
  //       setUser(session?.user );
  //     } else {
  //       router.push("/login");
  //     }

  //     if (error) {
  //       console.error("Error fetching session:", error.message);
  //     }
  //   };

  //   getSession();
  // }, [router]);

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
          {user ? (
            <Link href="/dashboard">
              <button className="btn btn-ghost btn-circle">
                <User />
              </button>
            </Link>
          ) : (
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsOpen(true)}
            >
              <User />
            </button>
          )}

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
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                setCartItems={setCartItems}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <EmptyCartSVG />
            <p className="text-gray-500 mt-4">Your cart is empty.</p>
          </div>
        )}
      </Drawer>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AuthPage />
      </Modal>
    </div>
  );
};
