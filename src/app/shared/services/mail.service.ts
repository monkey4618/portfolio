import { Injectable } from '@angular/core';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'tomu4618@gmail.com',
    pass: 'Uch123456!@#$%^'
  }
});

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }


  async sendMail(data: { fullName: string, mail: string, message: string }): Promise<void> {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch" > tomu4618@gmail.com',
      to: 'jackie20040618@gmail.com',
      subject: 'Hello',
      text: data.message,
      html: `<b>${data.message}</b>`
    })
    console.log("Message sent: %s", info.messageId);
  }
}
