import React from 'react';
import { Tabs, Tab } from '@mui/material';

/**
 * DegreeTabs component provides a temperature unit selection using MUI Tabs.
 * @param {Object} props - Component properties.
 * @param {Function} props.setDegreeSign - Function to update the selected degree sign.
 * @param {number} props.degreeSign - Currently selected degree sign (0 for Celsius, 1 for Fahrenheit).
 * @returns {JSX.Element} DegreeTabs component.
 */
function DegreeTabs({ setDegreeSign, degreeSign }) {
  /**
   * Handle the change in the selected tab and update the degree sign.
   * @param {object} event - The event object.
   * @param {number} newValue - The new selected value (0 for Celsius, 1 for Fahrenheit).
   */
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
      {/* Celsius tab */}
      <Tab label='C' />
      {/* Fahrenheit tab */}
      <Tab label='F' />
    </Tabs>
  );
}

export default DegreeTabs;
