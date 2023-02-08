import { createSlice } from '@reduxjs/toolkit';

export enum GameModeTypes {
    REAL,
    FUN
}

const initialState = {
    gameMode: GameModeTypes.FUN
}

export const gameModeSlice = createSlice({
    name: 'gameConfig',
    initialState,
    reducers: {
        setGameMode: (state: any, value) => {
            state.gameMode = value;
        }
    }
});

export const { setGameMode } = gameModeSlice.actions;
export default gameModeSlice.reducer;