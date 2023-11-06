import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authReducer/authSlice";
import signupReducer from "./signupReducer/signupSlice";

export const store =  configureStore({
    reducer:{authReducer, signupReducer}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
