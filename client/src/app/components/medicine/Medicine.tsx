"use client"

import React, { useDeferredValue, useState } from "react";
import SearchBox from "../UI/input/SearchBox";
import SelectionBox from "../UI/suggection/SelectionBox";
import { usePresciptionStore } from "@/app/store/usePresciptionStore";
import SelectDose from "./SelectDose";

const Medicine = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { addMedicine } = usePresciptionStore();

  const medicineItems = [
    {
      id: 101,
      name: "DOLO",
      type: "CAP"
    },
    {
      id: 102,
      name: "Spring",
      type: "TAB"
    },
    {
      id: 103,
      name: "VICE",
      type: "CAP"
    }
  ];

  const deffreValue = useDeferredValue(searchTerm);
  const filterdata = medicineItems
    .map((item) => item)
    .filter((item) =>
      item.name.toLowerCase().includes(deffreValue.toLowerCase())
    );

  const handleOver = (event: React.MouseEvent<HTMLInputElement>) => {
    setIsFocus(true);
    event.stopPropagation();
  };

  const handleClose = () => {
    setIsFocus(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (id: number) => {
    handleClose();

    const selectedData = medicineItems.find((medicine) => medicine.id === id);
    if (selectedData) {
      addMedicine(selectedData);
    }
    setIsFocus(false)
  };

  return (
    <div className=" h-full relative flex flex-col" onMouseLeave={handleClose}>
      <SearchBox
        placeholder="Search Medicine"
        handleFocus={handleOver}
        handleSearch={handleSearch}
      />
      {isFocus && filterdata.length > 0 ? (
        <div className="absolute top-11 w-full left-0 background-color text-white rounded-md">
          {filterdata.map((item, index) => (
            <div
              key={index}
              className="hover:bg-blue-700 p-1.5 cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        isFocus && (
          <div className="absolute top-11 w-full p-2 left-0 bg-red-400 rounded-md">
            No data found
          </div>
        )
      )}
      <SelectionBox />
      <SelectDose />
    </div>
  );
};

export default Medicine;
