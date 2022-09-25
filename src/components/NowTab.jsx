import React from "react";
import cloud from "../icons/cloud.png"
import {useDispatch, useSelector} from "react-redux";
import {listCities} from "../redux/actions.js";
import {TEMPLATE_CITY} from "../helpers/helpers.js";

export function NowTab() {
    const {cityName, temperature, iconWeather} = useSelector(state => state.currentCity);
    const listFavCities = useSelector(state => state.listOfCities);
    const dispatch = useDispatch();

    function addFavouriteCity() {
        if (cityName === TEMPLATE_CITY) return;
        if (listFavCities.some(task => cityName === task) === true) {
            alert('Этот город уже в избранном!');
        } else {
            dispatch(listCities([...listFavCities, cityName]));        }
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
            <p className="current-city--bottom">{cityName}</p>
            <span className="hearth" onClick={addFavouriteCity}></span>
        </div>
    )
}