const nodemailer = require('nodemailer');
const config = require('../config.js');

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth:{
    user: config.ProxyEmail,
    pass: config.ProxyPass
  },
  tls:{
    rejectUnauthorized: false
  }
});

const helpOps = (name,dEmail,from,message)=>{
  return helpOptions = {
            from: `<${dEmail}>`,
            to: config.Email,
            subject: `email from ${from} page.`,
            text: `This email was from ${name}`,
            html:`<div style="width:500px; height: 600px;">
                    <div style="padding: 5px; background-color:salmon;
                      border-bottom: #e4e4e4">
                      <h1 style="text-align: center; margin: 10px auto;
                        ">
                        ${name}
                      </h1>
                    </div>
                    <h3 style="margin: 5px auto; text-align: center; margin-top: 20px; font-size: 24px;">
                      Email was from ${from}
                    </h3>
                    <p style="text-align: center; margin-top: 20px; font-size: 20px">
                      ${message}
                    </P>
                  </div>`
  }
}

const callTransporter = (name,dEmail,from,message)=>{
  transporter.sendMail(helpOps(name,dEmail,from,message),(error,info)=>{
    if(error){
      return console.log(error);
    }
    console.log("the message was sent");
    console.log(info);
  })
}

module.exports = {
  callTransporter: callTransporter
}