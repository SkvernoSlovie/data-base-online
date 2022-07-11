import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { Method, AuthResponse, AuthPayload } from "types";

export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://online-db-server.herokuapp.com" }),
  endpoints: (build) => ({
    registrationUser: build.mutation<AuthResponse, AuthPayload>({
      query: (payload) => ({
        method: Method.POST,
        url: "/auth/registration",
        body: payload,
      }),
    }),
  }),
});
