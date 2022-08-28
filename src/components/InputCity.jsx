import React, {useState} from "react";

export function InputCity({onCurrentCityChange}) {
    const [currentCity, setCurrentCity] = useState('');

    function onSubmitValue(e) {
        e.preventDefault();

        if (currentCity === '') return;

        onCurrentCityChange(currentCity);

        setCurrentCity('')
    }

    return (
        <form className="input" onSubmit={onSubmitValue}>
            <input type="text" placeholder="Enter the name of the city" className="field" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} />
            <input type="submit" className="btn" value="🔍" />
        </form>
    )
}