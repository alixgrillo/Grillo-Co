module.exports = function (app) {
  app.post("/email", function (req, res) {
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "john@grilloandco.com",
      from: "alix.grillo2@gmail.com",
      subject: "Message Received at GrilloandCo.com",
      text: req.body.message,
      html: `<p>FROM: ${req.body.name}</p><p>EMAIL: ${req.body.email}</p><p>SUBJECT: ${req.body.subject}</p><p>${req.body.message}</p>`,
    };
    sgMail.send(msg);
  });
};
