import { createSlice, current } from '@reduxjs/toolkit';

let loggedStatus = localStorage.getItem("logged");
export const loggedStatusSlice = createSlice({
    name: 'loggedStatus',
    initialState: loggedStatus? JSON.parse(loggedStatus): false,
    reducers: {
        initSession: (state, action) => {
            localStorage.setItem("logged", true);
            return true;
        },
        deleteSession: (state, action) => {
            localStorage.removeItem("logged");
            return false;
        },
    },
});

export const { initSession, deleteSession } = loggedStatusSlice.actions;
export default loggedStatusSlice.reducer;
