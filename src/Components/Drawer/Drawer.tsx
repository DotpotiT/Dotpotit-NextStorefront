import Link from "next/link";
import React from "react";
import { FaCartPlus, FaHome, FaShoppingBag, FaWallet } from "react-icons/fa";


interface DrawerProps {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose(); 
  };

  return (
    <div className="drawer-side z-50 mt-16">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={onClose}
      ></label>
      <div className="flex justify-end p-2">
        {/* Additional content if needed */}
      </div>
      <ul className="menu p-4 w-80 min-h-full bg-[#3769a3] text-white overflow-y-auto">
        {/* Sidebar content here */}
        <li>
          <Link href="/" onClick={handleLinkClick}>
            <FaHome />
            <span className="text-lg font-medium hover:text-cyan-500">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/shop" onClick={handleLinkClick}>
            <FaShoppingBag />
            <span className="text-lg font-medium hover:text-cyan-500">Shop</span>
          </Link>
        </li>
        <li>
          <Link href="/cart" onClick={handleLinkClick}>
            <FaCartPlus />
            <span className="text-lg font-medium hover:text-cyan-500">Cart</span>
          </Link>
        </li>
        <li>
          <Link href="/checkout" onClick={handleLinkClick}>
            <FaWallet />
            <span className="text-lg font-medium hover:text-cyan-500">Check-Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
