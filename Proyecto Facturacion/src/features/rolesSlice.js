import { createSlice } from '@reduxjs/toolkit';

export const rolesSlice = createSlice({
    name: 'roles',
    initialState: [],
    reducers: {
        initRoles: (state, action) => {
            return action.payload;
        },
        addRoles: (state, action) => {
            state.push(action.payload);
        }
    },
});

export const { initRoles, addRoles } =
    rolesSlice.actions;
export default rolesSlice.reducer;
