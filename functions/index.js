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
    to: 'thn7530@gmail.com',
    subject: `New Estimate Request - ${data.clientName}`,
    html: `<html>
            <h2>${
              data.clientName
            } is interested in an estimate. Their info is:</h2><br>
            <h3>${data.clientEmail}</h3>
            <h3>${data.clientPhone}</h3>
            <h3>City: ${data.clientCity}</h3>
            <h3>Employment Status: ${data.clientEmploymentStatus}</h3>
            <h3>Wants to be called: ${data.clientIsOkayToContact}</h3>
          </html>`,
  };

  return mailTransport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    }
    return true;
  });
});
