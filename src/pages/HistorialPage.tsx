import { useEffect } from "react";
import { useMovimientosContext } from "../context/MovimientosContext";
import { formatNum } from "../services/formatNum";

export const HistorialPage = () => {
  const { movimientoState, movimientoActions, movimientoRequestIsLoading } = useMovimientosContext();

  useEffect(() => {
    movimientoActions.requestMovimientos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movimientos = movimientoState.movimientos ?? [];

  return (
    <div className="historial-container">
      <h1 className="historial-title">Historial de movimientos</h1>

      {movimientoRequestIsLoading ? (
        <p className="historial-empty">Cargando movimientos...</p>
      ) : movimientos.length === 0 ? (
        <div className="historial-empty">
          <p>No hay movimientos para mostrar.</p>
          <p>Agrega un movimiento para verlo aquí.</p>
        </div>
      ) : (
        <table className="historial-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Ingreso</th>
              <th>Gasto</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((movimiento) => (
              <tr key={movimiento.id}>
                <td>{new Date(movimiento.fecha).toLocaleDateString("es-CO")}</td>
                <td>{movimiento.categoria}</td>
                <td>{movimiento.descripcion}</td>
                <td className="ingreso">{formatNum(movimiento.montoIngreso)}</td>
                <td className="gasto">{formatNum(movimiento.montoGasto)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
