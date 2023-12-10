import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

function DegreeTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
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
