import  apiSlice from "./Api";
import { OrderPage,orderProps } from "./products.types"

const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<orderProps, OrderPage>({
      query: ( {page} ) =>
        `/cart/order?page=${page}`,
      providesTags: ["order"],
    }),
      changeState: builder.mutation({
        query: ({ status,id }) => ({
        url: `/cart/order/${id}`,
        method: "PUT",
        body: {status},
      }),
      invalidatesTags: ["order"],
      }),
      getOrderById: builder.query<orderProps,string|undefined>({
      query: (id) => `/cart/order/${id}`,
      providesTags: ["order"],
    }),
 
  }),
});
export const {
  useGetOrdersQuery,
  useChangeStateMutation,
  useGetOrderByIdQuery
} = OrderApi;
