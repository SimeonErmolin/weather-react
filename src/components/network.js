const URL = {
    SERVER_URL: 'https://api.openweathermap.org/data/2.5/weather',
    SERVER_URL_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
    API_KEY: '28a10f79ddcb24a9237ce72a6e79c9a1&units=metric',
}

export async function getForecast(city, forecastFewDays) {
    const url = server_url => `${server_url}?q=${city}&appid=${URL.API_KEY}`;

    if (!forecastFewDays) {
        const response = await fetch(url(URL.SERVER_URL));
        return response.json();
    }   else {
        const responseForecast = await fetch(url(URL.SERVER_URL_FORECAST));
        return responseForecast.json();
    }
}

