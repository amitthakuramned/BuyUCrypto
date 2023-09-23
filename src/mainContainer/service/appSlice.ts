import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.buyucoin.com';
const endPoints = {
  liveData: 'ticker/v1.0/liveData',
  liveDataByCode:'ticker/v1.0/liveData?symbol=',
  allCurrencies: 'ticker/v1.0/allCurrencies'
};

export interface LiveData {
  data:any,
  success:string,
  sub_status:any
}

export const bitHomeApi = createApi({
  reducerPath: 'bitHomeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['allCurrency','liveDataByCode'],
  endpoints: (builder) => ({
    getCurrency: builder.query<LiveData, string>({
      query: () => `${endPoints.allCurrencies}`,
      providesTags: (result:any) => (result ? [{ type: 'allCurrency', id: 'current' }] : []),
    }),
    getLiveDataAll: builder.query<LiveData, string>({
        query: () => `${endPoints.liveData}`,
        providesTags: (result:any) => (result ? [{ type: 'allCurrency', id: 'current' }] : []),
      }),
    getLiveDataByCode: builder.query<LiveData, string>({
      query: (code:any) => `${endPoints.liveDataByCode}${code}`,
      providesTags: (result:any) => (result ? [{ type: 'liveDataByCode', id: 'code' }] : []),
    }),
  }),
});

export const { useGetCurrencyQuery, useGetLiveDataByCodeQuery,useGetLiveDataAllQuery } = bitHomeApi;

export default bitHomeApi;
