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


export const transactionEndpoint = {
    getById: (id: string) => `transaction/${id}`,
    getAll: "transaction",

    post: {
        create: "transaction/create",
        listTransaction: "transaction/list"
    },
    put: {
        update: (id: string) => `transaction/${id}`,
    },
    delete: {
        remove: (id: string) => `transaction/${id}`,
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


export const categoryEndpoint = {
    getById: (id: string) => `category/${id}`,
    getAll: "category",

    post: {
        create: "category/new"
    },
    put: {
        update: (id: string) => `category/${id}`,
    },
    delete: {
        remove: (id: string) => `category/${id}`,
    },
};