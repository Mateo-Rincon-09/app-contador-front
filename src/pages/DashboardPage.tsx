import { Link, useNavigate } from "react-router-dom";
import { useMovimientos } from "../context/MovimientosContext";
import { useState } from "react";
import { formatNum } from "../services/formatNum";

export const DashboardPage = () => {
  const { agregarMovimiento } = useMovimientos();

  const [montoIngreso, setMontoIngreso] = useState<number>(0);
  const [montoGasto, setMontoGasto] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");

  const navigate = useNavigate();


  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    agregarMovimiento({
      montoIngreso,
      montoGasto,
      categoria,
      descripcion,
      fecha,
    });

    setMontoIngreso(0);
    setMontoGasto(0);
    setCategoria("");
    setDescripcion("");
    setFecha("");

    
    navigate('/historial');

  };


  return (
    <div className="dashboard-container">
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <h2>Agregar movimiento</h2>

        <label>Monto Ingreso (COP)</label>
        <input
          value={formatNum(montoIngreso)}
          onChange={(event) => {
            const value = event.target.value.replace(/\./g, "")
            setMontoIngreso(Number(value))
          }}
          required
        />

        <label>Monto Gasto (COP)</label>
        <input
          value={formatNum(montoGasto)}
          onChange={(event) => {
            const value = event.target.value.replace(/\./g, "")
            setMontoGasto(Number(value))
          }}
          required
        />

        <label>Categoria</label>
        <select
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
          required
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
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          required
        />

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(event) => setFecha(event.target.value)}
          required
        />

        <button type="submit">Enviar</button>

        <Link to="/historial">Historial</Link>
        <Link to="/user">Pagina principal</Link>
      </form>
    </div>
  );
};
