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

interface PrescriptionState {
  selectedMedicines: Medicine[];
  selectedSymptoms: Symptom[];

  addMedicine: (medicine: Medicine) => void;
  removeMedicine: (id: number) => void;

  addSymptom: (symptom: Symptom) => void;
  removeSymptom: (id: number) => void;

}

export const usePresciptionStore = create<PrescriptionState>((set) => ({
  selectedMedicines: [],
  selectedSymptoms: [],

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

  
}));
