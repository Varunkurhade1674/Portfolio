# Varun Vijay — Portfolio

A modern, SaaS-level personal portfolio built with **React + Vite + Framer Motion**.

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx / .css       — Animated intro loader
│   │   ├── Navbar.jsx / .css       — Sticky responsive navbar
│   │   ├── Hero.jsx / .css         — Hero with typewriter + code card
│   │   ├── About.jsx / .css        — Bio, traits, education
│   │   ├── Skills.jsx / .css       — Animated skill bars + tech cloud
│   │   ├── Projects.jsx / .css     — Cards + modal (Cryptalk featured)
│   │   ├── Experience.jsx / .css   — Vertical timeline
│   │   ├── Achievements.jsx / .css — Award cards
│   │   ├── Contact.jsx / .css      — Form + social links
│   │   ├── Footer.jsx / .css
│   │   └── ScrollToTop.jsx / .css
│   ├── data/
│   │   └── index.js                — All portfolio data (edit here)
│   ├── hooks/
│   │   └── useInView.js            — Intersection observer hook
│   ├── styles/
│   │   └── global.css              — Design system + CSS variables
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🚀 Local Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done! 🎉

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output dir: `dist`
7. Click **Deploy**

---

## ✏️ Customization

All content lives in **`src/data/index.js`** — edit your name, projects, experience, etc. there.

To change the accent color, edit `--accent` in `src/styles/global.css`.

To add your real GitHub/LinkedIn links, search for `href="https://github.com"` and `href="https://linkedin.com"` across components.

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Framer Motion | Animations |
| React Icons | Icon set |
| CSS Variables | Design system |

---

Built with 💚 by Kurhade Varun Vijay
