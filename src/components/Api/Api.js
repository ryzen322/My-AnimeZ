import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_REACT_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: `${url}meta/anilist/`,
});

const Api = createApi({
  baseQuery,
  endpoints: () => ({}),
});

export default Api;
