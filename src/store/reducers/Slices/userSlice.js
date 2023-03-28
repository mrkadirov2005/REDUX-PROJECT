import { createSlice } from "@reduxjs/toolkit";
import { asyncThunks, login } from "../../actions";

const initialState = {
  user: {},
  isLoggedIn: false,
  loading: false,
  error: null,

  // registeration
  isRegistered: false,
  isRegisterationLoading: false,
  isFullFilled: false,
};

const userSlice = createSlice({
  name: " userReducer",
  initialState,
  reducers: {},
  // bu extraReducers createsliceni optionlaridan biri
  extraReducers: (builder) => {
    builder.addCase(asyncThunks.login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(asyncThunks.login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(asyncThunks.login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // registeration thunks
    builder.addCase(asyncThunks.register.pending, (state, action) => {
      state.isRegisterationLoading = true;
      state.error=null

    });
    builder.addCase(asyncThunks.register.fulfilled, (state, action) => {
      state.isRegistered = true;
      state.isRegisterationLoading = false;
      state.isFullFilled = true;
      state.error=null
    });
    builder.addCase(asyncThunks.register.rejected, (state, action) => {
      state.isRegistered = false;
      state.isRegisterationLoading = false;
      state.isFullFilled = false;
      state.error = action.payload;
    });
  },
});
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
