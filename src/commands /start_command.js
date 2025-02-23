import {startMessage} from "../../config.js";

export async function startCommand(ctx) {
    await ctx.sendChatAction('typing')

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
}