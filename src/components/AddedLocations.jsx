import React from "react";
import {TemplateFavouriteCity} from "./TemplateFavouriteCity";

export function AddedLocations({listFavouriteCities, onDeleteCity, onMakeCurrentCity}) {
    const locationsList = listFavouriteCities.map((item, index) => {
        return <TemplateFavouriteCity key={item.toString()} number={index} city={item} onDeleteCity={DeleteCity} onMakeCurrentCity={makeCurrentCity} />
    })

    function makeCurrentCity(city) {
        onMakeCurrentCity(city)
    }

    function DeleteCity(number) {
        onDeleteCity(number)
    }

    return (
        <div className="locations">
            <p className="title-locations">Added Locations:</p>
            <div className="cities">
                {locationsList}
            </div>
        </div>
    )
}