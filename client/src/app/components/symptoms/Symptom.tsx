import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import SearchBox from "../UI/input/SearchBox";
import { usePresciptionStore } from "@/app/store/usePresciptionStore";
import SymptomSuggectionList from "./SymptomSuggectionList";
import SymptomSelection from "./SymptomSelection";

const Symptom = () => {
  const [isSearch, setIsSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const { addSymptom } = usePresciptionStore();

  const symptomsData = [
    { id: 1, name: "Fever" },
    { id: 2, name: "Sore Throat" },
    { id: 3, name: "Chest clear" },
    { id: 4, name: "Cough" },
    { id: 5, name: "Vomiting" },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(event.target.value);
  };

  const handleClick = (id: number) => {
    const selectedData = symptomsData.find((symptom) => symptom.id === id);
    if (selectedData) {
      addSymptom(selectedData);
    }
    setIsSearch("");
    setIsFocus(false);
  };

  const deferredValue = useDeferredValue(isSearch);
  const filterData = symptomsData.filter((item) =>
    item.name.toLowerCase().includes(deferredValue.toLowerCase())
  );

  const handleClose = () => {
    setIsFocus(false);
  };

  return (
    <div
      className="relative flex flex-col gap-2 h-full"
      onMouseLeave={handleClose}
    >
      <SearchBox
        placeholder="Search Symptoms & Findings"
        handleSearch={handleSearch}
        handleFocus={() => setIsFocus(true)}
      />

      {isFocus && filterData.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white border shadow-md z-50 rounded-md">
          {filterData.map((item) => (
            <div
              key={item.id}
              className="hover:bg-blue-700 p-2 cursor-pointer text-sm text-black"
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}

      <SymptomSelection />
      <SymptomSuggectionList symptomData={symptomsData} />
    </div>
  );
};

export default Symptom;
