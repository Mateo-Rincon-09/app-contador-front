import { LocalStoreKeys } from "../enums/localStoreKeys.enum";

export const getStoredData = <T>(defaultValue: T, key: LocalStoreKeys): T => {
    try {
        const stored = localStorage.getItem(key);
        if (!stored) return defaultValue;
        return JSON.parse(stored) as T;
    } catch {
        return defaultValue;
    }
};

export const setStoredData = <T>(key: LocalStoreKeys, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeStoredData = (key: LocalStoreKeys): void => {
    localStorage.removeItem(key);
};
