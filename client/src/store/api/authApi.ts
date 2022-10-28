import { baseApi, HttpMethod } from "./baseApi";

export const SIGNUP_URL = "/signup";
export const SIGNIN_URL = "/signin";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({ url: SIGNUP_URL, method: HttpMethod.POST, body }),
    }),
    signin: builder.mutation({
      query: (body) => ({ url: SIGNIN_URL, method: HttpMethod.POST, body }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;