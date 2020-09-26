module.exports = {
  func: async message => {
    await message.channel.createMessage({
      embed: {
        title: 'Configuration dashboard',
        description: `Hey, I'm ${global.bot.user.username}! My **only** purpose is to, at your command, log everything to your configured channels.`,
        url: 'https://bot.theguildedmug.com/',
        color: 3553599,
        timestamp: new Date(),
        footer: {
          icon_url: global.bot.user.avatarURL,
          text: `${global.bot.user.username}#${global.bot.user.discriminator}`
        },
        thumbnail: {
          url: global.bot.user.avatarURL
        },
        author: {
          name: `${message.author.username}#${message.author.discriminator}`,
          icon_url: message.author.avatarURL
        },
        fields: [
          {
            name: 'Technical Details',
            value: `${global.bot.user.username} is written in JavaScript utilizing the Node.js runtime. It uses the [eris](https://github.com/abalabahaha/eris) library to interact with the Discord API. PostgreSQL and Redis are used.`
          },
          {
            name: 'The Author',
            value: 'Relentless is developed and maintained by [DeadRisingStar#0011](https://google.com).'
          },
          {
            name: 'Bot Info',
            value: 'Click on the configuration dashboard link to learn more.'
          },
          {
            name: 'Shard Info',
            value: `Shard ID: ${message.channel.guild.shard.id}\nWebsocket latency: ${message.channel.guild.shard.latency}\nStatus: ${message.channel.guild.shard.status}`
          },
          {
            name: 'Privacy Policy',
            value: 'You can view the privacy policy [here](https://policy.bot.theguildedmug.com/).'
          }
        ]
      }
    })
  },
  name: 'info',
  description: 'Get information about Relentless and the current shard.',
  type: 'any',
  category: 'Information'
}
