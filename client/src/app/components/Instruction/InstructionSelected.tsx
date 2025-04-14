import React from "react";
import MedicineBtn from "../UI/button/MedicineBtn";
import { usePresciptionStore } from "@/app/store/usePresciptionStore";

const InstructionSelected = () => {
    const {removeInstruction,selectedInstruction} = usePresciptionStore()
  return (
    <div className="border p-2 rounded-lg flex-1">
      {selectedInstruction.length > 0 ? (
        <div className="gap-2 flex flex-wrap mt-2">
          {selectedInstruction.map((item) => (
            <MedicineBtn
              key={item.name}
              medicineName={item.name}
              closeBtn={true}
              onClose={() => removeInstruction(item.name)}
            />
          ))}
        </div>
      ) : (
        <div className="text-slate-500 h-full flex justify-center items-center">
          No Instruction found
        </div>
      )}
    </div>
  );
};

export default InstructionSelected;
