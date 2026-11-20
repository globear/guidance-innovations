# Deploying the FDE site

The site is a static Vite + React app. It is set up for **Netlify**, the same host as guidanceinnovations.tech.

## 1. Create the Netlify site

1. In Netlify, choose **Add new site → Import an existing project** and pick this repository.
2. Set **Base directory** to `FDE`. Netlify then reads `FDE/netlify.toml`, which sets:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node 20
3. Deploy. Page routes such as `/about` and `/industries/hotels` work on refresh because of `public/_redirects`.
4. Add your domain under **Domain management**.

## 2. Turn on the consultation form

The **Book a consultation** form sends requests through **Netlify Forms**. It needs no database or API key.

1. In the site's **Forms** tab, click **Enable form detection**, then redeploy once. Netlify finds the form named `consultation` in `index.html`.
2. Under **Forms → Form notifications**, add an **Email notification** to `info@guidanceinnovations.tech`.
3. Open the live site, send one test request, and check that:
   - it shows under **Forms → consultation**, and
   - the notification email arrives.

Each request includes: name, company, email, phone or LINE ID, interest, industry, the problem to solve first, and the site language. Interest and industry are always sent in English.

If a request can't be sent (for example the site is opened somewhere other than Netlify), the page tells the visitor and offers **Email us** (pre-filled with what they typed) and **WhatsApp** instead. No request is silently lost.

Spam protection: the form has a hidden honeypot field (`bot-field`). You can also turn on reCAPTCHA in Netlify's form settings.

## 3. After launch

- **Social sharing image:** `index.html` points `og:image` at `/og-share.jpg`. Once the domain is live, change it to the full address (e.g. `https://your-domain/og-share.jpg`) so LINE, Facebook and WeChat show the image reliably.
- **Founder video:** to replace the photo with a video, put the file in `public/` and set `media.video` in `src/content.ts`.

## Note about the main site

The main site (guidanceinnovations.tech) sends its contact form to a Supabase project (`xjmsgaegwvhgxdsvtnwk`). That project no longer appears in your Supabase account and its address doesn't resolve, so **the main site's contact form is probably not delivering messages right now.**
