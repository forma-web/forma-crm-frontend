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
      const { id, ...user } = action.payload;
      if (id) state.id = id;
      state.data = state.data ? { ...state.data, ...user } : user;
    },
    setCompanies: (state, action: PayloadAction<TCompany[]>) => {
      state.companies = action.payload;
    },
    logoutUser: (state) => {
      state.id = null;
      state.data = null;
      state.companies = [];
      localStorage.removeItem('jwt');
    },
  },
});

export const { setUser, setCompanies, logoutUser } = userStoreSlice.actions;

export default userStoreSlice;
