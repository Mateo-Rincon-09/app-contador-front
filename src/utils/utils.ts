import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";

export const getUniqueId = () => {
    return uuid();
};

export const confirmLogout = async (): Promise<boolean> => {
    const result = await Swal.fire({
        title: "¿Cerrar sesión?",
        text: "Tu sesión actual se cerrará",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar sesión",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#6b7280",
    });

    return result.isConfirmed;
};

export const showLogoutSuccess = async (): Promise<void> => {
    await Swal.fire({
        title: "Sesión cerrada",
        text: "Has salido correctamente",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
    });
};