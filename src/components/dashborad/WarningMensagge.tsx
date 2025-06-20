import { useCategoriesStore } from "@/store/useCategoriesStore";


export const WarningMessage = () => {
  const { isModificated } = useCategoriesStore();

  if (!isModificated) {
    return (
      <div className="ad bg-amber-100 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-600">
          <span className="font-semibold">Atención:</span>
          ¡Configura tus presupuestos antes de agregar gastos! Ve a la pestaña "Presupuestos"
          para empezar.
        </p>
      </div>
    );
  }

  return null;
}