import { createSlice } from '@reduxjs/toolkit';

import { TUser } from '../../types/forms/user';

type TUserState = {
  id: number | null;
  data: Partial<TUser>;
};

const defaultValues: TUserState = {
  id: null,
  data: {},
};

export const userStoreSlice = createSlice({
  name: 'user',
  initialState: defaultValues,
  reducers: {
    setUser: (state, action) => {
      const { id, ...user } = action.payload;
      if (id) state.id = id;
      state.data = { ...state.data, ...user };
    },
    logoutUser: (state) => {
      state.id = null;
      state.data = {};
      localStorage.removeItem('jwt');
    },
  },
});

export const { setUser, logoutUser } = userStoreSlice.actions;

export default userStoreSlice;
