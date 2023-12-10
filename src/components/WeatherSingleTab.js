import React from 'react';
import { Typography, Grid } from '@mui/material';
import { handleDegreeConvert, getDay } from '../functions';
import WeatherIcon from './WeatherIcon';

/**
 * WeatherSingleTab displays weather information for each hour or day in a scrollable grid.
 * It includes the time or day, weather icon, and temperature.
 *
 * @param {Object[]} degrees - Array of weather data for each hour or day.
 * @param {boolean} hours - Indicates whether the data is hourly or daily.
 * @param {number} degreeSign - Sign for temperature conversion (Celsius/Fahrenheit).
 * @returns {JSX.Element} - React component representing the weather information grid.
 */
function WeatherSingleTab({ degrees, hours, degreeSign }) {
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
                : getDay(degree.datetime)
            }`}
          </Typography>
          {WeatherIcon[degree.icon]}
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
