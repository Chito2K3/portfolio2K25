# Chito — Software Engineering & Systems Portfolio

An elegant, minimalist, and high-performance developer portfolio website showcasing **Chito2K3's** software engineering portfolio, specializing in **Healthcare Information Systems (HIS)**, **Hospital & Pharmacy Logistics**, **Cooperative Financial Management**, and **Cross-Platform Mobile/PWA Applications**.

Built with pure semantic HTML5, vanilla CSS3, and modern ES6 JavaScript. Zero external build dependencies, sub-second load times, and ready for deployment on GitHub Pages or Vercel.

---

## ✨ Features

- **Linear & Obsidian Dark Aesthetics**: Tailored dark palette (`#090A0F`), fine frosted glass cards, subtle emerald/mint highlights (`#10B981`), and modern typography (*Space Grotesk*, *Inter*, and *JetBrains Mono*).
- **Dual Data Layer**:
  - Live client-side synchronization with the GitHub REST API (`https://api.github.com/users/Chito2K3/repos`) to automatically fetch live repository counts and activity status.
  - Curated offline-first data cache in `data.js` containing case study summaries, architecture notes, and operational challenges solved.
- **Dynamic Domain Filtering**: Instant tab filtering across *Healthcare & Pharmacy*, *Financial & ERP*, *Mobile & Commerce*, and *Data & Utilities*.
- **Instant Search**: Instant keyword filtering across titles, descriptions, and technical stacks.
- **Deep-Dive Case Study Drawer**: Interactive modal drawer displaying:
  - Operational problem & healthcare/cooperative context.
  - Engineered technical solution.
  - Architectural highlights (FIFO queues, amortization algorithms, PWA caching).
  - Direct links to GitHub repositories and live deployments.
- **One-Click Contact**: Direct copy-to-clipboard for email address with tactile toast notifications.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html       # Accessible, SEO-optimized HTML5 structure
├── styles.css       # Obsidian dark design system with responsive grid & micro-animations
├── data.js          # Curated project metadata, domain categorizations, and skills
├── app.js           # Live GitHub sync, search/filter engine, and modal logic
└── README.md        # Documentation and deployment instructions
```

---

## 🚀 How to Run Locally

You can run this project with any local HTTP server:

### Option 1: Python
```bash
python -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Node / npx
```bash
npx serve .
```

---

## 🌐 Deploying to GitHub Pages

1. Create or push this folder to your repository named `Chito2K3.github.io` (or as a `gh-pages` branch on any repository).
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `gh-pages`) and root `/` folder, then click **Save**.
4. Your portfolio will be live at:
   ```
   https://chito2k3.github.io/
   ```
