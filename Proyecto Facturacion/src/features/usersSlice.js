import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        initUsers: (state, action) => {
            return action.payload;
        },
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const currentUser = action.payload;
            let foundUser = state.findIndex((user) => user.UserName === currentUser.UserName);
            if(foundUser)
                state[foundUser] = currentUser;
        },
        changeUserStatus: (state, action) => {
            const DNI = action.payload;

            const foundUser = state.find((user) => user.DNI === DNI);
            if (foundUser) {
                foundUser.status = foundUser.status == 1? 0 : 1;
            }
        },
    },
});

export const { initUsers, addUser, editUser, changeUserStatus } = usersSlice.actions;
export default usersSlice.reducer;
