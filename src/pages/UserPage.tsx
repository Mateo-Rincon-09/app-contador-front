import { useUserContext } from "../context/UserContext";
import "../styles/user.css";

export const UserPage = () => {

    const { userState } = useUserContext();

    const userName = userState.user?.name;

    return (
        <div className="user-dashboard">
            
            <main className="user-content">
                <h1 className="user-title">
                    Bienvenido a tu panel {userName}
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