import {collectionMounths, formatTime, getTime} from "../helpers/helpers.js";
import {getForecast} from "../helpers/network.js";

export const typesOfActions = {
    CHANGE_CITY_DATA: 'CHANGE_CITY_DATA',
    CHANGE_LIST_FORECASTS: 'CHANGE_LIST_FORECASTS',
    CHANGE_LIST_CITIES: 'CHANGE_LIST_CITIES',
}

function currentCityData(data) {
    return {
        type: typesOfActions.CHANGE_CITY_DATA,
        cityName: data.name,
        temperature: Math.round(data.main.temp),
        iconWeather: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        feelsTemp: Math.round(data.main.feels_like),
        weather: data.weather[0].main,
        sunrise: getTime(data.sys.sunrise),
        sunset: getTime(data.sys.sunset),
    }
}

function listForecasts(listForecasts) {
    return {
        type: typesOfActions.CHANGE_LIST_FORECASTS,
        listForecasts
    }
}

export function getCityData(cityName) {
    return function (dispatch) {
        getForecast(cityName).then(data => dispatch(currentCityData(data)))
        getForecast(cityName, true).then(data => {
            const dateList = [];
            data.list.forEach(item => {
                const date = new Date(item.dt_txt);
                const options = {
                    date: `${date.getDate()} ${collectionMounths[date.getMonth()]}`,
                    degrees: Math.round(item.main.temp),
                    feelsDegrees: Math.round(item.main.feels_like),
                    time: formatTime(date, 3),
                    weather: item.weather[0].main,
                    weatherImg: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                }
                dateList.push(options)
            })
            dispatch(listForecasts(dateList))
        })
    }
}

export function listCities(listCities) {
    return {
        type: typesOfActions.CHANGE_LIST_CITIES,
        listCities
    }
}