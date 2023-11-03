import axios from "axios";
import {Dispatch} from "redux"
import { FETCH_FAILURE, FETCH_RQUEST,LOGIN_SUCCESS, SIGNUP_SUCCESS, User } from "../actionTypes"

const api="https://64b65d04df0839c97e156cc4.mockapi.io/users";


export const login = (email: string,password: string) => (dispatch : Dispatch) => {
  return (
    dispatch({type:FETCH_RQUEST}),
    axios.get(`https://64b65d04df0839c97e156cc4.mockapi.io/users?email=${email}&password=${password}`)
    .then(res =>{
       dispatch({type:LOGIN_SUCCESS, payload: res.data})
    } )
    .catch(err=> {
      dispatch({type:FETCH_FAILURE});
    })
  )
};


export const signup = (user:User) => (dispatch :Dispatch) => {
  return (
    dispatch({type:FETCH_RQUEST}),
    axios.post(`${api}`,user)
    .then(res => dispatch({type:SIGNUP_SUCCESS}))
    .catch(err=> dispatch({type:FETCH_FAILURE}))
  )
};
