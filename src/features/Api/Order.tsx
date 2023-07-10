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
        query: ({ status,_id }) => ({
        url: `/cart/order/${_id}`,
        method: "PUT",
        body: {status},
      }),
      invalidatesTags: ["order"],
      }),
      getOrderById: builder.query<orderProps,string|undefined>({
      query: (_id) => `/cart/order/${_id}`,
      providesTags: ["order"],
    }),
 
  }),
});
export const {
  useGetOrdersQuery,
  useChangeStateMutation,
  useGetOrderByIdQuery
} = OrderApi;
