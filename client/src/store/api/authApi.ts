import { baseApi, HttpMethod } from "./baseApi";

export interface AuthResponse {
  token: string;
}

export const SIGNUP_URL = "/signup";
export const SIGNIN_URL = "/signin";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, any>({
      query: (body) => ({ url: SIGNUP_URL, method: HttpMethod.POST, body }),
    }),
    signin: builder.mutation<AuthResponse, any>({
      query: (body) => ({ url: SIGNIN_URL, method: HttpMethod.POST, body }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
