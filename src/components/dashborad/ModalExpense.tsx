import { useState } from "react"
import { useExpenseStore } from "@/store/useExpenseStore"
import { useCategoriesStore } from "@/store/useCategoriesStore"

import { type Expense } from "@/types/expenses"
import { categories } from "@/data/categories"
import { CardHeader } from "./CardHeader"
import { Card } from "../ui/Card"

export const ModalExpense = () => {
  const { setExpense } = useExpenseStore()
  const { isModificated } = useCategoriesStore()

  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const dialog = document.getElementById("add-expense-dialog") as HTMLDialogElement;
    if (!dialog) {
      console.error("Dialog with id 'add-expense-dialog' not found");
      return;
    }
    event.preventDefault();
    if (!isModificated) {
      alert("Por favor, configura tus presupuestos antes de agregar gastos. Ve a la pestaña 'Presupuestos' para empezar.");
      dialog.close();
    } else {
      const idGenerated = () => crypto.randomUUID();
      const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement));
      const data = {
        ...formData,
        id: idGenerated(),
        amount: parseFloat(formData.amount as string),
      } as unknown as Expense

      (event.target as HTMLFormElement).reset();
      dialog.close();

      setExpense(data);
    }
  }
  // closedby="any"
  return (
    <dialog id="add-expense-dialog" className="dialog-modal">
      <Card className="p-4 space-y-4">
        <CardHeader title="Nuevo Gasto" description="Registra un nuevo gasto en tu presupuesto mensual" />
        <form className="flex flex-col gap-4 form" method="dialog" onSubmit={handleSubmit}>
          <div className="content-inputs">
            <label htmlFor="date" className="label label-date">Fecha
            </label>
            <input type="date" name="date" id="date" className="input input-date" required />
          </div>
          <div className="content-inputs">
            <label htmlFor="amount" className="label label-amount">Monto
            </label>
            <input type="number" name="amount" id="amount" placeholder="0.00" className="input input-amount" step={0.01} required />
          </div>
          <div className="content-inputs">
            <label htmlFor="description" className="label label-description">Descripción
            </label>
            <input type="text" name="description" id="description" placeholder="Descripción del gasto" className="input input-description" required />
          </div>
          <div className="content-inputs">
            <span className="label label-category">Categoría</span>
            <select name="category" id="category" className="input input-category rounded-xl" onChange={handleChangeCategory} value={selectedCategory} required>
              <option value="" disabled className="">Selecciona una categoría</option>
              {
                categories.map((category) => (
                  <option value={category.id} key={category.id}>{category.name}</option>
                ))
              }
            </select>
          </div>
          <div className="content-inputs">
            <span className="label label-subcategory">Subcategoría</span>
            <select name="subcategory" id="subcategory" className="input input-subcategory" defaultValue="" required>
              <option value="" disabled className="">Selecciona una subcategoría</option>
              {
                categories.find(category => category.id === selectedCategory)?.subcategories.map((subcategory, index) => (
                  <option value={subcategory} key={index}>{subcategory}</option>
                )) || <option value="" disabled>No hay subcategorías disponibles</option>
              }
            </select>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <button className="btn btn-secondary" onClick={(event) => {
              event.preventDefault();
              const dialog = document.getElementById("add-expense-dialog") as HTMLDialogElement;
              dialog.close();
            }}>Cerrar</button>
            <button type="submit" className="btn btn-primary">Agregar Gasto</button>
          </div>
        </form>
      </Card>

    </dialog>
  )
}
