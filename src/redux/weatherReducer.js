import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  searchData: '',
};

export const getWeatherData = createAsyncThunk(
  'weatherData/getWeatherData',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/group?id=2039034,2950159,2988507,1850147,703448,2643743&appid=${process.env.REACT_APP_API_KEY}`,
    );
    dispatch(setWeatherData(res.data.list));
  },
);

export const weatherSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
    setCityWeatherData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setWeatherData, setCityWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
