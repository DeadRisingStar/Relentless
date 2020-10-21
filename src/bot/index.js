const Eris = require('eris')
const cluster = require('cluster')
const raven = require('raven')
const Raven = require('raven')

const indexCommands = require('../miscellaneous/commandIndexer')
const listenerIndexer = require('../miscellaneous/listenerIndexer')
const cacheGuildInfo = require('./utils/cacheGuildSettings')
const deleteMessagesOlderThanDays = require('./modules/oldmessageremover').removeMessagesOlderThanDays

require('dotenv').config()
Raven.config(process.env.RAVEN_URI).install()

if (process.env.SENTRY_URI) {
  raven.config(process.env.SENTRY_URI).install()
} else {
  global.logger.warn('No Sentry URI provided. Error logging will be restricted to messages only.')
}


async function init () {
  global.logger.info('Shard init')
 
  global.bot = new Eris(process.env.BOT_TOKEN, {
    firstShardID: cluster.worker.shardStart,
    lastShardID: cluster.worker.shardEnd,
    maxShards: cluster.worker.totalShards,
    disableEvents: { TYPING_START: true },
    restMode: true,
    messageLimit: 0,
    autoreconnect: true,
    getAllUsers: true,
    ratelimiterOffset: 400
  })

  global.bot.on('ratelimit', console.error)

  global.bot.editStatus('dnd', {
    name: 'Bot is booting'
  })

  global.bot.commands = {}
  global.bot.ignoredChannels = []
  global.bot.guildSettingsCache = {}

  indexCommands() // yes, block the thread while we read commands.
  await cacheGuildInfo()
  const [on, once] = listenerIndexer()

  on.forEach(async event => global.bot.on(event.name, await event.handle))
  once.forEach(async event => global.bot.once(event.name, await event.handle))

  require('../miscellaneous/bezerk')

  connect()

  // const oldMessagesDeleted = await deleteMessagesOlderThanDays(process.env.MESSAGE_HISTORY_DAYS) debating on removing these
  // global.logger.info(`${oldMessagesDeleted} messages were deleted due to being older than ${process.env.MESSAGE_HISTORY_DAYS} day(s).`)
}
process.on('exit', (code) => {
  global.logger.error(`The process is exiting with code ${code}. Terminating pgsql connections...`)
  
})

process.on('SIGINT', async () => {
  global.logger.error('SIGINT caught. Cleaning up and exiting...')
  
  process.exit()
})

process.on('unhandledRejection', (e) => {
  console.error(e)
  if (!e.message.includes('[50013]') && !e.message.startsWith('Request timed out') && !e.message.startsWith('500 INTERNAL SERVER ERROR')) Raven.captureException(e.stack, { level: 'error' }) // handle when Discord freaks out
})

process.on('uncaughtException', (e) => {
  console.error(e)
  if (!e.message.includes('[50013]')) Raven.captureException(e.stack, { level: 'fatal' })
})

client.on('message', (message) => {
  if (message.content == '/muteAll') {
      let channel = message.member.voiceChannel;
      for (let member of channel.members) {
          member[1].setMute(true)
      }
   }
});

init()
