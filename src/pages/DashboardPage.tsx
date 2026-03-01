import { Link } from "react-router-dom"

export const DashboardPage = () => {
    return (
        <div>
            <form>
                <h2>Agregar movimiento</h2>
                <label>Monto</label>
                <input
                    type="number"
                    placeholder="Ingresos mensual"
                    required
                />
                <label>Categoria</label>
                <input
                    type="text"
                    placeholder="Trabajo, Negocio, etc"
                    required
                />
                <label>Descripcion</label>
                <input
                    type="text"
                    placeholder="Tipo de trabajo, Venta de producto, etc"
                    required
                />
                <label>Fecha</label>
                <input
                    type="date"
                    required
                />
            </form>

            <form>
                <h2>Agregar movimiento</h2>
                <label>Monto</label>
                <input
                    type="number"
                    placeholder="Total de gastos mensual"
                    required
                />
                <label>Categoria</label>
                <input
                    type="text"
                    placeholder="Comida, Transporte, Arriendo, Mercado, etc"
                    required
                />
                <label>Descripcion</label>
                <input
                    type="text"
                    placeholder="Tipo de comida, tipo de transporte, etc"
                    required
                />
                <label>Fecha</label>
                <input
                    type="date"
                    required
                />
            </form>


            <Link to="/user">Pagina Principal</Link>
        </div>
    )
}