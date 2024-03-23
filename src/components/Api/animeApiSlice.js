import Api from "./Api";

export const animeApiSlice = Api.injectEndpoints({
  endpoints: (builder) => ({
    getPopularAnime: builder.query({
      query: (params) => {
        const { pages, perPage: totalPages } = params.page;
        return {
          url: `popular`,
          params: {
            page: pages,
            perPage: totalPages,
          },
        };
      },
    }),
    getTrendingAnime: builder.query({
      query: (params) => {
        const { pages, perPage: totalPages } = params;

        return {
          url: `trending`,
          params: {
            page: pages,
            perPage: totalPages,
          },
        };
      },
    }),
    getAnime: builder.query({
      query: (params) => {
        const { pages, perPage: totalPages, endpoints } = params;
        return {
          url: `${endpoints}`,
          params: {
            page: pages,
            perPage: totalPages,
          },
        };
      },
    }),
    getAllAnime: builder.query({
      query: (params) => {
        // const { pages, perPage: totalPages } = params;

        return {
          url: "recent-episodes",
          params: {
            page: 1,
            perPage: 2,
            provider: "gogoanime",
          },
        };
      },
    }),
    getInfoAnime: builder.query({
      query: (param) => {
        return {
          url: `info/${param.id}`,
          params: {
            provider: "gogoanime",
          },
        };
      },
    }),
    playAnime: builder.query({
      query: (param) => {
        return {
          url: `watch/${param.id}`,
        };
      },
    }),
  }),
});

export const {
  useGetPopularAnimeQuery,
  useGetTrendingAnimeQuery,
  useGetAnimeQuery,
  useGetAllAnimeQuery,
  useGetInfoAnimeQuery,
  usePlayAnimeQuery,
} = animeApiSlice;
