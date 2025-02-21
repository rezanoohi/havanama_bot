import {getWeatherByCity} from "../get_weather_by_city.js";

export function weather(bot) {
    bot.command('weather', async ctx => {

        await bot.telegram.sendChatAction(ctx.chat.id, 'typing')

        let cityArray = ctx.message.text.split(' ');
        if (cityArray.length === 1) {
            ctx.sendMessage(`
            
⚠️ لطفاً نام شهر موردنظر را بعد از دستور **/weather** وارد کنید.

📌 **مثال:** 
\`/weather Tehran\`

ℹ️ برای راهنمایی بیشتر، از دستور **/help** استفاده کنید.
            `,
                {
                    parse_mode: "Markdown",
                }
            )
        } else {
            cityArray.shift();

            const city = cityArray.join(' ');

            await getWeatherByCity(city, ctx, bot);
        }

    })
}