import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUser, SingleUser } from "../../Constants";
import axios from "axios";

interface State {
  isLoading: boolean;
  isError: boolean;
  isAuth: boolean;
  user: object | SingleUser;
}
const initialState: State = {
  isLoading: false,
  isError: false,
  isAuth: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isAuth = false;
    },
    error: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isAuth = false;
    },
    auth: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getLogin.fulfilled,
        (state, action: PayloadAction<SingleUser>) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isAuth = true;
        }
      )
      .addCase(getLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuth = false;
      })
      .addCase(getLogin.rejected, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuth = false;
      });
  },
});

export const getLogin = createAsyncThunk(
  "auth/getLogin",
  async ({ email, password }: LoginUser) => {
    try {
      const res = await axios.get(
        `https://64b65d04df0839c97e156cc4.mockapi.io/users?email=${email}&password=${password}`
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const { loading, error, auth } = authSlice.actions;

export default authSlice.reducer;