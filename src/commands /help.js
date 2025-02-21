import {helpMessage} from "../../config.js";

export function help(bot) {
    bot.help( async ctx => {

        await bot.telegram.sendChatAction(ctx.chat.id, 'typing')

        await ctx.sendMessage(helpMessage,
            {parse_mode: "Markdown"});

    })
}