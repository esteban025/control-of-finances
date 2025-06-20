import { useIncomesStore } from "@/store/useIncomesStore"
import { formatedNumberToMoney } from "@/utils/formatedNumberToMoney"

export const GetTotalIncomes = () => {
  const incomes = useIncomesStore((state) => state.incomes)
  const totalIncomes = formatedNumberToMoney(incomes.reduce((total, income) => total + income.amount, 0))

  return (
    <span className="text-secondary font-medium text-2xl block">{totalIncomes}</span>
  )
} 