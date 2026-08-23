import nodemailer from "nodemailer"

const emailTo = process.env.EMAIL
const emailToPass = process.env.PASS

const EMAIL_STYLES = `
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            font-family: Arial, Helvetica, sans-serif;
            color: #ffffff;
        }
        .email-wrapper {
            width: 100%;
            background-color: #000000;
            padding: 40px 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #0e0e0e;
            color: #ffffff;
            border-radius: 12px;
            padding: 40px;
        }
        h1 {
            margin: 0 0 20px;
            font-size: 28px;
            line-height: 1.2;
            font-weight: 600;
            color: #ffffff;
        }
        .message {
            margin: 0;
            font-size: 16px;
            line-height: 1.6;
            color: #bdbdbd;
        }
        .message + .message {
            margin-top: 16px;
        }
        .footer {
            margin-top: 50px;
            padding-top: 25px;
            border-top: 1px solid #333333;
        }
        .heading {
            margin: 0;
            font-size: 28px;
            line-height: 0.9;
            font-weight: bold;
            letter-spacing: -1px;
            color: #ffffff;
        }
        .accent {
            color: #2563EB;
        }
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #000000 !important;
            }
            .email-wrapper {
                background-color: #000000 !important;
            }
            .container {
                background-color: #0e0e0e !important;
                color: #ffffff !important;
            }
            h1,
            .heading {
                color: #ffffff !important;
            }
            .message {
                color: #bdbdbd !important;
            }
        }
    </style>
`

const escapeHtml = (value: string) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br />")
}

const MAIL_TO_SENDER = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="color-scheme" content="dark">
    <meta name="supported-color-schemes" content="dark">
    ${EMAIL_STYLES}
</head>

<body>
    <div class="email-wrapper">
        <div class="container">

            <h1>
                Thank you for your email
            </h1>

            <p class="message">
                Thank you for contacting me. I will get back to you as soon as possible.
            </p>

            <div class="footer">
                <p class="heading">
                    <span class="accent">BRYAN</span> VAN
                </p>

                <p class="heading">
                    WINNENDAEL
                </p>
            </div>

        </div>
    </div>
</body>
</html>
`

const MAIL_TO_ADMIN = (email: string, text: string) => {
  const safeEmail = escapeHtml(email)
  const safeText = escapeHtml(text)

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="color-scheme" content="dark">
    <meta name="supported-color-schemes" content="dark">
    ${EMAIL_STYLES}
</head>

<body>
    <div class="email-wrapper">
        <div class="container">

            <p class="message">
                You have a new message from
                <strong style="color:#ffffff;">
                    ${safeEmail}
                </strong>
            </p>

            <p class="message">
                ${safeText}
            </p>

            <div class="footer">
                <p class="heading">
                    <span class="accent">BRYAN</span> VAN
                </p>

                <p class="heading">
                    WINNENDAEL
                </p>
            </div>

        </div>
    </div>
</body>
</html>
`
}

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailTo,
    pass: emailToPass,
  },
})

const sendMailToAdmin = async (email: string, text: string) => {
  const mailDetails = {
    from: emailTo,
    replyTo: email,
    to: emailTo,
    subject: "Portfolio - Contact received",
    text,
    html: MAIL_TO_ADMIN(email, text),
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
    text: "Thank you for your email. I will get back to you as soon as possible.",
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
  try {
    const { email, text } = await req.json()
    if (!email || !text) {
      return new Response("Missing email or text", {
        status: 400,
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
  } catch (error) {
    console.error("Error processing contact form:", error)

    return new Response("Invalid request", {
      status: 400,
    })
  }
}
