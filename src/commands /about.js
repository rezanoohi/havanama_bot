export async function about(ctx) {
    await ctx.reply(`*API:* [Open Weather Map](https://openweathermap.org/api)\n*developer :* [rezanoohi](https://t.me/rezanoohi) `, {
        parse_mode: "Markdown",
        disable_web_page_preview: true
    });
}
