import { Action, FETCH_FAILURE, FETCH_RQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS, User } from "../actionTypes"





interface State {
    isLoading: boolean;
    isError: boolean;
    user: User;
    isAuth: boolean;
  }


const initialState: State = {
    isLoading: false,
    isError: false,
    user : {
        email:"",
        password:"",
        name:"",
    },
    isAuth: false,
}

export const reducer = (state: State = initialState, { type, payload }:Action) => {
    switch (type) {
        case FETCH_RQUEST: {
            return { ...state, isLoading: true }
        }
        case FETCH_FAILURE: {
            return { ...state, isLoading : false,  isError: true }
        }    
        case LOGIN_SUCCESS: {
            return { ...state, isLoading: false,isAuth: true, user : payload }
        }
        case SIGNUP_SUCCESS: {
            return { ...state, isLoading: false }
        }
        case LOGOUT_SUCCESS:{
            return initialState
        }
        default:
            return state;
    }
}
