'use client'
import React, { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import NavSearch from "./NavSearch";
import NavCategory from "./NavCategory";
import Link from "next/link";
import Image from "next/image";
import NavCart from "./NavCart";
import Drawer from "../Drawer/Drawer"; // Import the Drawer component

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="navbar flex font-serif justify-between items-center gap-1 md:gap-1 lg:gap-8 fixed z-40 bg-info px-2 lg:px-8 xl:px-[100px] 2xl:px-[250px] py-3">
        <div className="navbar-start lg:flex hidden lg:justify-between gap-8">
          <Image
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1707059272/logop-removebg-preview_j1rwwf.png"
            alt="Logo"
            width={70}
            height={60}
          />
          <div className="text-gray-700 px-4 py-2 hidden lg:block text-lg active">
            <Link href="/">Home</Link>
          </div>
          <div>
            <NavCategory />
          </div>
        </div>
        <div className="text-sm lg:hidden overflow-hidden ">
          <button className="btn rounded-full btn-info" onClick={toggleDrawer}>
            {isDrawerOpen ? <IoClose className="text-3xl" /> : <RiMenuUnfoldFill className="text-2xl" />}
          </button>
          {isDrawerOpen && <Drawer onClose={toggleDrawer} />} 
        </div>
        <NavSearch />
        <div className="navbar-end hidden lg:flex justify-between lg:flex-row">
          <NavCart />
        </div>
        <button className="btn btn-info  text-white uppercase font-extrabold">
          <Link href="/login">LogIn</Link>
        </button>
      </div>
    </>
  );
}

export default Navbar;
