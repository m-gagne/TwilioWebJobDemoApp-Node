// TODO: Update your Web App/Web Job Application Settings to set the varaibles below
// https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-configure
// See: 'App settings'

// Twilio Credentials
var accountSid  = process.env.TwillioAccountSid || 'YOUR TWILLIO ACCOUNT SID';
var authToken   = process.env.TwillioAuthToken  || 'YOUR TWILLIO AUTH TOKEN';
var fromNumber  = process.env.TwillioFromNumber || 'YOUR TWILLIO PHONE NUMBER';
var toNumber    = process.env.TwillioToNumber   || 'YOUR TO NUMBER';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: toNumber,
    from: fromNumber,
    body: 'Hello from Azure Webjobs',
}, function (err, message) {
    console.log(message.sid);
});