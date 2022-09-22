import React from "react";
import {TemplateMiniForecast} from "./TemplateMiniForecast";
import {useSelector} from "react-redux";

export function ForecastTab() {
    const {cityName} = useSelector(state => state.currentCity)
    const listForecasts = useSelector(state => state.listOfForecasts)

    const forecastList = listForecasts.map((item, index) => {
        return <TemplateMiniForecast key={index} {...item} />
    })

    return (
        <div className="info forecast">
            <p className="current-city--top">{cityName}</p>
            <div className="forecast-wrapper">
                {forecastList}
            </div>
        </div>
    )
}