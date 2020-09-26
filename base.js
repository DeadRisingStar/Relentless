require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const BOT_TOKEN = process.env.TOKEN;

bot.login(BOT_TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });