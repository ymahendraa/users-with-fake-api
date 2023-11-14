import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// define the initial state using that type
const initialState = {
  token: "",
};

// create a slice for authentication with our desired reducers
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setAuthData : reducer to assign access token and refresh token
    setAuthData: (state, action: PayloadAction<{ token: string }>): void => {
      state.token = action.payload.token;
    },
    // handleRefreshToken : reducer to reassign access token and refresh token
    // handleRefreshToken: (state, action: PayloadAction<string>) => {
    //   state.refreshToken = action.payload;
    // },
    // hadleLogout : reducer to handle logout
    handleLogout: (state): void => {
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAuthData: handleLogin,
  handleLogout,
  // handleRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
