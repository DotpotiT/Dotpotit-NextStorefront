"use client";
import { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Drawer from "./Drawer";
import { IoClose } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import NavSearch from "./NavSearch";
// import { Link, NavLink, useNavigate } from "react-router-dom";
import NavCategory from "./NavCategory";
import { AiOutlineNotification } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import NavCart from "./NavCart";
import Link from "next/link";
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //   const { auth } = useSelector((state) => ({ ...state }));

  //   console.log("auth", auth);
  //   const toggleDrawer = () => {
  //     setIsDrawerOpen(!isDrawerOpen);
  //   };

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const handleLogOut = () => {
  //     dispatch({
  //       type: "LOGOUT",
  //       payload: null,
  //     });
  //     window.localStorage.removeItem("auth");

  //     navigate("/");
  //   };
  return (
    <>
      <div className="navbar flex flex-row justify-between items-center gap-1  md:gap-1 lg:gap-8 fixed z-40 bg-info px-2 lg:px-8 xl:px-[100px]   2xl:px-[290px]  py-3 ">
        <div className="navbar-start lg:flex hidden lg:justify-between gap-8">
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1707059272/logop-removebg-preview_j1rwwf.png"
            alt=""
            className="h-14 w-30"
          />
          <div className="text-gray-700  px-4 py-2 hidden lg:block text-lg  active ">
            {" "}
            <Link href="/">Home</Link>
          </div>

          <div><NavCategory /></div>
        </div>
        <div className=" text-sm lg:hidden overflow-hidden">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            // checked={isDrawerOpen}
            // onChange={toggleDrawer}
          />
          <div className=" ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn rounded-full btn-info ">
              {isDrawerOpen ? (
                <IoClose className="text-3xl" />
              ) : (
                <RiMenuUnfoldFill className="text-2xl" />
              )}
            </label>
          </div>
          {/* {isDrawerOpen && <Drawer onClose={toggleDrawer} />} */}
        </div>
        <NavSearch />

        <div className="navbar-end hidden lg:flex justify-between lg:flex-row">
          <NavCart/>
        </div>
        {/* <div>
        {auth !== null ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt=""
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100   w-52"
              >
                <li>
          
                </li>
                <li>
                  <Link to="/orderTracker">Order Track</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end ">
              <div className=" flex  gap-9 items-center">
           

<Link to="/login" >
 LogIn
</Link></button>
              </div>
            </div>
          )}
        </div> */}
          <button className="btn btn-info  btn-outline uppercase font-extrabold">  <Link href="/login" >
 LogIn
</Link></button>
      
      </div>
    </>
  );
}

export default Navbar;
