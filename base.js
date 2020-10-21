require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    if (config.activity.streaming == true) {
    bot.user.setActivity("with depression :) V4", {url: 'https://www.twitch.tv/deadrisingstar'}, {type: "STREAMING"});
    } else {
        bot.user.setActivity('depression V3', {type: "WATCHING"});
    }
  });
  
  client.on('message', (message) => {
    if (message.content == '/ma') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
        }
     }
  });

  client.on('message', (message) => {
    if (message.content == '/um') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(false)
        }
     }
  });

  