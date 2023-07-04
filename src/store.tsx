

import { configureStore } from "@reduxjs/toolkit";
import  apiSlice  from "./features/Api/Api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import searchReducer from "./features/searchSlice"
const store = configureStore({
  reducer: {
    search:searchReducer,
    // ...other reducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import  apiSlice  from "../src/Api/Api";

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });
// export default store;