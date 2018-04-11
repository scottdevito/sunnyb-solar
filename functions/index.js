const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const nodemailerConfig = require('./nodemailer_config');

exports.sendEstimateFormEmail = functions.https.onCall(data => {
  let transportConfig = {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: nodemailerConfig.userConfig,
      clientId: nodemailerConfig.clientIdConfig,
      clientSecret: nodemailerConfig.clientSecretConfig,
      refreshToken: nodemailerConfig.refreshTokenConfig,
      accessToken: nodemailerConfig.accessTokenConfig,
    },
  };

  const mailTransport = nodemailer.createTransport(transportConfig);

  const mailOptions = {
    from: 'Sunny B Solar <sunnybsolarny@gmail.com>',
    to: 'sunnybsolarny@gmail.com',
    subject: `New Estimate Request - ${data.clientName}`,
    html: `<html>
            <h3>${
              data.clientName
            } is interested in an estimate. Their email is:</h3>
            <h3>${data.clientEmail}</h3>
          </html>`,
  };
  return mailTransport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    }
  });
});
