const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: "https://96e5980921a343b0aa57c1500c2828ab@o448605.ingest.sentry.io/5430212",
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "Relentless",
  name: "Relentless V 0.1.0",
});

setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);