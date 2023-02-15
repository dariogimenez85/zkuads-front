import { createSlice } from '@reduxjs/toolkit';

export enum GameModeTypes {
    REAL,
    FUN
}

const initialState = {
    gameMode: GameModeTypes.FUN
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setGameMode: (state: any, value) => {
            state.gameMode = value.payload;
        }
    }
});

export const { setGameMode } = configSlice.actions;
export default configSlice.reducer;