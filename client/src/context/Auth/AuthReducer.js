 import {
 REGISTER_SUCCESS,
 REGISTER_FAIL,
 USER_LOADED,
 AUTH_ERROR,
  LOGIN_SUCCESS, 
LOGIN_FAIL,
 LOGOUT,
 CLEAR_ERRORS 
} from '../Types';

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
            ...state,
            isAuthenticated: true,
            };
        case REGISTER_SUCCESS: 
        localStorage.setItem('token', action.payload.token);
        return{
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false,
            user: action.payload
        };
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null,
                error: action.payload
            };
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error: null
                };
                default:
                    return state;
    }
}