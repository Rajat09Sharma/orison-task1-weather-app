import React from 'react'
import { getTimeAndDate } from '../util'

export default function WeatherDetail({ weatherData }) {

    const { time, day } = getTimeAndDate(weatherData.dt);

    let bgColor;
    const weatherCondition = weatherData.weather[0].main;
    if (weatherCondition.toLowerCase() !== "clear") {
        bgColor = "bg-gry";
    }

    return (
        <div className={`weather-container row ${bgColor}`}>
            <div className="weather-detail col-lg-6">
                <h2 className='mt-2'>{time}</h2>
                <p className='mt-5'>{day} {weatherData.name}, {weatherData.sys.country}</p>
                <h3>{weatherData.weather[0].main}</h3>
                <h1 className='mt-4'>{Math.round(weatherData.main.temp)}&deg;</h1>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].main}
                    className='weather-image' />
            </div>
        </div>
    )
}
