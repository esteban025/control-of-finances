import { useExpenseStore } from "@/store/useExpenseStore"
import { useMonthActualStore } from "@/store/useMonthActualStore"

import { MonthNames } from "@/data/MonthNames"
import { formatedNumberToMoney } from "@/utils/formatedNumberToMoney"
import { Card } from "../ui/Card"

export const SummaryTotalSpent = () => {
  const {expenses} = useExpenseStore()
  const { month, year } = useMonthActualStore()
  const totalMounts = expenses.reduce((total, expense) => {
    const expenseDate = new Date(expense.date);
    if (expenseDate.getMonth() === month && expenseDate.getFullYear() === year) {
      return total + expense.amount;
    }
    return total;
  }, 0)
  return (
    <Card className="p-4">
      <div className="card-into">
        <h3 className="card-title">total gastado</h3>
        <span className="card-mount card-mount-normal">{formatedNumberToMoney(totalMounts)}</span>
        <p className="card-description">Gastos del mes {MonthNames[month]} {year}</p>
      </div>
    </Card>
  )
}