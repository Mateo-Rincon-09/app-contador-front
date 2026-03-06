import { NavLink } from "react-router-dom";
import "./VerticalMenu.css";

interface MenuItem {
    label: string;
    path: string;
    icon: string;
}

const menuItems: MenuItem[] = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Ahorro",    path: "/ahorro",    icon: "💰" },
    { label: "Historial", path: "/historial", icon: "📋" },
    { label: "Perfil",    path: "/user",      icon: "👤" },
];

const VerticalMenu = () => {
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
            </nav>
        </aside>
    );
};

export default VerticalMenu;
