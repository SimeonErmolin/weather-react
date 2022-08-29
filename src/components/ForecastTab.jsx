import React, {useContext, useEffect, useState} from "react";
import {getForecast} from "./network.js";
import {formatTime} from "./helpers.js";
import {TemplateMiniForecast} from "./TemplateMiniForecast";
import {CurrentCityContext} from "./Constext.jsx";

const collectionMounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function ForecastTab({activeTab}) {
    if (activeTab !== 'forecast') return null;

    const currentCity = useContext(CurrentCityContext);
    const [listForecasts, setListForecasts] = useState([]);

    useEffect(() => {
        if (currentCity === 'City not selected') return;
        getForecast(currentCity, true).then(data => {
            const dateList = [];
            data.list.forEach(item => {
                const date = new Date(item.dt_txt);
                const options = {
                    date: `${date.getDate()} ${collectionMounths[date.getMonth()]}`,
                    degrees: Math.round(item.main.temp),
                    feelsDegrees: Math.round(item.main.feels_like),
                    time: formatTime(date, 3),
                    weather: item.weather[0].main,
                    weatherImg: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                }
                dateList.push(options)
            });
            setListForecasts(dateList);
        })
    }, [currentCity]);

    const forecastList = listForecasts.map((item, index) => {
        return <TemplateMiniForecast key={index} date={item.date} degrees={item.degrees} feelsDegrees={item.feelsDegrees} time={item.time} weather={item.weather} weatherImg={item.weatherImg} />
    })

    return (
        <div className="info forecast">
            <p className="current-city--top">{currentCity}</p>
            <div className="forecast-wrapper">
                {forecastList}
            </div>
        </div>
    )
}