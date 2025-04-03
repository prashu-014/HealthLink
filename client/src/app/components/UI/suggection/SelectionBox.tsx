"use client";

import React from "react";
import MedicineBtn from "../button/MedicineBtn";
import { usePresciptionStore } from "@/app/store/usePresciptionStore";


const SelectionBox= () => {
  const {selectedMedicines} = usePresciptionStore()
  
  const handleDose =(e:React.MouseEvent<HTMLHeadingElement, MouseEvent>,id:number | null) =>{
    alert(id)
  }
  return (
    <div
      className={`border rounded-md my-2 ${
        selectedMedicines ? "p-2" : ""
      } flex gap-2 flex-wrap`}
    >
      {selectedMedicines &&
        selectedMedicines.map((medicine) => (
          <MedicineBtn
            medicineName={medicine.name}
            type={medicine.type}
            medicineId={medicine.id}
            closeBtn={true}
            backgroundColor="green"
            key={medicine.id}
            handleClick={handleDose}
          />
        ))}
    </div>
  )
}

export default SelectionBox;