import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/meta/anilist/",
});

const Api = createApi({
  baseQuery,
  tagTypes: ["Anime"],
  endpoints: (builder) => ({}),
});

export default Api;
