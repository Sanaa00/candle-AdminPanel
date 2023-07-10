import { configureStore } from "@reduxjs/toolkit";
import  apiSlice  from "./features/Api/Api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import searchReducer from "./features/searchSlice";
import userReducer from "./features/userSlice"
const store = configureStore({
  reducer: {
    search: searchReducer,
    user:userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
