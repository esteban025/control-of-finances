import { useExpenseStore } from "@/store/useExpenseStore"
import { useMonthActualStore } from "@/store/useMonthActualStore"

import { Card } from "../ui/Card"

export const SummaryExpenses = () => {
  const { expenses } = useExpenseStore()
  const { month, year } = useMonthActualStore()
  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
  });

  return (
    <Card className="p-4">
      <div className="card-into">
        <h3 className="card-title">gastos</h3>
        <span className="card-mount card-mount-normal">{filteredExpenses.length}</span>
        <p className="card-description">Registrados</p>
      </div>
    </Card>
  )
}