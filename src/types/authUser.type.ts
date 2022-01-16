import {IUser} from './user.type';

export enum AuthActionTypes {
    SET_AUTH_USER = "SET_AUTH_USER",
    GET_AUTH_USER = "GET_AUTH_USER",
}

export interface IAuthUser extends IUser{
    userType: number;
}

export type AuthUserState = {
    authUser: IAuthUser | null;
}

export type setAuthUser = {
    type: typeof AuthActionTypes.SET_AUTH_USER;
    payload: IAuthUser;
};

export type getAuthUser = {
    type: typeof AuthActionTypes.GET_AUTH_USER;
    payload: IAuthUser;
};

export type AuthUserDispatchType = setAuthUser | getAuthUser;