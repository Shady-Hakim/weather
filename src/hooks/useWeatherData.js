import { useEffect, useState } from 'react';

function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'VW556SH4AANUWZZJ8HLMK3PZR';
    const unitGroup = 'metric';
    const include = 'hours';

    const fetchWeatherData = async (city) => {
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&include=${include}%2Ccurrent&key=${apiKey}&contentType=json`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };
    const fetchCity = async (latitude, longitude) => {
      const nominatimApiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

      try {
        const response = await fetch(nominatimApiUrl);
        const data = await response.json();
        if (data?.address.city) {
          fetchWeatherData(data.address.city);
        } else {
          console.error(
            'City not found in the reverse geocoding response:',
            data
          );
        }
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log({ position });
            const { latitude, longitude } = position.coords;
            fetchCity(latitude, longitude);
          },
          (error) => {
            console.error('Error getting user location:', error);
            setLoading(false);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  return { weatherData, loading };
}

export default useWeatherData;
