import type { Income } from "@/types/incomes"
export const Incomes: Income[] = [
  {
    id: "base-salary",
    amount: 250,
    description: "Salario base",
    date: new Date().toISOString().split("T")[0],
    type: "salary",
    isRecurring: true
  }
]