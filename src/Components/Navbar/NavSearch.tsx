import React from 'react';
import { FaSearch } from 'react-icons/fa';

function NavSearch() {
  return (
    <div className='navbar-center '>
      <div className="relative text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white h-10 px-4 w-full 
           overflow-auto lg:w-[300px]  xl:w-[400px] 2xl:w-[600px] rounded-full text-sm"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <FaSearch className="h-4 w-4 fill-current" />
        </button>
      </div>
    </div>
  );
}

export default NavSearch;
