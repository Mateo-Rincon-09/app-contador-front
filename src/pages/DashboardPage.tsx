import { useState } from "react"
import { Link } from "react-router-dom"


export const DashboardPage = () => {

    const [ingresosMensual, setIngresosMensual] = useState("")
    const [gastosMensual, setGastosMensual] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [date, setDate] = useState("")

   
    return (
        <div className="dashboard-container">
            <form className="dashboard-form">
                <h2>Agregar movimiento</h2>
                <label>Monto Ingresos</label>
                <input
                    type="number"
                    value={ingresosMensual}
                    placeholder="Ingresos mensual"
                    onChange={event => setIngresosMensual(event.target.value)}
                    required
                />
                <label>Monto Gastos</label>
                <input
                    type="number"
                    value={gastosMensual}
                    placeholder="Gastos mensual"
                    onChange={event => setGastosMensual(event.target.value)}
                    required
                />
                <label>Categoria</label>
                <select
                    value={categoria}
                    onChange={event => setCategoria(event.target.value)}
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
                    onChange={event => setDescripcion(event.target.value)}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />

                <button>Enviar</button>

                <Link to="/historial">Historial</Link>
                <Link to="/user">Pagina principal</Link>
            </form>
        </div>
    )
}