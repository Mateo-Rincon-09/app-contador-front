import { Outlet } from "react-router-dom";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import "./AppContainer.css";

const AppContainer = () => {
    return (
        <div className="app-container">
            <VerticalMenu />
            <main className="app-container__content">
                <Outlet />
            </main>
        </div>
    );
};

export default AppContainer;
