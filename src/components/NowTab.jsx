import React, {useContext, useEffect, useState} from "react";
import cloud from "../icons/cloud.png"
import {getForecast} from "./network.js";
import {CurrentCityContext} from "./Constext.jsx";
import {TEMPLATE_CITY} from "./helpers.js";

export function NowTab({onAddFavouriteCity}) {
    const currentCity = useContext(CurrentCityContext);
    const [temperature, setTemperature] = useState('0');
    const [iconWeather, setIconWeather] = useState();

    useEffect(() => {
        if (currentCity === TEMPLATE_CITY) return;
        getForecast(currentCity).then(data => {
            setTemperature(Math.round(data.main.temp));
            setIconWeather(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        })
    }, [currentCity])

    function addFavouriteCity() {
        onAddFavouriteCity(currentCity)
    }

    return (
        <div className="info now">
            <p className="temperature">
                <span className="temperature--number">{temperature}</span>
                <span className="circle"></span>
            </p>
            <span className="cloud">
                <img src={iconWeather ? iconWeather : cloud} alt="icon" />
            </span>
            <p className="current-city--bottom">{currentCity}</p>
            <span className="hearth" onClick={addFavouriteCity}></span>
        </div>
    )
}