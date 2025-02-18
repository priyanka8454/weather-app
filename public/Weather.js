import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleCityName = (event) => {
        setCity(event.target.value);
    };

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abe30a6c39696522a1ee3cf00c0a9453`);     /*API key*/
            setWeather(response.data);
        } catch (error) {
            console.log("Error fetching weather data", error);
        }
    };

    const handleClick = () => {
        fetchWeather();
    };

    return (
        <div className='weather-container'>
            <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityName} />
            <button onClick={handleClick}>Get Weather</button>
            {weather && (
                <div className='weather-info'>
                    <h3>{weather.name}</h3>
                    <p>Temp is {weather.main.temp}</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

