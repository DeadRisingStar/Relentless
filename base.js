require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const TOKEN = process.env.TOKEN;


bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    if (config.activity.streaming == true) {
    bot.user.setActivity("with depression :) V4", {url: 'https://www.twitch.tv/deadrisingstar'}, {type: "STREAMING"});
    }
  });
  









  bot.login(TOKEN);
  