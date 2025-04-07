import React from "react";
import MedicineBtn from "../UI/button/MedicineBtn";

interface SymptomType {
  id: number;
  name: string;
}

interface SymptomSuggestionListProps {
  symptomData: SymptomType[];
}

const SymptomSuggestionList: React.FC<SymptomSuggestionListProps> = ({ symptomData }) => {
  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {symptomData?.map((symptom) => (
        <MedicineBtn
          medicineName={symptom.name}
          closeBtn={false}
          backgroundColor="default"
          key={symptom.id}
        />
      ))}
    </div>
  );
};

export default SymptomSuggestionList;
