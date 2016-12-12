# Twillio Demo Webjob - Node.js

Demo node.js Azure Webjob that sends a text message

## Setup

1. Run `npm install twilio`
1. Zip `job.js` & `node_modules`
1. Create an [Azure Web Job](npm install twilio)
1. Upload the zip file
1. Edit your `App Settings` ([documentation](https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-configure)) to configure:
    - `TwillioAccountSid`
    - `TwillioAuthToken`
    - `TwillioFromNumber`
    - `TwillioToNumber`
1. Run your job