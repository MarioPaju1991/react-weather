import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
 const [weather, setWeather] = useState({})
 const [values, setValues] = useState([])
 const [place, setPlace] = useState('Tokyo')
 const [location, setLocation] = useState('')



 // Fetching weather data

  const fetchWeather = async () => {

    const options = {

      method: 'GET',

      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',

      params: {
        aggregateHours: '24',
        location: place,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: '0'
      },

      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_WEATHER_API_KEY,
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
      }
    }

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {

      console.error(error);

      // If API throws an error

      alert('This place does not exist')

    }
  }
}
