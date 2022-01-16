import { AuthActionTypes,  IAuthUser } from "../../types/authUser.type";

export const setAuthUser = (authUser: IAuthUser) => ({
    type: AuthActionTypes.SET_AUTH_USER,
    payload: authUser,
});