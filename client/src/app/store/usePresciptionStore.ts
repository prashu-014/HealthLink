import { create } from "zustand";

interface Medicine {
  id: number;
  name: string;
  type: string;
}

interface MedicalState {
  selectedMedicines: Medicine[];
  addMedicine: (medicine: Medicine) => void;
  removeMedicine: (id: number) => void;
}

export const usePresciptionStore = create<MedicalState>((set) => ({
  selectedMedicines: [],
  
  addMedicine: (medicine) =>
    set((state) => {
      if (state.selectedMedicines.some((m) => m.id === medicine.id)) {
        return state;
      }
      return { selectedMedicines: [...state.selectedMedicines, medicine] };
    }),

  removeMedicine: (id) =>
    set((state) => ({
      selectedMedicines: state.selectedMedicines.filter((m) => m.id !== id),
    })),
}));
