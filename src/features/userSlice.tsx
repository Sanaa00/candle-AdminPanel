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
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;