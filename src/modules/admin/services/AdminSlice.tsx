import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';
import { IRole } from 'models/IRole';
import { adminApi } from './AdminApi';

interface UserState {
  users: IUser[];
  roles: IRole[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  roles: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(adminApi.endpoints.getAllUser.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.users = payload;
    });
    builder.addMatcher(adminApi.endpoints.deleteUser.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.users = state.users.filter((item) => item.id !== payload);
    });
    builder.addMatcher(adminApi.endpoints.getAllRoles.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.roles = payload;
    });
    builder.addMatcher(adminApi.endpoints.setUserRole.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.users = state.users.map((item) =>
        item.id === payload.id ? { ...item, roles: [payload.role] } : item,
      );
    });
  },
});

export default userSlice.reducer;
