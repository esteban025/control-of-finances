import { useIncomesStore } from "@/store/useIncomesStore";

import { Card } from "../ui/Card"
import { CardHeader } from "./CardHeader"

export const ModalIncomesConfig = () => {
  const { setIncomes } = useIncomesStore();

  const handleClose = () => {
    const $dislog = document.getElementById("modal-config-incomes") as HTMLDialogElement;
    if (!$dislog) {
      console.error("Dialog with id 'modal-config-incomes' not found");
      return;
    }
    $dislog.close();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement));
    const incomeData = {
      id: crypto.randomUUID(),
      date: formData["income-date"] as string,
      amount: parseFloat(formData["income-amount"] as string),
      description: formData["income-description"] as string,
    };
  }
  return (
    <dialog id="modal-config-incomes" className="dialog-modal">
      <Card className="p-4 space-y-4">
        <CardHeader title="Configura tus ingresos" description="Aquí puedes ingresar solamente tus ingresos mensuales o extras." />

        <form method="dialog" className="form space-y-4" onSubmit={handleSubmit}>
          <div className="content-inputs">
            <label htmlFor="income-date" className="label">Fecha</label>
            <input type="date" id="income-date" className="input" required />
          </div>
          <div className="content-inputs">
            <label htmlFor="income-amount" className="label">Monto</label>
            <input type="number" id="income-amount" placeholder="0.00" className="input" step={0.01} required />
          </div>
          <div className="content-inputs">
            <label htmlFor="income-description" className="label">Descripción</label>
            <input type="text" id="income-description" placeholder="Descripción del ingreso" className="input" required />
          </div>
          <div className="content-inputs">
            <h4 className="label">tipo de ingreso</h4>
            <select name="" id="">
              o
            </select>
          </div>
          <div className="buttons flex justify-center items-center gap-2 mt-8">
            <button type="reset" onClick={handleClose} className="btn btn-secondary">Cancelar</button>
            <button type="submit" className="btn btn-primary">Guardar</button>
          </div>
        </form>
      </Card>
    </dialog>
  )
}