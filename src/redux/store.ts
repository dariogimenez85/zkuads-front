import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import configReducer from './slices/configSlice';
import userSlice from "./slices/userSlice";
import { zkuadsApi } from './api/zkuadsApi';
import { powApi } from "./api/powApi";

export const store = configureStore({
    reducer: {
        config: configReducer,
        user: userSlice,
        [zkuadsApi.reducerPath]: zkuadsApi.reducer,
        [powApi.reducerPath]: powApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(zkuadsApi.middleware).concat(powApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);