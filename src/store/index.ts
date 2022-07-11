import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from 'modules/auth/services/AuthApi';
import { registrationApi } from 'modules/registration/services/RegistrationApi';
import { adminApi } from 'modules/admin/services/AdminApi';

import userReducer from 'modules/admin/services/AdminSlice';

import { mainReducers } from 'modules/main/services/MainSlice';

import { mainApi } from 'modules/main/services/MainApi';

const rootReducer = combineReducers({
  userReducer,
  mainReducers,
  [registrationApi.reducerPath]: registrationApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
  [mainApi.reducerPath]: mainApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        registrationApi.middleware,
        authApi.middleware,
        adminApi.middleware,
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
