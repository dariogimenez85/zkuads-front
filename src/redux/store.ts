import { configureStore } from "@reduxjs/toolkit";
import gameModeReducer from './slices/gameConfigSlice';

export const store = configureStore({
    reducer: {
        gameConfig: gameModeReducer
    }
});