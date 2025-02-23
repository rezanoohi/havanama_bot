import {sendWeatherStatus} from "./send_weather_status.js";


export async function getWeather(ctx) {

    let city = ctx.message.text;

    await sendWeatherStatus(city, ctx,);
}