import { createSlice } from "@reduxjs/toolkit";
import {userDataProps} from "../features/Api/products.types"
const initialState:userDataProps = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state) => {
      state.user = null;
    },
  },
});

export const { addUser,Logout } = userSlice.actions;
export default userSlice.reducer;