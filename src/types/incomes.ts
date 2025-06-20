export interface TypeIncome {
  // "salary" | "bonus" | "investment" | "other"
  SALARY: "salario",
  EXTRA: "extra",
  BONUS: "bono",
  INVESTMENT: "inversión",
  OTHER: "otro"

}

export interface Income {
  id: string;
  amount: number;
  description: string;
  date: string; // ISO date string
  type: TypeIncome
  isRecurring?: boolean; // Optional field to indicate if the income is recurring
}

export interface IncomeFormData {
  amount: number;
  description: string;
  date: string; // ISO date string
  type: "salary" | "bonus" | "investment" | "other"; // Define types of income
}