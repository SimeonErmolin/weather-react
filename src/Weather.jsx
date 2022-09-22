import React, {useState} from "react";
import {InputCity} from "./components/InputCity";
import {NowTab} from "./components/NowTab.jsx"
import {DetailsTab} from "./components/DetailsTab.jsx";
import {ForecastTab} from "./components/ForecastTab";
import {Switches} from "./components/Switches";
import {AddedLocations} from "./components/AddedLocations";
import {TABS} from "./components/helpers.js"
import {setCityData} from "./components/setCityData.js";

export function Weather() {
    const [activeTab, setActiveTab] = useState('now');

    function currentForecastChange(e) {
        setCityData(e)
    }

    return (
        <div className="tabs">
            <div className="tab">
                <InputCity onCurrentCityChange={currentForecastChange} />
                <div className="pages">
                        {activeTab === TABS.NOW ? <NowTab /> : null}
                        {activeTab === TABS.DETAILS ? <DetailsTab /> : null}
                        {activeTab === TABS.FORECAST ? <ForecastTab /> : null}
                        <Switches
                            activeTab={activeTab}
                            onChangeActiveTab={setActiveTab} />
                        <AddedLocations />
                </div>
            </div>
        </div>
    )
}