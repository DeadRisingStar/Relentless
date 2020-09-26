require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

  bot.user.setPresence({ game: { name: 'with depression', type: "streaming", url: "https://www.twitch.tv/DeadRisingStar"}}); 