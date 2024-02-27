import React from 'react';
import { IoClose } from 'react-icons/io5';
import Filter from '../Filter/Filter';



interface FilterDrawerProps {
  onClose: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose(); // Close the drawer when a link is clicked
  };

  return (
    <div className="drawer-side z-40">
      <label
        htmlFor="my-drawer1"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={onClose}
      ></label>

      <ul className="menu p-4 min-h-full bg-white opacity-110 text-black">
        {/* Sidebar content here */}
        <div className="flex flex-row justify-between">
          <span className="text-2xl font-medium">FILTERS</span>{" "}
          <IoClose onClick={handleLinkClick} className="text-3xl mb-5" />
        </div>
        <Filter />
      </ul>
    </div>
  );
};

export default FilterDrawer;
