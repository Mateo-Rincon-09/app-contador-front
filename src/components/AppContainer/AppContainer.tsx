import { Navigate, Outlet } from "react-router-dom";
import { VerticalMenu } from "../VerticalMenu/VerticalMenu";
import { useUserContext } from "../../context/UserContext";
import "./AppContainer.css";

export const AppContainer = () => {
    const { userState } = useUserContext();

    if (!userState.isFetchDone){
        return <div>Loading...</div>
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
