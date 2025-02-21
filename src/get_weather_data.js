import axios from "axios";
import 'dotenv/config'

export async function getWeatherData(city) {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric&lang=fa`);

    const weather = response.data;


    return {
        longitude: weather.coord?.lon ?? 0,
        latitude: weather.coord?.lat ?? 0,
        statusID: weather.weather?.[0]?.id ?? 0,
        main: weather.weather?.[0]?.main ?? "نامشخص",
        description: weather.weather?.[0]?.description ?? "بدون توضیح",
        temp: weather.main?.temp ?? 0,
        tempMin: weather.main?.temp_min ?? 0,
        tempMax: weather.main?.temp_max ?? 0,
        humidity: weather.main?.humidity ?? 0,
        windSpeed: weather.wind?.speed ?? 0,
        sunrise: weather.sys?.sunrise ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString("fa-IR") : "نامشخص",
        sunset: weather.sys?.sunset ? new Date(weather.sys.sunset * 1000).toLocaleTimeString("fa-IR") : "نامشخص",
        timezone: weather.timezone ?? 0,
        name: weather.name ?? "نامشخص",
    }


}
