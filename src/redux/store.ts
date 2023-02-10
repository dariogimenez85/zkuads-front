import { configureStore } from "@reduxjs/toolkit";

import configReducer from './slices/configSlice';
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        config: configReducer,
        user: userSlice
    }
});