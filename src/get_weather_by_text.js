import {message} from "telegraf/filters";
import {getWeatherByCity} from "./get_weather_by_city.js";


export function getWeather(bot) {
    bot.on(message('text'), async ctx => {

        let city = ctx.message.text;

        await getWeatherByCity(city, ctx, bot);

    });
}