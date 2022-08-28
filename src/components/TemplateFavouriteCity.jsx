import React from "react";

export function TemplateFavouriteCity({city, number, onDeleteCity, onMakeCurrentCity}) {
    function deleteCity() {
        onDeleteCity(number);
    }

    function makeCurrentCity() {
        onMakeCurrentCity(city)
    }

    return (
        <span className="favourite-city">
            <p className="city--name" onClick={makeCurrentCity}>{city}</p>
            <button className="btnDelete" onClick={deleteCity}>×</button>
        </span>
    )
}