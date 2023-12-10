import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import WeatherSingleTab from './WeatherSingleTab';

function WeatherTabs({ weather }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = ({ children, value, index, ...props }) => {
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
        <WeatherSingleTab degrees={weather.days[0].hours} hours />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WeatherSingleTab degrees={weather.days} />
      </TabPanel>
    </Box>
  );
}

export default WeatherTabs;
