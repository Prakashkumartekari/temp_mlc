import { createSlice } from "@reduxjs/toolkit";
import { initialAuthSliceStateProps } from "../../../types/auth";

const initialState: initialAuthSliceStateProps = {
  login_data: {
    userDocId: "",
    username: "",
    roles: [],
    type: "",
    token: "",
    refreshToken: "",
    exp: 0,
  },
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.login_data = action.payload;
    },
    setLogout: (state) => {
      state.login_data = {
        userDocId: "",
        username: "",
        roles: [],
        type: "",
        token: "",
        refreshToken: "",
        exp: 0,
      };
    },
  },
});
export default authSlice.reducer;
export const { setLoginState, setLogout } = authSlice.actions;
