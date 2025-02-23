import {Telegraf} from "telegraf";
import 'dotenv/config';

import {startCommand} from "./src/commands /start_command.js";
import {getWeather} from "./src/commands /get_weather.js";
import {about} from "./src/commands /about.js";
import {weather_command} from "./src/commands /weather_command.js";
import {helpCommand} from "./src/commands /help_command.js";
import {helpMessage} from "./config.js";
import {sendWeatherStatus} from "./src/commands /send_weather_status.js";
import {message} from "telegraf/filters";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async ctx => {
    await startCommand(ctx, bot)
});

bot.help(async ctx => {
    await helpCommand(ctx)
})


bot.hears('About', async ctx => {
    await about(ctx);
});

bot.command('weather', async ctx => {
    await weather_command(ctx)
})

bot.on(message('text'), async ctx => {
    await getWeather(ctx);
});


await bot.launch();
