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

 tagTypes: [
      // "userData",
   "product",
   "order"
      // "user",
      // "cart",
      // "review",
      // "category",
      // "address",
      // "contact",
      // "favourite",
    ],

  endpoints: () => ({}),
});

  export default apiSlice


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // type  Apiprops={
// //      reducerPath:string,
// //      tagTypes:string[],
// //      baseUrl: ImportMetaEnv[string],
// //     //  prepareHeader?:((headers: Headers, api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">) => MaybePromise<void | Headers>) | undefined,

// // }

// // type props={
// //   search:string,
// //   category:number,
// //   page:number,
// //   // providesTags:[]
// // }

//  const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_URL,
//     tagTypes:[
//       "userData",
//       "product",
//       "user",
//       "cart",
//       "review",
//       "category",
//       "address",
//       "contact",
//       "favourite",
//     ],
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("access_token");

//       if (token !== null || token !== "undefined") {
//         headers.set("Authorization", `Bearer ${token}`);
//         return headers;
//       }
//       // console.log(headers)
//       return headers;
//     },
//   }),

//   // endpoints: () => ({}),
//   endpoints: (builder) => ({
//     getProducts: builder.query<props,props>({
//       query: () =>
//         `products/productsForAdmin`,
//       providesTags: ["product"],
//     }),
// })
// });
// export const {
//   useGetProductsQuery,
//   // useGetProductByIdQuery,
//   // useFavouriteMutation,
//   // useGetProductsByCategoryQuery,
//   // useAddProductMutation,
//   // useGetProductsForAdminQuery,
//   // useDeleteProductMutation,
//   // useDiscountToProductMutation,
// } = apiSlice;
// export default  apiSlice