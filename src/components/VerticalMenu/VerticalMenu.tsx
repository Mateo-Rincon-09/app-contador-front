import { NavLink, useNavigate } from "react-router-dom";
import "./VerticalMenu.css";
import { useUserContext } from "../../context/UserContext";

interface MenuItem {
    label: string;
    path: string;
    icon: string;
}

const menuItems: MenuItem[] = [
    { label: "Agregar", path: "/dashboard", icon: "📊" },
    { label: "Ahorro", path: "/ahorro", icon: "💰" },
    { label: "Historial", path: "/historial", icon: "📋" },
    { label: "Perfil", path: "/user", icon: "👤" },
];


export const VerticalMenu = () => {
    const { userActions } = useUserContext();
    const navigate = useNavigate();

    const onClick = () => {
        userActions.logOut();
        navigate("/login");
    }

    return (
        <aside className="vertical-menu">
            <div className="vertical-menu__brand">
                <span className="vertical-menu__brand-icon">💵</span>
                <span className="vertical-menu__brand-name">Contador</span>
            </div>

            <nav className="vertical-menu__nav">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `vertical-menu__item${isActive ? " vertical-menu__item--active" : ""}`
                        }
                    >
                        <span className="vertical-menu__item-icon">{item.icon}</span>
                        <span className="vertical-menu__item-label">{item.label}</span>
                    </NavLink>

                ))}
                <button onClick={onClick} className="vertical-button">
                    <span className="vertical-menu__item-icon">🚪</span>
                    <span>Cerrar sesión</span>
                </button>
            </nav>
        </aside>
    );
};
