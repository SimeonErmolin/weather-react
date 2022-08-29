import React, {useContext, useEffect, useState} from "react";
import {getForecast} from "./network.js";
import {getTime} from "./helpers.js";
import {CurrentActiveTab, CurrentCityContext} from "./Constext.jsx";

export function DetailsTab() {
    const activeTab = useContext(CurrentActiveTab);

    if (activeTab !== 'details') return null;

    const currentCity = useContext(CurrentCityContext);
    const [temperature, setTemperature] = useState('0');
    const [feelsTemp, setFeelsTemp] = useState('0');
    const [weather, setWeather] = useState('undefined');
    const [sunrise, setSunrise] = useState('00:00');
    const [sunset, setSunset] = useState('00:00');


    useEffect(() => {
        if (currentCity === 'City not selected') return;
        getForecast(currentCity).then(data => {
            setTemperature(Math.round(data.main.temp));
            setFeelsTemp(Math.round(data.main.feels_like));
            setWeather(data.weather[0].main);
            setSunrise(getTime(data.sys.sunrise));
            setSunset(getTime(data.sys.sunset));
        })
    }, [currentCity])

    return (
        <div className="info details">
            <p className="current-city--top">{currentCity}</p>
            <div className="info-weather">
                <p>
                    Temperature: <b className="temperature-info">{temperature}</b>
                    <span className="circle-small"></span>
                </p>
                <p>
                    Feels like: <b className="feels-info">{feelsTemp}</b>
                    <span className="circle-small"></span>
                </p>
                <p>
                    Weather: <b className="weather-info">{weather}</b>
                </p>
                <p>
                    Sunrise: <b className="sunrise-info">{sunrise}</b>
                </p>
                <p>
                    Sunset: <b className="sunset-info">{sunset}</b>
                </p>
            </div>
        </div>
    )
}