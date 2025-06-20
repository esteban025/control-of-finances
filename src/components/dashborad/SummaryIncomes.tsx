import { useIncomesStore } from "@/store/useIncomesStore"
import { formatedNumberToMoney } from "@/utils/formatedNumberToMoney"
import { Card } from "@/components/ui/Card"

export const SummaryIncomes = () => {
  const incomes = useIncomesStore((state) => state.incomes)
  const totalIncomes = incomes.reduce((total, income) => total + income.amount, 0)

  let description: { color: string; text: string } = { color: "", text: "" }

  if (incomes.length === 0) {
    description = {
      color: "text-amber-500",
      text: "Registra un salario base para comenzar",

    }
  } else if (incomes.length === 1) {
    description = {
      color: "text-green-400",
      text: "Solo salario base"
    }
  } else if (incomes.length > 1) {
    description = {
      color: "text-blue-400",
      text: `Incluye ${incomes.length} ingreso(s) extra`
    }
  }

  return (
    <Card className="p-4 h-full">
      <div className="card-into">
        <h3 className="card-title">ingresos mensuales</h3>
        <span className="card-mount">{formatedNumberToMoney(totalIncomes)}</span>
        <p className={`text-sm text-center ${description.color}`}>{description.text}</p>
      </div>
    </Card>
  )
}