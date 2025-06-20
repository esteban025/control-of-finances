import { useCategoriesStore } from "@/store/useCategoriesStore"

import { Card } from "../ui/Card"
import { CardHeader } from "./CardHeader"
import { formatedNumberToMoney } from "@/utils/formatedNumberToMoney"
import { useState } from "react"

export const ModalChangeLimit = ({ categoryName }: { categoryName: string | undefined }) => {
  const { getCategoryByName, changeLimit, setIsModificated } = useCategoriesStore()
  if (!categoryName) {
    return null; // Si no hay categoría, no renderizar el modal
  }
  const category = getCategoryByName(categoryName)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement);
    const newLimit = parseFloat(formData.get("new-limit") as string);
    if (isNaN(newLimit) || newLimit < 0) {
      alert("Por favor, ingresa un límite válido.");
      return;
    }
    // Aquí puedes agregar la lógica para actualizar el límite de la categoría
    const dialog = document.getElementById(`edit-budget-${categoryName}`) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    } else {
      console.error(`Dialog with id edit-budget-${categoryName} not found`);
    }
    changeLimit(categoryName, newLimit)
    setIsModificated(true)
  }

  const handleClose = () => {
    const dialog = document.getElementById(`edit-budget-${category?.name}`) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    } else {
      console.error(`Dialog with id edit-budget-${category?.name} not found`);
    }
  }
  return (
    <dialog id={`edit-budget-${category?.name}`} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/90 space-y-6 w-11/12 max-w-xl mx-auto bg-transparent">
      <Card className="p-4 space-y-4">
        <CardHeader title="Editar Presupuesto" description={`Modifica el límite mensual para ${category?.name}`} />

        <form action="" method="dialog" className=".form flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="content-inputs">
            <label htmlFor="new-limit" className="label">Nuevo Límite</label>
            <input type="number" name="new-limit" id="new-limit" placeholder="0.00" className="input input-new-limit input-mount" step={0.01} />
          </div>
          <p className="text-light-paragraph dark:text-dark-paragraph text-sm">Gastado este mes: {formatedNumberToMoney(category ? category.spentLimit : 0)}</p>
          <div className="subcate space-y-2">
            <h4 className="label">Subcategorías incluidas:</h4>
            <ul className="flex flex-wrap gap-2">
              {
                category?.subcategories.length ? (
                  category.subcategories.map((subcategory, index) => (
                    <li key={index} className="text-light-paragraph dark:text-dark-paragraph bg-light-secondary border border-light-border px-2 py-1 rounded-full text-sm">{subcategory}</li>
                  ))
                ) : (
                  <li className="text-light-paragraph dark:text-dark-paragraph">No hay subcategorías disponibles</li>
                )
              }
            </ul>
          </div>
          <div className="buttons flex justify-center items-center gap-2">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
            <button type="submit" className="btn btn-gradient">
              <span className="link-hidden">Guardar</span>
              <span className="visible-gradient">Guardar</span>
            </button>
          </div>
        </form>
      </Card>
    </dialog>
  )
}