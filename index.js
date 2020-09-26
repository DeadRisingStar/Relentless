global.logger = require('./src/miscellaneous/logger')
global.webhook = require('./src/miscellaneous/webhooklogger')
global.sentry = require('./src/miscellaneous/sentry')

require('./src/miscellaneous/logger')
require('dotenv').config()

