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
    logoutUser: (state) => {
      state.id = null;
      state.data = {};
      localStorage.removeItem('jwt');
    },
  },
});

export const { logoutUser } = userStoreSlice.actions;

export default userStoreSlice;
