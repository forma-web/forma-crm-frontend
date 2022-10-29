import { RootState } from '.';

export const selectUser = (state: RootState) => state.user;
export const selectCompanies = (state: RootState) => state.user.companies;
