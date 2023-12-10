import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DegreeTabs from '../components/DegreeTabs';
import WeatherTabs from '../components/WeatherTabs';
import Background from '../assets/Background.jpg';
import useWeatherData from '../hooks/useWeatherData';
import { formatDate, handleDegreeConvert } from '../functions';
import WeatherIcon from '../components/WeatherIcon';

const useStyles = makeStyles(() => ({
  root: {
    background: `url(${Background}) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 80px',
    '@media (max-width:600px)': {
      padding: '20px',
    },
  },
}));

/**
 * Home component displays weather information.
 * @returns {JSX.Element} Home component.
 */
function Home() {
  // Custom hook to fetch weather data
  const { weatherData, loading } = useWeatherData();
  const classes = useStyles();
  const [degreeSign, setDegreeSign] = useState(0);

  // Loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if data fetching fails
  if (!weatherData) {
    return <div>Error fetching weather data</div>;
  }

  // Main component structure
  return (
    <Grid className={classes.root} container spacing={2}>
      {/* Header section */}
      <Grid container item alignItems='center'>
        <Grid item xs={12} md={3}>
          <Typography
            variant='h1'
            sx={{
              fontWeight: 700,
              fontSize: { xs: 24, md: 36 },
              textAlign: { xs: 'center', md: 'left' },
            }}>
            INSTAWEATHER
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={9}
          alignItems='center'
          sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}
          mt={{ xs: 2, md: 0 }}>
          {/* DegreeTabs component for temperature unit selection */}
          <DegreeTabs setDegreeSign={setDegreeSign} degreeSign={degreeSign} />
        </Grid>
      </Grid>

      {/* Main weather information section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 36, md: 64 },
            lineHeight: { xs: '42px', md: '75px' },
          }}>
          {weatherData.address}
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 14, md: 20 },
            lineHeight: { xs: '16.5px', md: '23.5px' },
            mb: 2,
          }}>
          {/* Format and display the date */}
          {formatDate(weatherData.days[0].datetime)}
        </Typography>
        {/* Display weather icon based on the weather condition */}
        {WeatherIcon[weatherData.days[0].icon]}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 18, md: 30 },
            lineHeight: { xs: '21px', md: '35px' },
            mt: 2,
          }}>
          {weatherData.days[0].conditions}
        </Typography>
      </Grid>

      {/* Temperature and description section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: { xs: 'center', md: 'right' } }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 48, md: 144 },
            lineHeight: { xs: '56px', md: '169px' },
          }}>
          {/* Display current temperature */}
          {Math.floor(
            handleDegreeConvert(degreeSign, weatherData.days[0].temp)
          )}
          &deg;
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: 18, md: 48 },
            lineHeight: { xs: '30px', md: '56px' },
          }}>
          {/* Display temperature range */}
          {`${Math.floor(
            handleDegreeConvert(degreeSign, weatherData.days[0].tempmax)
          )}° / ${Math.floor(
            handleDegreeConvert(degreeSign, weatherData.days[0].tempmin)
          )}°`}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: 14, md: 24 },
            lineHeight: { xs: '20px', md: '56px' },
          }}>
          {/* Display weather description */}
          {weatherData.days[0].description}
        </Typography>
      </Grid>

      {/* WeatherTabs component for hourly weather details */}
      <Grid item xs={12} md={12} sx={{ textAlign: 'left' }}>
        <WeatherTabs weather={weatherData} degreeSign={degreeSign} />
      </Grid>
    </Grid>
  );
}

export default Home;
