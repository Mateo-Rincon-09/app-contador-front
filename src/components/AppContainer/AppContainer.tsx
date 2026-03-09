import { Outlet } from "react-router-dom";
import { VerticalMenu } from "../VerticalMenu/VerticalMenu";
import "./AppContainer.css";

export const AppContainer = () => {
    return (
        <div className="app-container">
            <VerticalMenu />
            <main className="app-container__content">
                <Outlet />
            </main>
        </div>
    );
};
