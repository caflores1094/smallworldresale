var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smallworldemailer@gmail.com',
        pass: 'swcrnode'
    }
});

var sendEmail = function(trans, emailData){
    //prepare the message to reflect relevant return carriages
    var emailMessage = emailData.message.replace(/(?:\r\n|\r|\n)/g, '<br />');


    // setup email data 
    // make sure to send it to both the client and the email sender
    let mailOptions = {
        from: emailData.name + ' <' + emailData.email + '>', // sender address
        to: 'smallworldemailer@gmail.com, ' + emailData.email, // list of receivers
        subject: 'Interested in Small World Children Resale Boutique', // Subject line
        html: emailMessage // html body
    };


    // send mail with defined transport object
    trans.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

module.exports = {
    transporter: transporter,
    sendEmail: sendEmail
}