export async function logger(ctx, bot) {
    let user = {
        from: ctx.botInfo.first_name,
        first_name: ctx.message.from.first_name || " ",
        last_name: ctx.message.from.last_name || " ",
        username: ctx.message.from.username || "--",
        id: ctx.message.from.id || "--",
        date: ctx.message.date ? new Date(ctx.message.date * 1000).toLocaleString("fa-IR") : " ",
        text: ctx.message.text || "--",
    }

    const text = `
From: ${user.from}
- Name: ${user.first_name} ${user.last_name}
- Username: @${user.username}
- ID: ${user.id}
- Date: ${user.date}

Text: ${user.text}
    `

    try {
        await bot.telegram.sendMessage(-1002427754977, text)
    } catch (error) {
        console.log(error);
        await ctx.sendMessage('Unknown error occurred');
    }
}