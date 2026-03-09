import { useMovimientos } from "../context/MovimientosContext"
import { formatNum } from "../services/formatNum"

export const HistorialPage = () => {
    const { movimientos } = useMovimientos()

    const removeMov = (event: React.SyntheticEvent) => {
        event.preventDefault();
        localStorage.removeItem("movimientos");
    }

    return (
        <div className="historial-container">

            <h1 className="historial-title">Historial de movientos</h1>
            {movimientos.length === 0 ?
                <p className="historial-empty">No tienes movimientos</p>
                :

                <table className="historial-table"> 
                    <thead>
                        <tr>

                            <th>Fecha</th>
                            <th>Categoria</th>
                            <th>Descripcion</th>
                            <th>Ingreso</th>
                            <th>Gasto</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimientos.map((movimiento, index) => (
                            <tr key={index}>
                                <td>{movimiento.fecha}</td>
                                <td>{movimiento.categoria} </td>
                                <td>{movimiento.descripcion}</td>
                                <td className="ingreso">{movimiento.montoIngreso > 0 ? `+${formatNum(movimiento.montoIngreso)}` : 0}</td>
                                <td className="gasto">{movimiento.montoGasto > 0 ? `-${formatNum(movimiento.montoGasto)}` : 0}</td>
                                <td><button className="delete-btn" onClick={removeMov}>Eliminar</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}