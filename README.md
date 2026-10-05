# Outlet Live

Outlet Live is a Next.js prototype for an outlet-shopping livestream platform. It uses an original marketplace livestream UI: a video-led shopping stage, live-channel rail, real-time-style chat, and product tray.

## Run locally

Install Node.js 18.18+ and run:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Included interactions

- Marketplace-style live shopping layout, responsive for desktop and mobile.
- Channel switching, product selection, add-to-bag counter, follow and like controls.
- Live-chat composer and in-memory comments.
- English-only copy, mock data, and Unsplash demonstration images.

## Source structure

- `app/page.jsx` — interactive client UI and mock data.
- `app/globals.css` — responsive design system and live-room layout.
- `app/layout.jsx` — app shell and metadata.
- `package.json` — Next.js scripts and dependencies.

## Prototype boundary

The app does not yet include authentication, payments, a video provider, persistence, inventory validation, or server APIs. Add those services before using it for real commerce.
