import React from "react";

export function Switches({onChangeActiveTab, activeTab}) {
    function changeTab(tab) {
        onChangeActiveTab(tab);
    }

    return (
        <div className="switch">
            <button className={activeTab === 'now' ? 'toggle active' : 'toggle'} onClick={() => changeTab('now')}>Now</button>
            <button className={activeTab === 'details' ? 'toggle active' : 'toggle'} onClick={() => changeTab('details')}>Details</button>
            <button className={activeTab === 'forecast' ? 'toggle active' : 'toggle'} onClick={() => changeTab('forecast')}>Forecast</button>
        </div>
    )
}