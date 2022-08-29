import React, {useState} from "react";
import {InputCity} from "./components/InputCity";
import {NowTab} from "./components/NowTab.jsx"
import {DetailsTab} from "./components/DetailsTab.jsx";
import {ForecastTab} from "./components/ForecastTab";
import {Switches} from "./components/Switches";
import {AddedLocations} from "./components/AddedLocations";
import {getForecast} from "./components/network.js";
import {CurrentCityContext} from "./components/Constext";

export function Weather() {
    const [userCity, setUserCity] = useState('City not selected');
    const [activeTab, setActiveTab] = useState('now');
    const [listFavouriteCities, setListFavouriteCities] = useState([]);

    function currentForecastChange(e) {
        getForecast(e).then(promise => {
            setUserCity(promise.name);
        })
    }

    function addFavouriteCity(e) {
        if (e === 'City not selected') return;
        if (listFavouriteCities.some(task => e === task) === true) {
            alert('Этот город уже в избранном!');
        } else {
            setListFavouriteCities([...listFavouriteCities, e]);
        }
    }

    function makeCurrentCity(city) {
        currentForecastChange(city);
    }

    function deleteCityFromFavourites(number) {
        setListFavouriteCities([...listFavouriteCities.slice(0, number), ...listFavouriteCities.slice(number + 1)]);
    }

    return (
        <div className="tabs">
            <div className="tab">
                <InputCity onCurrentCityChange={currentForecastChange} />
                <div className="pages">
                    <CurrentCityContext.Provider value={userCity}>
                        <NowTab activeTab={activeTab} onAddFavouriteCity={addFavouriteCity} />
                        <DetailsTab activeTab={activeTab} />
                        <ForecastTab activeTab={activeTab} />
                        <Switches onChangeActiveTab={setActiveTab} activeTab={activeTab}/>
                        <AddedLocations listFavouriteCities={listFavouriteCities} onDeleteCity={deleteCityFromFavourites} onMakeCurrentCity={makeCurrentCity} />
                    </CurrentCityContext.Provider>
                </div>
            </div>
        </div>
    )
}