# Portfolio

A one-page portfolio built with Astro. Dark, warm, ember accent, with sections for
experience, projects, education and a contact form.

## Run it

Requires Node 22.12 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

On Node 22.23.4+ you can move to Astro 7 (`npm install astro@latest`) to pick up
the latest security fixes. This project is pinned to Astro 6 because the current
Node version here is older.

## Edit content

Everything lives in `src/data/site.ts`:

- name, role, location, status, tagline, intro, email
- social links
- skills
- experience, projects and education

The accent colour is set with `--accent` in `src/styles/global.css`.

Company logos and project icons live in `public/icons`. Company marks come from
the official sites, project icons from the GitHub repositories, and Netweb uses
a small custom network mark because it has no public repo.

## Contact form

The form posts to `/api/sendmail`, a Vercel serverless function that uses
Nodemailer with Gmail. It sends two emails, matching the old Next.js endpoint:

1. The enquiry to you, with the visitor's address as `replyTo`.
2. A confirmation to the visitor.

Set these environment variables locally in `.env` or `.env.local` in the
project root (both are gitignored), and in the Vercel project settings:

```sh
EMAIL=your-gmail-address
PASS=your-gmail-app-password
```

A Gmail App Password is required if two-factor authentication is enabled.

The site itself stays static; only `/api/sendmail` runs as a function. `npm run
build` writes the Vercel output to `.vercel/output`.
