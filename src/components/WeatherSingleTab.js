import React from 'react';
import { Typography, Grid } from '@mui/material';
import {
  Cloud,
  CloudQueue,
  WbSunny,
  NightsStay,
  Thunderstorm,
  NightlightRound,
} from '@mui/icons-material';
import { handleDegreeConvert } from '../functions';

function WeatherSingleTab({ degrees, hours, degreeSign }) {
  const weatherIcons = {
    cloudy: <Cloud fontSize='large' />,
    'clear-night': <NightlightRound fontSize='large' />,
    'partly-cloudy-day': <CloudQueue fontSize='large' />,
    'clear-day': <WbSunny fontSize='large' />,
    'partly-cloudy-night': <NightsStay fontSize='large' />,
    rain: <Thunderstorm fontSize='large' />,
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        overflowX: 'scroll',
        flexWrap: 'nowrap',
        '&::-webkit-scrollbar': {
          height: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#fff',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
      }}>
      {degrees.map((degree, index) => (
        <Grid item key={index} textAlign='center' marginBottom={3}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 24,
            }}>
            {`${
              hours
                ? degree.datetime === '00:00:00'
                  ? 'Now'
                  : degree.datetime.slice(0, 5)
                : degree.datetime
            }`}
          </Typography>
          {weatherIcons[degree.icon]}
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 36,
            }}>
            {Math.floor(handleDegreeConvert(degreeSign, degree.temp))}&deg;
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default WeatherSingleTab;
