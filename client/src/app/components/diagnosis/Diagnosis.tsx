"use client";

import React, { useDeferredValue, useState } from "react";
import SearchBox from "../UI/input/SearchBox";
import { usePresciptionStore } from "@/app/store/usePresciptionStore";
import DiagnosisSelect from "./DiagnosisSelect";

const Diagnosis = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isSearch, setIsSearch] = useState("");
  const { addDiagnosis } = usePresciptionStore();

  const diagosisData = [
    { id: 1, name: "Viral Fever" },
    { id: 2, name: "CoVID-19" },
    { id: 3, name: "Diabetes melitus type 2" },
    { id: 4, name: "HT-Hypertension" },
    { id: 5, name: "Hypothyroidism" },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(event.target.value);
  };

  const deferredValue = useDeferredValue(isSearch);
  const filterData = diagosisData.filter((item) =>
    item.name.toLowerCase().includes(deferredValue.toLowerCase())
  );

  const handleClick = (id: number) => {
    const selectedData = diagosisData.find((symptom) => symptom.id === id);
    if (selectedData) {
      addDiagnosis(selectedData);
    }
    setIsSearch("");
    setIsFocus(false);
  };

  const handleClose = () => {
    setIsFocus(false);
  };

  return (
    <div
      className="relative flex flex-col gap-2 h-full"
      onMouseLeave={handleClose}
    >
      <SearchBox
        placeholder="Search Diagnosis"
        handleSearch={handleSearch}
        handleFocus={() => setIsFocus(true)}
      />
      {isFocus ? (
        <div className="absolute top-11 left-0 w-full bg-white border shadow-md z-50 rounded-md">
          {filterData.map((item) => (
            <div
              key={item.id}
              className="hover:bg-blue-700 hover:text-white p-2 cursor-pointer text-sm text-black"
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      <DiagnosisSelect />
    </div>
  );
};

export default Diagnosis;
