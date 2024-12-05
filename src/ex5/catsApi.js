import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'live_3rSq6scZ3ZtJNavzwUMFIyBaP3JnPuQxJNFJSKluWJqAYS2LX8LxgRlu7sKooQGa';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders(headers) {
      headers.set('x-api-key', apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query({
      query: ({ page = 0, limit = 5, order = 'asc' }) => ({
        url: 'images/search',
        params: { page, limit, order },
      }),
    }),
  }),
});

export const { useGetCatsQuery } = catsApi;
