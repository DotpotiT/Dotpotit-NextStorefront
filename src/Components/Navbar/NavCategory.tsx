import Link from 'next/link';
import React, { useState,  } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';


function NavCategory() {
  const [isDropdownOpen, setDropdownOpen] = useState(true);



  const handleLinkClick = () => {
    setDropdownOpen(false);
  };
  

  return (

      <div className="dropdown dropdown-end">
        <div
         
          tabIndex={0}
          role="button"
          className="flex flex-row justify-between gap-2 text-lg "
        >
          Pages <IoMdArrowDropdown className="text-lg" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52"
          open={isDropdownOpen}
        
        >
          <li
            className="px-4 py-2 text-sm hover:text-cyan-600"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            <Link
              className="hover:text-cyan-800 font-medium"
              href="/shop"
              onClick={handleLinkClick}
            >
              Shop
            </Link>
          </li>
          <li
            className="px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            <Link
              className="hover:text-cyan-800 font-medium"
              href="/cart"
              onClick={handleLinkClick}
            >
              Cart
            </Link>
          </li>
          <li
            className="px-4 py-2 text-sm hover:text-cyan-600"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            <Link
              className="hover:text-cyan-800 font-medium"
              href="/productDetails"
              onClick={handleLinkClick}
            >
              Product Details
            </Link>
          </li>
          <li
            className="px-4 py-2 text-sm hover:text-cyan-600"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-3"
          >
            <Link
              className="hover:text-cyan-800 font-medium"
              href="/checkout"
              onClick={handleLinkClick}
            >
              Check-Out
            </Link>
          </li>
        </ul>
      </div>

  );
}

export default NavCategory;
