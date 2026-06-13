# Nithish M — Portfolio

A clean, minimal, responsive portfolio built with React. Includes light/dark mode, smooth scroll navigation, and sections for Hero, About, Skills, Experience, Projects, Certifications, Contact, and Footer.

## Tech Stack
- React 18
- CSS Variables (light/dark theme)
- DM Sans + DM Mono fonts
- No external UI library — pure CSS

## Getting Started

```bash
npm install
npm start
```

## Build for Production

```bash
npm run build
```

## Deploy to Netlify

### Option 1 — Netlify CLI (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=build
```

### Option 2 — Netlify UI (Drag & Drop)

1. Run `npm run build`
2. Go to [netlify.com](https://www.netlify.com)
3. Drag the `build/` folder onto the Netlify dashboard

### Option 3 — GitHub + Netlify Auto Deploy

1. Push this project to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **New site from Git**
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **Deploy site**

Every push to `main` will auto-deploy 🚀

## Customization Checklist

- [ ] Update name, role, bio in `Hero.jsx`
- [ ] Update about text and stats in `About.jsx`
- [ ] Add/edit skills in `Skills.jsx`
- [ ] Add real experience in `Experience.jsx`
- [ ] Add real projects in `Projects.jsx`
- [ ] Add real certifications in `Certifications.jsx`
- [ ] Update email, LinkedIn, GitHub in `Contact.jsx` and `Footer.jsx`
- [ ] Replace `#` links with real GitHub/live URLs in Projects
- [ ] Add your `resume.pdf` to the `public/` folder
