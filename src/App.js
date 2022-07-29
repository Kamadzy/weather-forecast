import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { CardGroup } from './components/CardGroup/CardGroup';
import BeatLoader from 'react-spinners/BeatLoader';
import TextField from '@mui/material/TextField';
import { getWeatherData, setCityWeatherData } from './redux/weatherReducer';

import './App.css';

function App() {
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.data);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=${process.env.REACT_APP_API_KEY}`;

  const searchCity = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((res) => {
        dispatch(setCityWeatherData(res.data));
      });
    }
  };

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);
  console.log(weatherData, 'weatherData');

  return (
    <div className='App'>
      <h1 className='header-text'>Weather Forecast</h1>
      <div className='content'>
        <TextField
          className='search-field'
          id='standard-basic'
          label='Search'
          variant='standard'
          value={searchData}
          onKeyPress={searchCity}
          onChange={(e) => setSearchData(e.target.value)}
        />
        {weatherData ? <CardGroup weatherData={weatherData} /> : <BeatLoader />}
      </div>
    </div>
  );
}

export default App;
