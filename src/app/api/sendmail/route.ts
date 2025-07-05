import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const emailTo = process.env.EMAIL
const emailToPass = process.env.PASS

const MAIL_TO_SENDER = `<html lang="en">
  <head>
    <style>
      .footer {
        text-align: center;
        margin-top: 50px;
        background-color: #0e0e0e;
        color: white;
        width: 100%;
        border-radius: 5px;
        padding: 5px;
      }
      .heading {
        font-weight: bold;
        margin: 5px;
        font-size: xx-large;
      }
      .message {
        font-size: large;
      }
    </style>
  </head>
  <body>
    <h1>Thank you for your email</h1>
    <p class="message">Thank you for contacting me. I will get back to you as soon as possible.</p>
    <div class="footer">
      <p class="heading">BRYAN VAN</p>
      <p class="heading">WINNENDAEL</p>
    </div>
  </body>
</html>`

const MAIL_TO_ADMIN = `<html lang='en'>
  <head>
    <style>
      .footer {
        text-align: center;
        margin-top: 50px;
        background-color: #0e0e0e;
        color: white;
        width: 100%;
        border-radius: 5px;
        padding: 5px;
      }
      .heading {
        font-weight: bold;
        margin: 5px;
        font-size: xx-large;
      }
      .message {
        font-size: large;
      }
    </style>
  </head>
  <body>
    <p class="message">You have a new message from %mail</p>
    <p class="message">%text</p>
    <div class="footer">
      <p class="heading">BRYAN VAN</p>
      <p class="heading">WINNENDAEL</p>
    </div>
  </body>
</html>`

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailTo,
    pass: emailToPass,
  },
})

const sendMailToAdmin = async (email: string, text: string) => {
  const html = MAIL_TO_ADMIN.replace("%mail", email).replace("%text", text)

  const mailDetails = {
    from: email,
    to: emailTo,
    subject: "Portfolio - Contact received",
    text,
    html,
  }

  try {
    await mailTransporter.sendMail(mailDetails)
    return true
  } catch (error) {
    console.error("Error sending to admin:", error)
    return false
  }
}

const sendMailToUser = async (email: string) => {
  const mailDetails = {
    from: emailTo,
    to: email,
    subject: "Portfolio - Contact received",
    text: "Thank you for your email",
    html: MAIL_TO_SENDER,
  }

  try {
    await mailTransporter.sendMail(mailDetails)
    return true
  } catch (error) {
    console.error("Error sending to user:", error)
    return false
  }
}

export async function POST(req: Request) {
  const { email, text } = await req.json()

  if (!email || !text) {
    return new Response("Missing email or text", {
      status: 500,
    })
  }

  const sentToAdmin = await sendMailToAdmin(email, text)
  if (!sentToAdmin) {
    return new Response("Failed to send to admin", {
      status: 500,
    })
  }

  const sentToUser = await sendMailToUser(email)
  if (!sentToUser) {
    return new Response("Failed to send confirmation", {
      status: 500,
    })
  }

  return new Response("Success!", {
    status: 200,
  })
}
