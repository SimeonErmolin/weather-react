import {combineReducers, createStore} from 'redux';
import {typesOfActions} from "./actions.js";
import {TEMPLATE_CITY} from "./helpers.js";

const defaultState = {
    cityName: TEMPLATE_CITY,
    temperature: '0',
    iconWeather: '',
    feelsTemp: '0',
    weather: 'undefined',
    sunrise: '00:00',
    sunset: '00:00',
}

function currentCity(state = defaultState, action) {
    switch (action.type) {
        case typesOfActions.CHANGE_CITY_DATA:
            return {
                cityName: action.cityName,
                temperature: action.temperature,
                iconWeather: action.iconWeather,
                feelsTemp: action.feelsTemp,
                weather: action.weather,
                sunrise: action.sunrise,
                sunset: action.sunset,
            }
        default:
            return state
    }
}

function listOfForecasts(state = [], action) {
    switch (action.type) {
        case typesOfActions.CHANGE_LIST_FORECASTS:
            return action.listForecasts
        default:
            return state
    }
}

function listOfCities(state = [], action) {
    switch (action.type) {
        case typesOfActions.CHANGE_LIST_CITIES:
            return action.listCities
        default:
            return state
    }
}

export const weatherApp = combineReducers({
    currentCity,
    listOfForecasts,
    listOfCities,
})

export const store = createStore(weatherApp);
