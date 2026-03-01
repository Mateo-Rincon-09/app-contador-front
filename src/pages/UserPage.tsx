import { Link } from "react-router-dom"

export const UserPage = () => {
    return (
        <div>
            <div>
                <Link to="/dashboard">Agregar movimiento</Link>
            </div>
            <div>
                <Link to="/historial">Historial</Link>
            </div>
            <div>
                <Link to="/ahorro">Metas de ahorro</Link>
            </div>
            <div>
                <Link to="/">Cerrar sesion</Link>
            </div>
        </div>
    )
}