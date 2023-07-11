import  apiSlice from "./Api";
import { abc,orderProductsProps,productsProps,Response ,singleProductProps} from "./products.types"

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Response, abc>({
      query: ( 
        {search,page }) =>
        `/products?search=${search}&page=${page}`,
      providesTags: ["product"],
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products?categoryId=${category}`,
      providesTags: ["product"],
    }),
    getProductsForAdmin: builder.query({
      query: () => `products/productsForAdmin`,
      providesTags: ["product"],
    }),
    getProductById: builder.query<singleProductProps,string|undefined>({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),
    favourite: builder.mutation({
      query: (item) => ({
        url: `/products/${item._id}`,
        method: "PUT",
        body: item,
      }),
      invalidatesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (item) => ({
        url: "/products/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["product"],
    }),

    discountToProduct: builder.mutation({
      query: ({id,discount}) => ({
        url: `/products/${id}/descount`,
        method: "PUT",
        body: {discount},
      }),
      invalidatesTags: ["product"],
    }),
      updateproduct: builder.mutation({
      query: ({id,productName,price,description}) => ({
        url: `/products/updateproduct/${id}`,
        method: "PUT",
        body: {productName,price,description},
      }),
      invalidatesTags: ["product"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useFavouriteMutation,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateproductMutation,
  useGetProductsForAdminQuery,
  useDeleteProductMutation,
  useDiscountToProductMutation,
} = productApi;
