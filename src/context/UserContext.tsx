import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { User } from "../interface/user.interface";
import { getUserById } from "../api/user/userApi";
import { LocalStoreKeys } from "../enums/localStoreKeys.enum";
import { UserType } from "../enums/userType.enum";
import { getStoredData, setStoredData } from "../services/localStorage.service";
import { showServiceError } from "../services/errorHandler.service";

export interface IUserState {
    isFetchDone?: boolean;
    user?: User;
    authorized: boolean;
    freeDays?: number;
};

const initStateBase: IUserState = {
    user: undefined,
    authorized: false,
};

export interface UserAuth {
    token?: string;
    expDate?: Date;
}

interface IContextProps {
    userState: IUserState;
    setUserState: (value: IUserState) => void;
    userIsAdmin: boolean;
    userOwner: boolean;
    userActions: IUserActions;
    userRequestSuccess: boolean;
    userRequestIsLoading: boolean;
};

export interface IUserActions {
    requestUser: (userId: string) => void;
    setUser: (value: User) => void;
    loginUser: (user: User, token: string) => void;
    logOut: () => void;
};



const storedToken = getStoredData<string | null>(null, LocalStoreKeys.token);
const initState = storedToken
    ? getStoredData<IUserState>(initStateBase, LocalStoreKeys.user)
    : initStateBase;


const UserContext = createContext({} as IContextProps);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userState, setUserState] = useState<IUserState>(initState);

    const userMutation = useMutation({
        mutationFn: (id: string) => getUserById(id),
        onSuccess: (data) => {
            setUserState({ ...userState, user: data, isFetchDone: true, authorized: true });
        },
        onError: (error: unknown) => {
            const err = error as { response?: { status: number } };
            let authorized = false;
            if (err?.response?.status === 401) {
                authorized = false;
            } else {
                showServiceError(error, "Error al cargar usuario");
            }
            setUserState({ ...userState, user: undefined, isFetchDone: true, authorized });
        },
    });

    const userIsAdmin = React.useMemo(() => {
        return userState.user?.type === UserType.SUPER_ADMIN || userState.user?.type === UserType.ADMIN_ACCOUNT ? true : false;
    }, [userState.user])

    const userOwner = React.useMemo(() => {
        return userState.user?.type === UserType.SUPER_ADMIN ? true : false;
    }, [userState.user])

    const requestUser = (userId: string) => {
        setUserState({ ...userState });
        userMutation.mutate(userId);
    };

    const loginUser = (user: User, token: string) => {

        localStorage.setItem("token", token.replace(/"/g, ""))
       
        setUserState((prev) => {
            const newState: IUserState = {
                ...prev,
                user,
                authorized: true,
                isFetchDone: true
            };

            setStoredData(LocalStoreKeys.user, newState);

            return newState;
        })

    };

    useEffect(() => {
        const token = getStoredData<string | null>(null, LocalStoreKeys.token);
        if (token && initState.user?.id) {
            userMutation.mutate(initState.user.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem(LocalStoreKeys.user)

        setUserState({
            user: undefined,
            authorized: false,
            isFetchDone: true,
        })
    }


    return (
        <UserContext.Provider
            value={{
                userState,
                setUserState,
                userIsAdmin,
                userOwner,
                userActions: {
                    requestUser,
                    setUser: (value) => setUserState({ ...userState, user: value }),
                    loginUser,
                    logOut,
                },
                userRequestIsLoading: userMutation.isPending,
                userRequestSuccess: userMutation.isSuccess,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
    return useContext(UserContext);
};

export default UserContextProvider;


