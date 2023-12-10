import React from 'react';
import {
  Cloud,
  CloudQueue,
  WbSunny,
  NightsStay,
  Thunderstorm,
  NightlightRound,
} from '@mui/icons-material';

const WeatherIcon = {
  cloudy: <Cloud fontSize='large' />,
  'clear-night': <NightlightRound fontSize='large' />,
  'partly-cloudy-day': <CloudQueue fontSize='large' />,
  'clear-day': <WbSunny fontSize='large' />,
  'partly-cloudy-night': <NightsStay fontSize='large' />,
  rain: <Thunderstorm fontSize='large' />,
};

export default WeatherIcon;
