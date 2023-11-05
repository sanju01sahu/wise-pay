import { configureStore } from "@reduxjs/toolkit"
import { reducer as authReducer } from "./authReducer/reducer";

export const store =  configureStore({
    reducer:{authReducer, }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
