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
        editUser: (state, action) => {},
        changeUserStatus: (state, action) => {
            const { DNI, status } = action.payload;
            const foundUser = state.find((user) => user.DNI === DNI);
            if (foundUser) {
                foundUser.status = status == 1 ? 0 : 1;
            }
        },
    },
});

export const { initUsers, addUser, editUser, changeUserStatus } =
    usersSlice.actions;
export default usersSlice.reducer;
