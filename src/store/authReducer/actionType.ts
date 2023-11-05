
export const FETCH_RQUEST = "FETCH_RQUEST"
export const FETCH_FAILURE = "FETCH_FAILURE"


export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";


export interface Action {
    type: string;
    payload?: any;
  }

 export interface User {
    email: string;
    password: string;
    name?: string;
 }