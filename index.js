global.logger = require('./src/miscellaneous/start')
global.webhook = require('./src/miscellaneous/webhooklogger')
global.sentry = require('./src/miscellaneous/sentry')

require('./src/miscellaneous/start')
require('dotenv').config()

