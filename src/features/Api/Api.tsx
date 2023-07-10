import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://candlesss.onrender.com/api`,
    // import.meta.env.VITE_BASE_URL
   
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");

      if (token !== null || token !== "undefined") {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),

 tagTypes: ["product","order", "user"],

  endpoints: () => ({}),
});

export default apiSlice
