# YKM Founder Portfolio & Business Advisor Suite

A highly polished, responsive, and interactive digital portfolio and strategic advising suite designed for **Laptop, Tablet, and Mobile screens**. 

This application features:
- **Interactive Pitch Deck Auditor**: Review slide decks for key business variables.
- **Astrology-Driven Launch Planner**: Connect with Google Calendar to plan highly auspicious business product releases.
- **Brand Portfolio Visualizer**: Explore curated branding layouts across various sectors.
- **Automation Pipeline Visualizer**: Interactive automation node flows.

---

## 🚀 Easy Deployment to Vercel

This project is fully optimized for lightning-fast deployment on **Vercel** with zero-configuration SPA routing and automatic global Edge CDN caching.

### Option 1: 1-Click Import (Recommended)
1. Push this project's code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New > Project**.
3. Import your repository.
4. Vercel will automatically detect **Vite** as the framework and configure the correct build settings:
   - **Framework Preset**: `Vite` (automatically detected)
   - **Build Command**: `npm run build` or `vite build`
   - **Output Directory**: `dist`
5. Click **Deploy**! Your site will be live in under a minute with custom domains and SSL.

### Option 2: Deploy via Vercel CLI
If you prefer deploying directly from your command line:
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command in the project root:
   ```bash
   vercel
   ```
3. To deploy to production:
   ```bash
   vercel --prod
   ```

---

## ⚙️ How Vercel Optimization Works
The included `vercel.json` file in this repository pre-configures the following for Vercel's global CDN:
- **Client-side SPA Routing**: Automatically rewrites all sub-routes back to `index.html` to prevent 404 errors when users refresh deep pages (e.g., `/contact` or custom tabs).
- **Edge Caching Rules**: Ensures static assets (`/assets/*`, `.js`, `.css`, images, fonts) are heavily cached for sub-millisecond response times.
- **Clean URLs**: Clean trailing slashes and clean paths are automatically enforced.

---

## 💻 Local Development

Run the development server locally:
```bash
npm run dev
```

To build and preview the production build locally:
```bash
npm run build
npm run start
```
