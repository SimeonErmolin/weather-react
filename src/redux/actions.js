export const typesOfActions = {
    CHANGE_CITY_DATA: 'CHANGE_CITY_DATA',
    CHANGE_LIST_FORECASTS: 'CHANGE_LIST_FORECASTS',
    CHANGE_LIST_CITIES: 'CHANGE_LIST_CITIES',
}

export function currentCityData({cityName, temperature, iconWeather, feelsTemp, weather, sunrise, sunset}) {
    return {
        type: typesOfActions.CHANGE_CITY_DATA,
        cityName,
        temperature,
        iconWeather,
        feelsTemp,
        weather,
        sunrise,
        sunset,
    }
}

export function listForecasts(listForecasts) {
    return {
        type: typesOfActions.CHANGE_LIST_FORECASTS,
        listForecasts
    }
}

export function listCities(listCities) {
    return {
        type: typesOfActions.CHANGE_LIST_CITIES,
        listCities
    }
}