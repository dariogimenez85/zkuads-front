import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Guest',
    picture: './src/assets/jpg/avatar.jpg',
    balance: {
        hard: 0,
        soft: 0,
        special: 0
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state: any, value) => {
            state.name = value;
        },
        setPicture: (state: any, value) => {
            state.picture = value;
        },
        setHardBalance: (state: any, value) => {
            state.balance.hard = value;
        },
        setSoftBalance: (state: any, value) => {
            state.balance.soft = value;
        },
        setSpecialBalance: (state: any, value) => {
            state.balance.special = value;
        }

    }
});

export const { setName, setPicture, setHardBalance, setSoftBalance, setSpecialBalance } = userSlice.actions;
export default userSlice.reducer;