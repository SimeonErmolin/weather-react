import {createSlice} from "@reduxjs/toolkit";
import {collectionMounths, formatTime, getTime, TEMPLATE_CITY} from "../helpers/helpers.js";
import {getCityData, getForecastData} from "../helpers/network.js";

const initialState = {
    cityName: TEMPLATE_CITY,
    temperature: '0',
    iconWeather: '',
    feelsTemp: '0',
    weather: 'undefined',
    sunrise: '00:00',
    sunset: '00:00',
    listForecasts: [],
    listCities: [],
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeListCities(state, action) {
            state.listCities = action.payload
        }
    },
    extraReducers: {
        [getCityData.fulfilled]: function (state, action) {
            state.cityName = action.payload.name
            state.temperature = Math.round(action.payload.main.temp)
            state.iconWeather = `https://openweathermap.org/img/wn/${action.payload.weather[0].icon}@2x.png`
            state.feelsTemp = Math.round(action.payload.main.feels_like)
            state.weather = action.payload.weather[0].main
            state.sunrise = getTime(action.payload.sys.sunrise)
            state.sunset = getTime(action.payload.sys.sunset)
        },
        [getForecastData.fulfilled]: function (state, action) {
            const dateList = [];
            action.payload.list.forEach((item) => {
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
            state.listForecasts = dateList
        }
    }
})

export const {changeListCities} = weatherSlice.actions
export default weatherSlice.reducer