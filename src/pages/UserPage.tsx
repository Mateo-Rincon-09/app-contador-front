import { Link } from "react-router-dom"

export const UserPage = () => {

    return (
        <div className="user-dashboard">

            
            <aside className="user-sidebar">
                <h2 className="user-logo">ControlGastos</h2>

                <nav className="user-nav">

                    <Link to="/dashboard" className="user-nav-item">
                        Agregar movimiento
                    </Link>

                    <Link to="/historial" className="user-nav-item">
                        Historial
                    </Link>

                    <Link to="/ahorro" className="user-nav-item">
                        Metas de ahorro
                    </Link>

                </nav>

                <Link to="/" className="user-logout">
                    Cerrar sesión
                </Link>
            </aside>


            <main className="user-content">

                <h1 className="user-title">
                    Bienvenido a tu panel
                </h1>

                <p className="user-description">
                    Desde aquí puedes registrar tus ingresos y gastos,
                    revisar tu historial y crear metas de ahorro para
                    organizar mejor tu dinero.
                </p>

            </main>

        </div>
    )
}