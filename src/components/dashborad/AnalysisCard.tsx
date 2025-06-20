import { Card } from "../ui/Card"
import { CardHeader } from "./CardHeader"

export const AnalysisCard = () => {
  return (
    <Card className="p-4">
      <CardHeader title="Análisis de Gastos" description="Visualiza el comportamiento de tus gastos mensuales" />
      <div className="">
        <p className=" text-gray-500 text-center">Próximamente...</p>
      </div>
    </Card>
  )
}