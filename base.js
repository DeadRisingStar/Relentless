require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "with depression",  //The message shown
            type: "STREAMING", //PLAYING: WATCHING: LISTENING: STREAMING:
            url: "https://www.twitch.tv/DeadRisingStar"
        }
    });
  });

  