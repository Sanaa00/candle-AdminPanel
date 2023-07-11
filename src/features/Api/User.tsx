import { apiSlice } from "./Api";
import {UserQueryProps, userDataProps} from "./products.types"
const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body: body,
      }),
    }),
    getCurrentUser: builder.query({
      query: (token) => ({
        url: "/user/currentuser",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    getAllUser: builder.query<UserQueryProps,undefined>({
      query: () => ({
        url: "/user",
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["user"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSignupMutation, useGetCurrentUserQuery, useLoginMutation,useGetAllUserQuery } =
  authApi;
