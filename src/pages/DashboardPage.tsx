import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { formatNum } from "../services/formatNum";
import { useMutation } from "@tanstack/react-query";
import { MovementRequest, movements } from "../api/movements/movementsApi";
import { useMovimientosContext } from "../context/MovimientosContext";
import { showServiceError } from "../services/errorHandler.service";
import "../styles/dashboard-saving.css";

interface MovimientoFormFields {
  montoIngreso: number;
  montoGasto: number;
  categoria: string;
  descripcion: string;
  fecha: Date;
}

export const DashboardPage = () => {

  const [movimientoFields, setMovimientoFields] = useState<MovimientoFormFields>({
    montoIngreso: 0,
    montoGasto: 0,
    categoria: "",
    descripcion: "",
    fecha: new Date()
  });

  const { movimientoActions } = useMovimientosContext();
  const navigate = useNavigate();

  const movimientoMutation = useMutation({
    mutationFn: (value: MovementRequest) => movements(value),
    onSuccess: (data) => {
      movimientoActions.addMovimiento(data.movement);
      navigate("/historial");
    },
    onError: (error) => {
      showServiceError(error, "Error al agregar movimiento");
    },
  })


  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    movimientoMutation.mutate({
      montoIngreso: movimientoFields.montoIngreso,
      montoGasto: movimientoFields.montoGasto,
      categoria: movimientoFields.categoria,
      descripcion: movimientoFields.descripcion,
      fecha: movimientoFields.fecha,
      currentPage: 1,
      pageSize: 20
    })


  };


  return (
    <div className="dashboard-container">
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <h2>Agregar movimiento</h2>

        <label>Monto Ingreso (COP)</label>
        <input
          value={formatNum(movimientoFields.montoIngreso)}
          onChange={(event) => setMovimientoFields({ ...movimientoFields, montoIngreso: Number(event.target.value.replace(/\./g, "")) })}
        />

        <label>Monto Gasto (COP)</label>
        <input
          value={formatNum(movimientoFields.montoGasto)}
          onChange={(event) => setMovimientoFields({ ...movimientoFields, montoGasto: Number(event.target.value.replace(/\./g, "")) })}
        />

        <label>Categoria</label>
        <select
          value={movimientoFields.categoria}
          onChange={(event) => setMovimientoFields({ ...movimientoFields, categoria: event.target.value })}
        >
          <option value="" disabled>Tipo de gasto</option>
          <option value="arriendo">Arriendo</option>
          <option value="mercado">Mercado</option>
          <option value="transporte">Transporte</option>
          <option value="nequi">Nequi</option>
          <option value="colegio">Colegio</option>
          <option value="salud">Salud</option>
          <option value="deudas">Deudas</option>
          <option value="diario">Diario</option>
        </select>

        <label>Descripcion</label>
        <input
          type="text"
          placeholder="Descripción de gasto"
          value={movimientoFields.descripcion}
          onChange={(event) => setMovimientoFields({ ...movimientoFields, descripcion: event.target.value })}
        />

        <label>Fecha</label>
        <input
          type="date"
          value={movimientoFields.fecha.toISOString().split("T")[0]} // Formatear fecha para input date
          onChange={(event) => setMovimientoFields({ ...movimientoFields, fecha: new Date(event.target.value) })}
        />

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
};
