import { createSlice } from '@reduxjs/toolkit';
import { zkuadsApi } from '../api/zkuadsApi';

const initialState = {
    user: {
        name: 'Guest',
        picture: './src/assets/jpg/avatar.jpg',
        balance: {
            hard: 0,
            soft: 0,
            special: 0
        },
        loggedIn: false
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addMatcher(zkuadsApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload;
            state.user.balance.special = 0;
        })
    }
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;