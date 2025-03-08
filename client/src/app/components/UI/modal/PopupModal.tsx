import React from "react";
import SearchBox from "../input/SearchBox";
import { IoCloseSharp } from "react-icons/io5";

interface SearchProps {
  onClose: () => void;
}

const PopupModal: React.FC<SearchProps> = ({ onClose }) => {
  return (
    <div
      className="absolute top-0 left-0 inset-0 flex items-center justify-center bg-black bg-opacity-25"
      onClick={onClose}
    >
      <div
        className="relative bg-white shadow-lg rounded-lg md:w-5/6 lg:w-2/5 h-72 "
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="p-3 flex flex-col gap-2 h-full">
        <SearchBox placeholder="Search Patient" />
        <div className="border p-2 h-full rounded-md">
            Loading...
        </div>
        </div>
        <button className="absolute -top-5 -right-5" onClick={onClose}> <IoCloseSharp className="text-2xl text-red-600" /></button>
      </div>
     
    </div>
  );
};

export default PopupModal;
