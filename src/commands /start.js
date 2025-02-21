import {startMessage} from "../../config.js";

export function start(bot) {
     bot.start(async ctx => {

         await bot.telegram.sendChatAction(ctx.chat.id, 'typing')

        await ctx.reply(startMessage, {
            parse_mode: "Markdown",
            reply_markup: {
                resize_keyboard: true,
                keyboard: [
                    [
                        {text: 'About'},
                    ],
                ]
            }
        });

    });
}