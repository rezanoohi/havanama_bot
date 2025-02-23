import {helpMessage} from "../../config.js";

export async function helpCommand(ctx) {
    ctx.sendChatAction('typing');

    await ctx.reply(helpMessage,
        {
            parse_mode: "Markdown",
        }
    );
}