import { Card } from "../ui/Card"
import { CardHeader } from "./CardHeader"

export const ExpensesCard = () => {
  return (
    <Card className="p-4">
      <CardHeader title="Registro de Gastos" description="Todos tus gastos registrados para Junio 2025" />
      <p className="text-light-paragraph dark:text-dark-paragraph text-center">Proximamente...</p>
    </Card>
  )
}