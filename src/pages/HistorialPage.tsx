import { useEffect } from "react";
import { useTransactionContext } from "../context/TransactionContext";
import { formatNum } from "../services/formatNum";
import "../styles//historial.css";


export const HistorialPage = () => {
  const { transactionState, transactionActions, transactionRequestIsLoading } = useTransactionContext();

  useEffect(() => {
    transactionActions.requestTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transactions = transactionState.transactions ?? [];

  return (
    <div className="historial-container">
      <h1 className="historial-title">Historial de movimientos</h1>

      {transactionRequestIsLoading ? (
        <p className="historial-empty">Cargando movimientos...</p>
      ) : transactions.length === 0 ? (
        <div className="historial-empty">
          <p>No hay movimientos para mostrar.</p>
          <p>Agrega un movimiento para verlo aquí.</p>
        </div>
      ) : (
        <table className="historial-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {transactions
            .filter((transaction) => transaction != null)
            .map((transaction) => (
              <tr key={transaction.id}>
                <td>{new Date(transaction.dateCreated).toLocaleDateString("es-CO")}</td>
                <td>{transaction.description}</td>
                <td className="ingreso">{formatNum(transaction.amount)}</td>
                <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
