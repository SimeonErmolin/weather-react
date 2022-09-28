import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeListCities} from "../redux/redux.js";
import {getCityData, getForecastData} from "../helpers/network.js";

export function TemplateFavouriteCity({city, number}) {
    const listCities = useSelector(state => state.weatherApp.listCities);
    const dispatch = useDispatch();

    function deleteCity() {
        dispatch((changeListCities([...listCities.slice(0, number), ...listCities.slice(number + 1)])))
    }

    return (
        <span className="favourite-city">
            <p className="city--name" onClick={() => {
                dispatch(getCityData(city))
                dispatch(getForecastData(city))
            }}>{city}</p>
            <button className="btnDelete" onClick={deleteCity}>×</button>
        </span>
    )
}