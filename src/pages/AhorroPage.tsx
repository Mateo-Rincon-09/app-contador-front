import { useState } from "react"
import { formatNum } from "../services/formatNum";
import { useNavigate } from 'react-router-dom';
import { useSavingsContext } from "../context/SavingContext";
import { useMutation } from "@tanstack/react-query";
import { SavingRequest, savings } from "../api/savings/savingsApi";

export const AhorroPage = () => {

    const [meta, setMeta] = useState<number>(0)
    //const [progreso, setProgreso] = useState<number>(0)

    const { savingActions } = useSavingsContext();
    const navigate = useNavigate();

    const savingMutation = useMutation({
        mutationFn: (value: SavingRequest) => savings(value),
        onSuccess: (data) => {
            savingActions.addSaving(data.saving);
            navigate("/ahorro");
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