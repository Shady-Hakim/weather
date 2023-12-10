import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import WeatherSingleTab from './WeatherSingleTab';

/**
 * WeatherTabs displays a tabbed view for hourly and daily weather information.
 * It includes tabs for switching between hourly and daily views, and renders
 * the corresponding weather information grid using WeatherSingleTab component.
 *
 * @param {Object} weather - Weather data containing hourly and daily information.
 * @param {number} degreeSign - Sign for temperature conversion (Celsius/Fahrenheit).
 * @returns {JSX.Element} - React component representing the tabbed weather view.
 */
function WeatherTabs({ weather, degreeSign }) {
  const [value, setValue] = useState(0);

  /**
   * Handles tab change by updating the selected tab value.
   *
   * @param {Object} event - The event object.
   * @param {number} newValue - The new selected tab value.
   */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /**
   * Renders the tab panel content based on the selected tab index.
   *
   * @param {Object} children - The content to be rendered inside the panel.
   * @param {number} value - The selected tab value.
   * @param {number} index - The index of the tab panel.
   * @returns {JSX.Element} - React component representing the tab panel content.
   */
  const TabPanel = ({ children, value, index }) => {
    return (
      <>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </>
    );
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.5)' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          sx={{
            '.MuiTab-root': {
              fontWeight: 700,
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.75)',
              textTransform: 'capitalize',
            },
            '.MuiTab-root.Mui-selected': {
              color: 'white',
            },
          }}>
          <Tab label='Hourly' />
          <Tab label='Daily' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WeatherSingleTab
          degrees={weather.days[0].hours}
          hours
          degreeSign={degreeSign}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WeatherSingleTab degrees={weather.days} degreeSign={degreeSign} />
      </TabPanel>
    </Box>
  );
}

export default WeatherTabs;
