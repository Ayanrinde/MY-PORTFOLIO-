# 🚀 Developer Portfolio — Premium React Portfolio

A production-ready, premium personal portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech Stack
- **React 18** + **Vite** (lightning-fast dev server & build)
- **Tailwind CSS** (utility-first styling with custom design tokens)
- **Framer Motion** (smooth, professional animations)
- **Lucide React** (clean, consistent icons)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Fixed top navbar with scroll progress
│   │   └── Footer.jsx         # Minimal footer
│   ├── sections/
│   │   ├── Hero.jsx           # Landing hero with animations
│   │   ├── Projects.jsx       # Featured projects grid
│   │   ├── CaseStudy.jsx      # Deep-dive project analysis
│   │   ├── About.jsx          # Personal story + timeline
│   │   ├── Skills.jsx         # Skill bars + tech marquee
│   │   ├── Vision.jsx         # Impact/values section
│   │   ├── Blog.jsx           # Writing/insights cards
│   │   └── Contact.jsx        # Contact form + social links
│   └── ui/
│       ├── Loader.jsx         # Animated loading screen
│       └── ProjectCard.jsx    # Reusable project card
├── data/
│   └── projects.js            # All content data (projects, skills, etc.)
├── hooks/
│   ├── useTheme.js            # Dark/light mode toggle
│   └── useScrollProgress.js   # Scroll tracking hook
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
└── index.css                  # Global styles + Tailwind layers
```

## Customization

### 1. Update your info
Edit `src/data/projects.js` — all content lives here:
- Projects (title, description, tech stack, links)
- Skills and proficiency levels
- Social media links

### 2. Change your name
Find "Alex Okonkwo" in `src/components/sections/Hero.jsx` and update.

### 3. Add your CV
Place your CV file at `public/cv.pdf` for the download button to work.

### 4. Connect the contact form
In `Contact.jsx`, replace the `handleSubmit` function with:
- [Formspree](https://formspree.io) (easiest, free tier)
- [EmailJS](https://emailjs.com) (no backend needed)
- Your own API endpoint

### 5. Update colors
Edit `tailwind.config.js` → `theme.extend.colors` to change the accent palette.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

## Features
- ✅ Loading screen with counter animation
- ✅ Floating top navbar with scroll progress bar
- ✅ Dark/light mode toggle (persisted in localStorage)
- ✅ Smooth scroll-triggered animations (Framer Motion)
- ✅ Animated skill progress bars
- ✅ Tech badge marquee ticker
- ✅ Interactive contact form
- ✅ Downloadable CV button
- ✅ Fully responsive (mobile-first)
- ✅ SEO-ready HTML structure
- ✅ Performance-optimized (Vite build)

## Performance Tips
- Replace placeholder GitHub/demo links in `projects.js`
- Add real images to the `public/` folder and reference in project cards
- Use `npm run build` and check Lighthouse score (target: 90+)

## License
MIT — use freely for your personal portfolio.
