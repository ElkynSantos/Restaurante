import { configureStore } from '@reduxjs/toolkit';

import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import editUserSlice from '../features/editUserSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        modalEditUserState: editUserSlice
    },
});
