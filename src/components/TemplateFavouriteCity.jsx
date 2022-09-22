import React from "react";
import {setCityData} from "./setCityData.js";
import {listCities} from "./actions.js";
import {useDispatch, useSelector} from "react-redux";

export function TemplateFavouriteCity({city, number}) {
    const listFavCities = useSelector(state => state.listOfCities);
    const dispatch = useDispatch();

    function deleteCity() {
        dispatch((listCities([...listFavCities.slice(0, number), ...listFavCities.slice(number + 1)])))
    }

    return (
        <span className="favourite-city">
            <p className="city--name" onClick={() => setCityData(city)}>{city}</p>
            <button className="btnDelete" onClick={deleteCity}>×</button>
        </span>
    )
}