export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  subcategory: string;
  date: Date;
}
export interface ExpenseFormData {
  description: string;
  amount: number;
  category: string;
  subcategory: string;
  date: Date;
}