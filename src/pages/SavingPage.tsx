import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSavingsContext } from "../context/SavingContext";
import { useMutation } from "@tanstack/react-query";
import { SavingRequest, savings } from "../api/saving/savingApi";
import { showServiceError } from "../services/errorHandler.service";
import { formatNum } from '../services/formatNum';
import { SavingType } from "../enums/savingType.enum";
import "../styles/saving.css";

interface SavingFormsFields {
    amount: number,
    dateCreated: Date,
    dateStart: Date,
    dateEnd: Date,
    status?: SavingType,
    amountProgress?: number,
}

export const SavingPage = () => {

    const [savingFields, setSavingFields] = useState<SavingFormsFields>({
        amount: 0,
        dateCreated: new Date(),
        dateStart: new Date(),
        dateEnd: new Date(),
        status: undefined,
        amountProgress: undefined
    })

    const { savingActions } = useSavingsContext();
    const navigate = useNavigate();

    const savingMutation = useMutation({
        mutationFn: (value: SavingRequest) => savings(value),
        onSuccess: (data) => {
            savingActions.addSaving(data.saving);
            navigate('/historial');
        },
        onError: (error) => {
            showServiceError(error, "Error al agregar ahorro");
        }
    })

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        savingMutation.mutate({
            amount: savingFields.amount,
            dateCreated: savingFields.dateCreated,
            dateStart: savingFields.dateStart,
            dateEnd: savingFields.dateEnd,
            status: savingFields.status,
            amountProgress: savingFields.amountProgress,
        })
    }

    return (
        <div className="saving-container">
            <form onSubmit={handleSubmit} className="saving-form">

                <h2 className="saving-title">Plan de ahorro</h2>

                <div className="saving-group saving-group-full">
                    <label>Agrega el monto (COP)</label>
                    <input
                        className="saving-input saving-input-amount"
                        value={formatNum(savingFields.amount)}
                        onChange={(event) =>
                            setSavingFields({
                                ...savingFields,
                                amount: Number(event.target.value.replace(/\./g, ""))
                            })
                        }
                    />
                </div>

                <div className="saving-group">
                    <label>Fecha de creación</label>
                    <input
                        type="date"
                        className="saving-input"
                        value={savingFields.dateCreated.toISOString().split("T")[0]}
                        onChange={(event) =>
                            setSavingFields({
                                ...savingFields,
                                dateCreated: new Date(event.target.value)
                            })
                        }
                    />
                </div>

                <div className="saving-group">
                    <label>Fecha de inicio</label>
                    <input
                        type="date"
                        className="saving-input"
                        value={savingFields.dateStart.toISOString().split("T")[0]}
                        onChange={(event) =>
                            setSavingFields({
                                ...savingFields,
                                dateStart: new Date(event.target.value)
                            })
                        }
                    />
                </div>

                <div className="saving-group">
                    <label>Fecha de fin</label>
                    <input
                        type="date"
                        className="saving-input"
                        value={savingFields.dateEnd.toISOString().split("T")[0]}
                        onChange={(event) =>
                            setSavingFields({
                                ...savingFields,
                                dateEnd: new Date(event.target.value)
                            })
                        }
                    />
                </div>

                <button type="submit" className="saving-button">
                    Agregar
                </button>

            </form>
        </div>
    )
}