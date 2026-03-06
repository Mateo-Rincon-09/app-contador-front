export const authEndpoint = {
    login: "auth/login",
    register: "auth/register",
    refreshToken: "auth/refresh-token",
};

export const userEndpoint = {
    getById: (id: string) => `users/${id}`,
    getAll: "users",

    post: {
        create: "users",
    },
    put: {
        update: (id: string) => `users/${id}`,
        refreshToken: (token: string) => `users/refresh-token/${token}`,
    },
    delete: {
        remove: (id: string) => `users/${id}`,
    },
};

export const movimientoEndpoint = {
    getAll: "movimientos",
    getById: (id: string) => `movimientos/${id}`,

    post: {
        create: "movimientos",
    },
    put: {
        update: (id: string) => `movimientos/${id}`,
    },
    delete: {
        remove: (id: string) => `movimientos/${id}`,
    },
};
