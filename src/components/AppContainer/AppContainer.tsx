import { Navigate, Outlet } from "react-router-dom";
import { VerticalMenu } from "../VerticalMenu/VerticalMenu";
import { useUserContext } from "../../context/UserContext";
import "./AppContainer.css";

export const AppContainer = () => {
    const { userState } = useUserContext();

    if (!userState.isFetchDone) {
        return (
            <div className="app-loading">
                <div className="app-loading__spinner"></div>
                <p className="app-loading__text">Cargando...</p>
            </div>
        );
    }

    if (!userState.authorized) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="app-container">
            <VerticalMenu />
            <main className="app-container__content">
                <Outlet />
            </main>
        </div>
    );
};
