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

Every form (hero trip planner + contact form) submits straight to
[Web3Forms](https://web3forms.com) from the browser, which emails the details to
**firstlineholidys@gmail.com**, then the visitor lands on `/thank-you`.

The access key lives in `lib/content.js` as `WEB3FORMS_KEY` (it is a public key
— safe in client code). To change the destination inbox, create a new key at
web3forms.com and replace that value.

**First real submission:** Web3Forms sends a one-time verification email to
firstlineholidys@gmail.com — click the link in it once, and every submission
after that arrives normally.

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
