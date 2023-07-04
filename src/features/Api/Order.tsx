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
      query: (item) => ({
        url: "/cart",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["order"],
    }),
 
  }),
});
export const {
  useGetOrdersQuery,
  useChangeStateMutation
} = OrderApi;
