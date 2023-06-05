import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b581486147msh03f2501cbe6ddb9p17995ejsn9ffe9eadd322',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins ')
        })
    })
})

export const {
    useGetCryptosQuery, 
} = cryptoApi;



// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//     headers: {
//       'X-RapidAPI-Key': 'b581486147msh03f2501cbe6ddb9p17995ejsn9ffe9eadd322',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };