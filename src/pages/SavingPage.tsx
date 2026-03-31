import { useState } from "react"
import { formatNum } from "../services/formatNum";
import { useSavingsContext } from "../context/SavingContext";
import { useMutation } from "@tanstack/react-query";
import { SavingRequest, savings } from "../api/savings/savingsApi";
import "../styles/dashboard-saving.css";

export const SavingPage = () => {

    const [meta, setMeta] = useState<number>(0)

    const { savingActions } = useSavingsContext();

    const savingMutation = useMutation({
        mutationFn: (value: SavingRequest) => savings(value),
        onSuccess: (data) => {
            savingActions.addSaving(data.saving);
        },
        onError: (error) => {
            console.log(`Error al agregar movimiento ${error}`);
        }
    })

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        savingMutation.mutate({
            montoMeta: meta,
        })
    }


    return (
        <div className="dashboard-container">
            <form className="dashboard-form" onSubmit={handleSubmit}>

                <h2>Plan de ahorro</h2>
                <label>Agrega el monto (COP)</label>
                <input
                    type="number"
                    value={formatNum(meta)}
                    onChange={(event) => {
                        const value = event.target.value.replace(/\./g, "")
                        setMeta(Number(value))
                    }}
                />

                <button type="submit">Agregar</button>


            </form>
        </div>
    )
}