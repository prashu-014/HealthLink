import { usePresciptionStore } from "@/app/store/usePresciptionStore";
import React from "react";
import MedicineBtn from "../UI/button/MedicineBtn";

const SymptomSelection = () => {
  const { selectedSymptoms, removeSymptom } = usePresciptionStore();
  return (
    <div>
      {selectedSymptoms.length > 0 && (
        <div className="border flex gap-2 flex-wrap p-2 rounded-md">
          {selectedSymptoms.map((symptom) => (
            <MedicineBtn
              medicineName={symptom.name}
              closeBtn={true}
              backgroundColor="green"
              key={symptom.id}
              onClose={() => removeSymptom(symptom.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SymptomSelection;
