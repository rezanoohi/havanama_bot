import {Telegraf} from "telegraf";
import 'dotenv/config';

import {start} from "./src/commands /start.js";
import {getWeather} from "./src/get_weather_by_text.js";
import {about} from "./src/about.js";
import {weather} from "./src/commands /weather.js";
import {help} from "./src/commands /help.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

start(bot);

help(bot)

about(bot);

weather(bot)

getWeather(bot);


await bot.launch();
