# First Line Holidays — Kashmir Travel Landing Page

Next.js 16 (App Router) · JavaScript/JSX only · Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Editing content

All copy, packages, destinations, itinerary, FAQs, gallery and contact
details live in **`lib/content.js`**. No component edits needed for normal updates.

## Enquiry emails (forms → your inbox)

Every form (hero trip planner + contact form) POSTs to `/api/enquiry`, which
emails the details to **firstlineholidys@gmail.com** and then sends the visitor
to `/thank-you`.

**One-time setup:**

1. Go to <https://web3forms.com>, enter `firstlineholidys@gmail.com`, and copy
   the **Access Key** they email you.
2. **Local:** create `.env.local` (see `.env.example`) with
   `WEB3FORMS_ACCESS_KEY=your-key`
3. **Vercel:** Project → Settings → Environment Variables → add
   `WEB3FORMS_ACCESS_KEY` = your key → redeploy.

Until the key is set, forms show a "not configured" message instead of sending.

## Brand logo

`public/logo/first-line-holidays.svg` is a **placeholder**. Replace it with the
official supplied logo (same filename, transparent background). See
`public/logo/README.md`.

## Photography

Images are Unsplash URLs defined via the `u(id, width)` helper in `lib/content.js`.
Swap the photo IDs — or point them at files in `public/images/` — with your own
Kashmir photography. Remote host is whitelisted in `next.config.mjs`.

## Structure

- `app/layout.js` — fonts (Playfair Display + Inter), SEO / Open Graph metadata
- `app/page.js` — section composition
- `components/*` — one component per section; Server Components except
  `Header`, `TripPlanner`, `FAQ`, `EnquiryForm`, `Reveal` (interaction only)

Enquiry forms and the WhatsApp button open a pre-filled WhatsApp chat to
9622717796.
