import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/CryptoNewsApi';

const cryptoApiMiddleware = cryptoApi.middleware;
const cryptoNewsApiMiddleware = cryptoNewsApi.middleware;


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApiMiddleware, cryptoNewsApiMiddleware),
});
