import { User } from "../interface/user.interface";
import { UserType } from "../enums/userType.enum";

export interface UserPermissions {
    canViewDashboard: boolean;
    canManageUsers: boolean;
    canViewHistorial: boolean;
}

export const getUserPermissions = (user?: User): UserPermissions => {
    const isAdmin = user?.type === UserType.ADMIN_ACCOUNT || user?.type === UserType.SUPER_ADMIN;
    return {
        canViewDashboard: !!user,
        canManageUsers: isAdmin,
        canViewHistorial: !!user,
    };
};
