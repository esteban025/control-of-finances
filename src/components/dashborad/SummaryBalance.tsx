import { useExpenseStore } from "@/store/useExpenseStore"
import { useIncomesStore } from "@/store/useIncomesStore"
import { useMonthActualStore } from "@/store/useMonthActualStore"

import { formatedNumberToMoney } from "@/utils/formatedNumberToMoney"
import { Card } from "../ui/Card"
import type { Income } from "@/types/incomes"

export const SummaryBalance = () => {
  const { expenses } = useExpenseStore()
  const { incomes } = useIncomesStore()
  const { month, year } = useMonthActualStore()

  const totalexpenses = expenses.reduce((total, expense) => {
    const expenseDate = new Date(expense.date)
    if (expenseDate.getMonth() === month && expenseDate.getFullYear() === year) {
      return total + expense.amount
    }
    return total
  }, 0)

  function filterExpenses({ incomes, month, year }: { incomes: Income[], month: number, year: number }) {
    return incomes.filter((income) => {
      const incomeDate = new Date(income.date)
      const isRecurrent = income.isRecurring === true

      return isRecurrent || (incomeDate.getMonth() === month && incomeDate.getFullYear() === year)
    })
  }

  const visibleIncomes = filterExpenses({ incomes, month, year })

  const totalIncomes = visibleIncomes.reduce((total, income) => total + income.amount, 0)

  const description = totalexpenses > totalIncomes ? 'Yo no queda dinero disponible' : 'Disponible'

  return (
    <Card className="p-4">
      <div className="card-into">
        <h3 className="card-title">balance</h3>
        <span className="card-mount">{formatedNumberToMoney(totalIncomes - totalexpenses)}</span>
        <p className="card-description">{description}</p>
      </div>
    </Card>
  )
}