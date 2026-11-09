# South Bay Web Studio

Marketing site for a San Jose, CA web design studio. Next.js (App Router, static export) + Tailwind CSS.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Things to swap

- **Demo URLs, prices, copy:** `lib/site.ts` (`DEMOS` and `PLANS`).
- **Contact form:** get a free access key at [web3forms.com](https://web3forms.com), then copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_KEY`. For Formspree, set `formEndpoint` in `lib/site.ts` to your `https://formspree.io/f/...` URL.
- **Contact email:** `lib/site.ts`.

## Deploy

`out/` is plain static HTML, deployable to Netlify, Cloudflare Pages, Vercel or GitHub Pages.
