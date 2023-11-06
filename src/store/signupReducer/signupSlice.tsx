import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SingleUser } from "../../Constants";
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

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        postSignup.fulfilled,
        (state, action: PayloadAction<SingleUser>) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isAuth = true;
        }
      )
      .addCase(postSignup.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuth = false;
      })
      .addCase(postSignup.rejected, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuth = false;
      });
  },
});

export const postSignup = createAsyncThunk(
  "signup/postSignup",
  async (data: SingleUser) => {
    try {
      const res = await axios.post(
        `https://64b65d04df0839c97e156cc4.mockapi.io/users`,
        data
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export default signupSlice.reducer;
