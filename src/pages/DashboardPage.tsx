import { useState } from "react"
import { Link } from "react-router-dom"


export const DashboardPage = () => {

    const [ingresosMensual, setIngresosMensual] = useState<number>()
    const [gastosMensual, setGastosMensual] = useState<number>()
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const movimiento = {
            ingresosMensual,
            gastosMensual,
            categoria,
            descripcion,
            date,
        }

        const movimientosGuardados = localStorage.getItem("movimientos")

        const movimientos = movimientosGuardados
         ? JSON.parse(movimientosGuardados)
         : []

         localStorage.setItem("movimientos", JSON.stringify(movimientos))

         console.log("Movimiento guardado:", movimiento );
            
    }


    return (
        <div className="dashboard-container">
            <form className="dashboard-form" onSubmit={handleSubmit}>
                <h2>Agregar movimiento</h2>
                <label>Monto Ingresos</label>
                <input
                    type="number"
                    value={ingresosMensual}
                    placeholder="Ingresos mensual"
                    onChange={event => setIngresosMensual(Number(event.target.value))}
                    required
                />
                <label>Monto Gastos</label>
                <input
                    type="number"
                    value={gastosMensual}
                    placeholder="Gastos mensual"
                    onChange={event => setGastosMensual(Number(event.target.value))}
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

                <button type="submit">Enviar</button>

                <Link to="/historial">Historial</Link>
                <Link to="/user">Pagina principal</Link>
            </form>
        </div>
    )
}