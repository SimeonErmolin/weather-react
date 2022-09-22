import {getForecast} from "./network.js";
import {store} from "./reducers.js";
import {currentCityData, listForecasts} from "./actions.js";
import {formatTime, getTime} from "./helpers.js";

const collectionMounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function setCityData(cityName) {
    getForecast(cityName).then(promise => {
        const data = {
            cityName: promise.name,
            temperature: Math.round(promise.main.temp),
            iconWeather: `https://openweathermap.org/img/wn/${promise.weather[0].icon}@2x.png`,
            feelsTemp: Math.round(promise.main.feels_like),
            weather: promise.weather[0].main,
            sunrise: getTime(promise.sys.sunrise),
            sunset: getTime(promise.sys.sunset),
        }
        store.dispatch(currentCityData(data));
    })
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
        });
        store.dispatch(listForecasts(dateList))
    })
}