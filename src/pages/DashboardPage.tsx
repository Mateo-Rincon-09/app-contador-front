import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useTransactionContext } from "../context/TransactionContext";
import { TransactionRequest, transactions } from "../api/transaction/transactionApi";
import { formatNum } from "../services/formatNum";
import { showServiceError } from "../services/errorHandler.service";
import { TransactionType } from "../enums/transactionType.enum";
import { TransactionModelImpl } from "../interface/transaction.interface";
import "../styles/dashboard.css";


interface TransactionFormFields {
  amount: number;
  description: string;
  dateCreated: Date;
  type: TransactionType;
}

export const DashboardPage = () => {

  const [transactionFields, setTransactionFields] = useState<TransactionFormFields>(new TransactionModelImpl(TransactionType.expense) );

  const { transactionActions } = useTransactionContext();
  const navigate = useNavigate();

  const transactionMutation = useMutation({
    mutationFn: (value: TransactionRequest) => transactions(value),
    onSuccess: (data) => {
      transactionActions.addTransaction(data.transaction);
      navigate("/historial");
    },
    onError: (error) => {
      showServiceError(error, "Error al agregar transacción");
    },
  })


  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    transactionMutation.mutate({
      amount: transactionFields.amount,
      description: transactionFields.description,
      dateCreated: transactionFields.dateCreated,
      type: transactionFields.type,
      currentPage: 1,
      pageSize: 20,
    })

  };


  return (
    <div className="dashboard-container">
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <h2>Agregar movimiento</h2>

       <label>Tipo de transacción</label>
        <select
          value={transactionFields.type}
          onChange={(event) => setTransactionFields({ ...transactionFields, type: event.target.value as TransactionType })}
        > 
          <option value="expense">Gasto</option>
          <option value="income">Ingreso</option>
        </select>

        <label>Monto (COP)</label>
        <input
          value={formatNum(transactionFields.amount)}
          onChange={(event) => setTransactionFields({ ...transactionFields, amount: Number(event.target.value.replace(/\./g, "")) })}
        />

          {/* <label>Categoria</label>
          <input
            type="text"
            // value={transactionFields}
            // onChange={(event) => setTransactionFields({ ...transactionFields, description: event.target.value })}
          /> */}

        <label>Descripción</label>
        <input
          type="text"
          placeholder="Descripción de gasto"
          value={transactionFields.description}
          onChange={(event) => setTransactionFields({ ...transactionFields, description: event.target.value })}
        />

        <label>Fecha</label>
        <input
          type="date"
          value={transactionFields.dateCreated.toISOString().split("T")[0]} // Formatear fecha para input date
          onChange={(event) => setTransactionFields({ ...transactionFields, dateCreated: new Date(event.target.value) })}
        />

        <button type="submit">Agregar</button>

      </form>
    </div>
  );
};
