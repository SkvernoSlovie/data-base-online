import { createSlice } from '@reduxjs/toolkit';
import { mainApi } from './MainApi';
import { Sensor, Device } from '../types';
import { IUser } from 'models/IUser';

interface MainState {
  sensors: Sensor[];
  devices: Device[];
  isLoading: boolean;
  error: string;
  user: null | IUser;
  role: string | null;
}

const initialState: MainState = {
  sensors: [],
  devices: [],
  user: null,
  role: null,
  isLoading: false,
  error: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    exit(state) {
      state.user = null;
      state.role = null;
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(mainApi.endpoints.getAllSensors.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.sensors = payload;
    });
    builder.addMatcher(mainApi.endpoints.getAllDevices.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.devices = payload;
    });
    builder.addMatcher(mainApi.endpoints.removeSensor.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.sensors = state.sensors.filter((item) => item.id !== payload);
    });
    builder.addMatcher(mainApi.endpoints.removeDevice.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.devices = state.devices.filter((item) => item.id !== payload);
    });
    builder.addMatcher(mainApi.endpoints.getUserByEmail.matchFulfilled, (state, action) => {
      const { payload } = action;

      state.user = payload;
      state.role = payload.roles[0].value;
      localStorage.setItem('role', payload.roles[0].value);
    });
  },
});

export default mainSlice;
export const mainReducers = mainSlice.reducer;

export const getSensor = (sensors: Sensor[], id: number): Sensor[] =>
  sensors.filter((item) => item.id === id);

export const getDevice = (devices: Device[], id: number): Device[] =>
  devices.filter((item) => item.id === id);
