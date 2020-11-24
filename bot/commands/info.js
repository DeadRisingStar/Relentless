module.exports = {
  func: async message => {
    await message.channel.createMessage({
      embed: {
        title: 'Configuration dashboard WIP',
        description: `Hey, I'm ${global.bot.user.username}! My **only** is to log and display information quickly for admins to see the bigger picture with their server.`,
        url: 'https://theguildedmug.com',
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
            value: `${global.bot.user.username} is written in JavaScript utilizing the Node.js runtime. It uses the [eris](https://github.com/abalabahaha/eris) library to interact with the Discord API. PostgreSQL and Redis are used.
          },
          {
            name: 'The Author',
            value: 'Relentless is developed and maintained by [DeadRisingStar#0011](https://theguildedmug.com). You can contact him via discord or the website.'
          },
          {
            name: 'Shard Info',
            value: `Shard ID: ${message.channel.guild.shard.id}\nWebsocket latency: ${message.channel.guild.shard.latency}\nStatus: ${message.channel.guild.shard.status}`
          },
          {
            name: 'Privacy Policy',
            value: 'You can view the [Privacy Policy](https://privacy.theguildmug.com). Similarly, if you want updates on when it changes, I would check the website regularly.'
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
