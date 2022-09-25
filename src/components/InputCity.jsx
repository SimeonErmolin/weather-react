import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getCityData} from "../redux/actions.js";

export function InputCity() {
    const dispatch = useDispatch();
    const [currentCity, setCurrentCity] = useState('');

    function onSubmitValue(e) {
        e.preventDefault();

        if (currentCity === '') return;

        dispatch(getCityData(currentCity))

        setCurrentCity('')
    }

    return (
        <form className="input" onSubmit={onSubmitValue}>
            <input type="text" placeholder="Enter the name of the city" className="field" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} />
            <input type="submit" className="btn" value="🔍" />
        </form>
    )
}