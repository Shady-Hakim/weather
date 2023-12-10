import React from 'react';
import { Tabs, Tab } from '@mui/material';

function DegreeTabs({ setDegreeSign, degreeSign }) {
  const handleChange = (event, newValue) => {
    setDegreeSign(newValue);
  };
  return (
    <Tabs
      value={degreeSign}
      onChange={handleChange}
      indicatorColor='none'
      scrollButtons='auto'
      sx={{
        '.Mui-selected': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          borderLeft: '2px solid white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          },
          fontWeight: 'bold',
        },
        '.MuiTab-root': {
          fontWeight: 600,
          fontSize: '24px',
          color: '#fff',
        },
      }}>
      <Tab label='C' />
      <Tab label='F' />
    </Tabs>
  );
}

export default DegreeTabs;
