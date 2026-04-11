import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { FiHome, FiBarChart2, FiClipboard, FiUser, FiLogOut } from "react-icons/fi";
import { JSX } from "react";
import { confirmLogout, showLogoutSuccess } from "../../utils/utils";
import "./VerticalMenu.css";

interface MenuItem {
    label: string;
    path: string;
    icon: JSX.Element;
}

const menuItems: MenuItem[] = [
    { label: "Agregar", path: "/transaction", icon: <FiHome /> },
    { label: "Ahorro", path: "/saving", icon: <FiBarChart2 /> },
    { label: "Historial", path: "/historial", icon: <FiClipboard /> },
    { label: "Perfil", path: "/user", icon: <FiUser /> },
];

export const VerticalMenu = () => {
    const { userActions } = useUserContext();
    const navigate = useNavigate();

    const onClick = async () => {
        const confirmed = await confirmLogout();
        if (!confirmed) return;

        userActions.logOut();
        
        await showLogoutSuccess();

        navigate("/login");
    };

    return (
        <aside className="vertical-menu">
            <div className="vertical-menu__brand">
                <FiBarChart2 className="vertical-menu__brand-icon" />
                <span className="vertical-menu__brand-name">Fintra</span>
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
                    <FiLogOut className="vertical-menu__item-icon" />
                    <span>Cerrar sesión</span>
                </button>
            </nav>
        </aside>
    );
};