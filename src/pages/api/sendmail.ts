import type { APIContext } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

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
`;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br />');

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
`;

const MAIL_TO_ADMIN = (email: string, text: string) => {
  const safeEmail = escapeHtml(email);
  const safeText = escapeHtml(text);

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
`;
};

export async function POST({ request }: APIContext) {
  try {
    const { email, text } = await request.json();

    if (typeof email !== 'string' || typeof text !== 'string' || !email.trim() || !text.trim()) {
      return new Response('Missing email or text', { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response('Invalid email', { status: 400 });
    }

    if (text.length > 10_000) {
      return new Response('Message is too long', { status: 400 });
    }

    // Astro dev loads .env files into import.meta.env; Vercel injects runtime
    // env vars into process.env. Support both.
    const env = import.meta.env as Record<string, string | undefined>;
    const emailTo = env.EMAIL ?? process.env.EMAIL;
    const emailToPass = env.PASS ?? process.env.PASS;

    if (!emailTo || !emailToPass) {
      console.error('Mail is not configured: EMAIL and PASS env vars are required.');
      return new Response('Mail is not configured', { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailTo,
        pass: emailToPass,
      },
    });

    try {
      await transporter.sendMail({
        from: emailTo,
        replyTo: email,
        to: emailTo,
        subject: 'Portfolio - Contact received',
        text,
        html: MAIL_TO_ADMIN(email, text),
      });
    } catch (error) {
      console.error('Error sending to admin:', error);
      return new Response('Failed to send to admin', { status: 500 });
    }

    try {
      await transporter.sendMail({
        from: emailTo,
        to: email,
        subject: 'Portfolio - Contact received',
        text: 'Thank you for your email. I will get back to you as soon as possible.',
        html: MAIL_TO_SENDER,
      });
    } catch (error) {
      console.error('Error sending confirmation to user:', error);
      return new Response('Failed to send confirmation', { status: 500 });
    }

    return new Response('Success!', { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response('Invalid request', { status: 400 });
  }
}
