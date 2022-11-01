import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCompany } from '../../types/company';
import { TUser } from '../../types/forms/user';

type TUserState = {
  id: number | null;
  data: Omit<TUser, 'id'> | null;
  companies: TCompany[];
};

const defaultValues: TUserState = {
  id: null,
  data: null,
  companies: [],
};

export const userStoreSlice = createSlice({
  name: 'user',
  initialState: defaultValues,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      const { id, avatar, ...user } = action.payload;
      state.id = id;
      state.data = state.data ? { ...state.data, ...user } : user;
    },
    setCompanies: (state, action: PayloadAction<TCompany[]>) => {
      state.companies = action.payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem('jwt');
      state.id = null;
      state.data = null;
      state.companies = [];
    },
  },
});

export const { setUser, setCompanies, logoutUser } = userStoreSlice.actions;

export default userStoreSlice;
