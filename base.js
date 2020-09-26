require('dotenv').config();
const { config } = require('bluebird');
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    if (config.activity.streaming == true) {
    bot.user.setActivity("with depression", {url: 'https://twitch.tv/deadrisingstar'});
    } else {
        bot.user.setActivity('depression', {type: "WATCHING" });
    }
  });

  