import { create } from "zustand";

interface Medicine {
  id: number;
  name: string;
  type: string;
}

interface Symptom {
  id: number;
  name: string;
}

interface InstructionProps {
  name: string;
}

interface PrescriptionState {
  selectedMedicines: Medicine[];
  selectedSymptoms: Symptom[];
  selectedDiagnosis: Symptom[];
  selectedInstruction :InstructionProps[];

  addMedicine: (medicine: Medicine) => void;
  removeMedicine: (id: number) => void;

  addSymptom: (symptom: Symptom) => void;
  removeSymptom: (id: number) => void;

  addDiagnosis: (diagnosis: Symptom) => void;
  removeDiagnosis: (id: number) => void;

  addInstruction: (instruction: string) => void;
  removeInstruction: (name:string) => void;
}

export const usePresciptionStore = create<PrescriptionState>((set) => ({
  selectedMedicines: [],
  selectedSymptoms: [],
  selectedDiagnosis: [],
  selectedInstruction :[],

  addMedicine: (medicine) =>
    set((state) => {
      if (state.selectedMedicines.some((m) => m.id === medicine.id)) return state;
      return { selectedMedicines: [...state.selectedMedicines, medicine] };
    }),

  removeMedicine: (id) =>
    set((state) => ({
      selectedMedicines: state.selectedMedicines.filter((m) => m.id !== id),
    })),

  addSymptom: (symptom) =>
    set((state) => {
      if (state.selectedSymptoms.some((s) => s.id === symptom.id)) return state;
      return { selectedSymptoms: [...state.selectedSymptoms, symptom] };
    }),

  removeSymptom: (id) =>
    set((state) => ({
      selectedSymptoms: state.selectedSymptoms.filter((s) => s.id !== id),
    })),

    addDiagnosis: (diagnosis) =>
      set((state) => {
        if (state.selectedDiagnosis.some((d) => d.id === diagnosis.id)) return state;
        return { selectedDiagnosis: [...state.selectedDiagnosis, diagnosis] };
      }),
  
    removeDiagnosis: (id) =>
      set((state) => ({
        selectedDiagnosis: state.selectedDiagnosis.filter((d) => d.id !== id),
      })),

      addInstruction: (instruction) =>
        set((state) => {
          if (state.selectedInstruction.some((i) => i.name === instruction)) return state;
          return {
            selectedInstruction: [
              ...state.selectedInstruction,
              { name: instruction },
            ],
          };
        }),
      
      removeInstruction: (name) =>
        set((state) => ({
          selectedInstruction: state.selectedInstruction.filter(
            (i) => i.name !== name
          ),
        })),    
}));
