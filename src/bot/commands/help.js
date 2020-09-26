module.exports = {
  func: async message => {
    let DMC
    try {
      DMC = await message.author.getDMChannel()
    } catch (e) {
      return message.channel.createMessage(`<@${message.author.id}>, you're not capable of receiving a DM from me.`).catch(() => {})
    }
    const embed = {
      description: 'Below, you can see my commands listed by name and description. If it has arguments you can pass, an example will be included.',
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
      fields: []
    }
    Object.values(global.bot.commands).forEach(command => {
      if (!command.hidden) {
        embed.fields.push({
          name: command.name,
          value: command.description
        })
      }
    })
    embed.fields.push({
      name: '',
      value: ''
    },
    {
      name: 'Support',
      value: 'If something is going horribly wrong, go ahead to the [Support Website](https://support.bot.theguildedmug.com)'
    },
    {
      name: 'Dashboard',
      value: 'You can customize the bot to your liking once the dashboard is fully completed.'
    },
    {
      name: 'Privacy Policy',
      value: 'You can view the privacy policy [here](https://policy.bot.theguildedmug.com/). Similarly, if you want updates on when it changes, check the website.'
    })
    await DMC.createMessage({
      embed: embed
    })
    await message.addReaction('📜')
  },
  name: 'help',
  description: 'DM you with this help message!',
  type: 'any',
  category: 'General'
}
