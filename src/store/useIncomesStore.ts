import type { Income } from "@/types/incomes";
import { Incomes } from "@/data/incomes";
import { create } from "zustand";

interface IncomesStore {
  incomes: Income[];
  setIncomes: (incomes: Income[]) => void;
  isConfigured?: boolean;
  setIsConfigured?: (isConfigured: boolean) => void;
}

export const useIncomesStore = create<IncomesStore>((set) => ({
  incomes: [],
  setIncomes: (incomes) => set(() => ({
    incomes: [...incomes]
  })),
  isConfigured: false, 
  setIsConfigured: (isConfigured) => set(() => ({
    isConfigured
  }))
}));