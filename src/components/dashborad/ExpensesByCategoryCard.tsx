import { useExpenseStore } from "@/store/useExpenseStore"
import { useCategoriesStore } from "@/store/useCategoriesStore"
import { useMonthActualStore } from "@/store/useMonthActualStore"

import type { Expense } from "@/types/expenses"
import { MonthNames } from "@/data/MonthNames"
import { formatedNumberToMoney } from "@/utils/formatedNumberToMoney"
import { Card } from "../ui/Card"
import { CardHeader } from "./CardHeader"

export const ExpensesByCategoryCard = () => {
  const { expenses } = useExpenseStore()
  const { categories } = useCategoriesStore()
  const { month, year } = useMonthActualStore()

  // Filtrar gastos del mes actual
  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
  });

  if (expenses.length === 0 || filteredExpenses.length === 0) {
    return (
      <Card className="p-4">
        <CardHeader title="Gastos por categoría" description={`Distribución de tus gastos del mes ${MonthNames[month]} ${year}`} />
        <p className="text-center text-gray-500 pt-4">No hay gastos registrados para este mes</p>
      </Card>
    )
  }

  // Calcular el total de gastos del mes
  const totalExpenses = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  // Agrupar gastos por categoría
  const expensesByCategory: Record<string, Expense> = filteredExpenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = { ...expense, amount: 0 };
    }
    acc[expense.category].amount += expense.amount;
    return acc;
  }, {} as Record<string, Expense>);

  // Convertir a un array y ordenar por monto
  const expensesArray = Object.values(expensesByCategory).map(expense => ({
    ...expense,
    id: expense.id || crypto.randomUUID(), // Asegurar que cada gasto tenga un ID único
    colors: categories.find(category => category.id === expense.category)?.colors || 'bg-gray-200'
  }));

  return (
    <Card className="p-4">
      <CardHeader title="Gastos por categoría" description={`Distribución de tus gastos del mes ${MonthNames[month]} ${year}`} />
      <ul className="flex flex-col gap-4 mt-4">
        {
          expensesArray.map(expense => (
            <div className="flex flex-col gap-2" key={expense.id}>
              <li className="flex justify-between">
                <span className={`text-sm font-semibold p-1 rounded-full px-2 capitalize ${expense.colors}`}>{expense.category}</span>
                <span className="text-sm font-semibold">{formatedNumberToMoney(expense.amount)}</span>
              </li>
              <div className="w-full bg-gray-100 rounded-full">
                <div className="h-2 rounded-full progress bg-tertiary transition-all duration-300" style={{ width: `${(expense.amount / totalExpenses) * 100}%` }}></div>
              </div>
              <p className="text-sm text-light-paragraph dark:text-dark-paragraph">{`${Math.round((expense.amount / totalExpenses) * 100)}% del total`}</p>
            </div>
          ))
        }
      </ul>
    </Card>
  )
}