require('dotenv').config();

const { Bot, GrammyError, HttpError } = require('grammy');

const bot = new Bot (process.env.BOT_API_KEY);

// обработчик событий
bot.catch((err) => { const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`); const e = err.error;
    if (e instanceof GrammyError) {
     console.error('Error in request:', e.description);
    } else if (e instanceof HttpError) { console.error('Could not contact Telegram:', e);
    } else {
    console.error('Unknown error:', e);
    }
    });

bot.start();

bot.hears(/нет/, async (ctx) => {
    await ctx.reply(
     "пи.. что?? на нет и суда нет!",
    );
   });

bot.hears(/да/, async (ctx) => {
await ctx.reply(
"пи.. что?? дора-дура ответ!",
);
});

bot.api.setMyCommands([
    { command: 'start', description: 'Запуск бота' },
    { command: 'say_hello', description: 'Получить приветствие' },
    { command: 'hello', description: 'Получить приветствие' },
    { command: 'give_sex', description: 'Получить пизды' },
    ]);

bot.command('start', async (ctx) => {
 await ctx.reply(
  'Привет! Я - Бот 🤖',
 );
});

bot.command('give_sex', async (ctx) => {
    await ctx.reply(
     `${ctx.from.first_name}, ты что охуел?`,
    );
   });

bot.command('help', async (ctx) => {
    await ctx.reply(
     'не',
    );
   });
   
bot.on("message", async (ctx) => {
 await ctx.reply('Не выдумывай');
});




