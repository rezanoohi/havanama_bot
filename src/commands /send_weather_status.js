import {getWeatherData} from "../services/get_weather_data.js";
import {weatherID} from "../utils/weather_gif_id.js";
import {weatherMessage} from "../../config.js";

export async function sendWeatherStatus (city, ctx) {


    try {

        await ctx.sendChatAction('typing');
        const loadingMessage = await ctx.sendMessage(`درحال دریافت آب و هوای ${city} ...`)

        const weatherData = await getWeatherData(city);

        await ctx.sendChatAction('typing');
        await ctx.deleteMessage(loadingMessage.message_id);

        await ctx.sendChatAction('typing');
        await ctx.replyWithAnimation(weatherID(weatherData.statusID), {
            caption: weatherMessage(weatherData),
            parse_mode: "Markdown",

            reply_markup: {
                inline_keyboard: [
                    [{
                        text: weatherData.name,
                        url: `https://www.google.com/maps?q=${weatherData.latitude},${weatherData.longitude}&z=8`
                    }]
                ]
            },

        })

    } catch (error) {
        if (error.response.status === 404) {
            await ctx.sendChatAction('typing');
            ctx.reply(`❌ شهر ${city} یافت نشد! لطفاً نام شهر را به‌درستی وارد کنید.`);
        } else {
            console.log(error)
            await ctx.sendChatAction('typing');
            ctx.reply("⚠️ خطایی رخ داده است. لطفاً بعداً دوباره امتحان کنید.");
        }
    }

}