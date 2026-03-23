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
    getById: (id: string) => `movements/${id}`,
    getAll: "movements",

    post: {
        create: "movements/create",
    },
    put: {
        update: (id: string) => `movements/${id}`,
    },
    delete: {
        remove: (id: string) => `movements/${id}`,
    },
};


export const savingEndpoint = {
    getById: (id: string) => `saving/${id}`,
    getAll: "saving",

    post: {
        create: "saving/new"
    },
    put: {
        update: (id: string) => `saving/${id}`
    },
    delete: {
        remove: (id: string) => `saving/${id}`
    },
}