var Mailgun = require('mailgun-js');
var config = require('../config');
// get mailgun info
var apiKey = config.MAILGUN_API_KEY;
var domain = config.MAILGUN_DOMAIN;

var mailgun = new Mailgun({
    apiKey: apiKey,
    domain: domain
  });
console.log(domain);
console.log(apiKey);
var sendEmail = function(to, from, subject, html, cb){
  var data = {
    from: from,
    to: to,
    subject: subject,
    html: "<h1>Howdy</h1>"
  };

  mailgun.messages().send(data, function(err, body){
    if (err) {
      console.log(err);
    };

    console.log("message sent");
  });
}

module.exports = {
  sendEmail: sendEmail
}
