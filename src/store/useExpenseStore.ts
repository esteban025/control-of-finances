import { create } from "zustand";
import { type Expense} from "@/types/expenses";

interface ExpenseStore {
  expenses: Expense[];
  setExpense: (expense: Expense) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  setExpense: (expense) => set((state) => ({
    expenses: [...state.expenses, expense]
  })),
}))