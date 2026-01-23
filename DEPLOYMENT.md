# Netlify Deployment Guide

## Quick Deploy Options

### Option 1: Deploy via Netlify CLI (Recommended)

1. Install Netlify CLI (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy to production:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

4. If this is your first deployment, you'll be prompted to:
   - Create a new site or link to an existing site
   - Set up the domain `guidanceinnovations.tech`

### Option 2: Deploy via Netlify Dashboard (Drag & Drop)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop) or your site's deploy settings

3. Drag and drop the `dist` folder to deploy

4. Configure custom domain:
   - Go to Site settings > Domain management
   - Add custom domain: `guidanceinnovations.tech`
   - Follow DNS configuration instructions

### Option 3: Git-based Continuous Deployment

1. Push your code to GitHub/GitLab/Bitbucket:
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push
   ```

2. Connect your repository to Netlify:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your Git provider and select the repository
   - Netlify will auto-detect the build settings from `netlify.toml`

3. Configure custom domain:
   - Go to Site settings > Domain management
   - Add custom domain: `guidanceinnovations.tech`
   - Update your DNS records as instructed

## Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules for React Router

## Domain Setup

For `guidanceinnovations.tech`:
1. Add the domain in Netlify dashboard
2. Update your DNS records:
   - Add an A record pointing to Netlify's IP, OR
   - Add a CNAME record pointing to your Netlify site URL
3. Netlify will provide SSL certificate automatically
