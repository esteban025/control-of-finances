import { create } from "zustand";

interface MonthActualStore {
  month: number;
  year: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}
export const useMonthActualStore = create<MonthActualStore>((set) => ({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  setMonth: (month) => set({ month }),
  setYear: (year) => set({ year }),
}))