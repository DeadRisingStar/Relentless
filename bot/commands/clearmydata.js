module.exports = {
  func: async message => {
    await message.channel.createMessage({
      embed: {
        title: 'Action needed:',
        description: 'To clear your data. private message `DeadRisingStar#0011`.',
        color: 16711680,
        timestamp: new Date(),
        footer: {
          icon_url: global.bot.user.avatarURL,
          text: `${global.bot.user.username}#${global.bot.user.discriminator}`
        },
        author: {
          name: `${message.author.username}#${message.author.discriminator}`,
          icon_url: message.author.avatarURL
        },
        fields: []
      }
    })
  },
  name: 'clearmydata',
  description: 'Provides the information needed to clear your data from the bot.',
  type: 'any',
  category: 'Utility'
}
