import {sendWeatherStatus} from "./send_weather_status.js";

export async function weather_command(ctx) {
    await ctx.sendChatAction('typing');

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

        await sendWeatherStatus(city, ctx);
    }
}