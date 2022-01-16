import { AuthActionTypes, IAuthUser, AuthUserDispatchType } from "../../types/authUser.type";

interface IDefaultState {
    authUser: IAuthUser | null;
};

const defaultState: IDefaultState = {
    authUser: null,
};

const authUserReducer = (state: IDefaultState = defaultState, action: AuthUserDispatchType) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload,
            };

        case AuthActionTypes.GET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload,
            };

        default:
            return state;
    }
}

export default authUserReducer;