const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  
var sendEmail = function(recipientEmail, subject, content) {
  const from_email = new helper.Email(process.env.FROM_EMAIL);
  const to_email = new helper.Email(recipientEmail);
  const content = new helper.Content("text/html", content);
  const mail = new helper.Mail(from_email, subject, to_email, content);
  return new Promise(function(resolve, reject) {
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });
    
    sg.API(request, function(error, response) {
      if (error) return reject(error);
      else return resolve(response);
    });
  });
}

module.exports = sendEmail;
