import { useEffect, useState } from 'react';

/**
 * useWeatherData is a custom React hook for fetching weather data based on the user's location.
 * It uses the Geolocation API to obtain the user's latitude and longitude,
 * then performs reverse geocoding to determine the city. Finally, it fetches
 * the weather data for the identified city using the Visual Crossing Weather API.
 *
 * @returns {Object} - An object containing the weather data and loading state.
 *                    - weatherData: The fetched weather data.
 *                    - loading: A boolean indicating whether the data is still being loaded.
 */
function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'VW556SH4AANUWZZJ8HLMK3PZR';
    const unitGroup = 'metric';
    const include = 'hours';

    /**
     * Fetches weather data for a given city using the Visual Crossing Weather API.
     *
     * @param {string} city - The name of the city for which to fetch weather data.
     */
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

    /**
     * Fetches the city name using reverse geocoding based on latitude and longitude.
     *
     * @param {number} latitude - The latitude coordinate.
     * @param {number} longitude - The longitude coordinate.
     */
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

    /**
     * Obtains the user's location using the Geolocation API and initiates the data fetching process.
     */
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
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
