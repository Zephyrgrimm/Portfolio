# Niraj SB — Professional Engineering Portfolio

[![Deploy to GitHub Pages](https://github.com/Zephyrgrimm/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Zephyrgrimm/Portfolio/actions/workflows/deploy.yml)

Live Website: **[https://zephyrgrimm.github.io/Portfolio/](https://zephyrgrimm.github.io/Portfolio/)**

An enterprise-quality personal engineering portfolio website designed for **Niraj SB**, B.Tech Information Technology undergraduate (Rajalakshmi Engineering College, Class of 2027) with hands-on experience in Python, Cloud Security, Applied AI, and Enterprise CRM Automation.

---

## 🎨 Design System & Philosophy

- **Art Direction:** Minimal, editorial, typography-driven human design (no generic AI templates, gradients, or neon effects).
- **Color Palette:** Warm white (`#F7F5F0`), charcoal (`#1C1C1C`), muted olive (`#5C6E3A`), warm stone cards (`#EFEDE8`), and refined borders (`#E8E5DF`).
- **Typography:** Dual-type system combining **Playfair Display** (editorial serif for titles and wordmarks) and **Inter** (clean sans-serif for UI, metadata, and body reading).
- **Layout & Structure:** Content-first editorial layout with clear typographic hierarchy, micro-interactions, responsive navigation, and ATS-aligned content structure.

---

## 🚀 Sections & Features

1. **Header & Navigation:** Sticky glassmorphism header with active section tracking (IntersectionObserver), responsive mobile drawer, and quick resume download CTA.
2. **Hero Section:** High-resolution professional photograph with double-ring framing, concise professional identity statement, primary CTA to Featured Projects, and resume download.
3. **About Me:** Credible editorial summary highlighting focus areas across systems engineering, applied AI, and cloud risk modeling.
4. **Skills & Expertise:** Structured taxonomy covering:
   - Programming Languages (Python, Java, JavaScript, SQL)
   - Frontend Development (HTML5, CSS3, Modern JS, Responsive Design)
   - Backend & APIs (Node.js, FastAPI, REST APIs)
   - Databases (MySQL, MongoDB, Schema Design)
   - Data Science & AI (NumPy, Pandas, Gemini LLM, GNN, Bayesian Inference)
   - Developer Tools & Multi-Cloud (AWS, Azure, GCP, Git, GitHub)
   - Enterprise Platforms (Zoho CRM, Deluge Scripting, Custom Widgets)
5. **Work Experience:** Chronological timeline showcasing internship at **Zoho** as CRM Development Intern with verified contributions, Deluge scripting, and widget development.
6. **Featured Projects:** Deep-dive cards detailing Problem, Solution, Key Features, Technical Ownership, and direct GitHub repositories:
   - **AI-Based Framework for Security Risk Evaluation in Multi-Cloud Environments** (GNN & Bayesian Inference across AWS, Azure, GCP)
   - **LifeSync — Intelligent Routine Extraction Engine** (Gemini LLM NLP extraction via CLI)
   - **Enterprise Smart Bus Booking System** (Zoho CRM custom modules, seat rules, and real-time validation)
7. **Education & Certifications:** Verified academic credentials (Rajalakshmi Engineering College, Vidya Mandir Estancia) and 4 LinkedIn Learning credentials.
8. **Contact & Socials:** Direct channels with interactive 1-click **Copy Email** button, phone link, location, LinkedIn, and GitHub links.
9. **Footer:** Refined footer with copyright and direct social navigation.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Static HTML Export)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Fonts:** Next Font (`next/font/google` — Inter & Playfair Display)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Hosting:** GitHub Pages (`https://zephyrgrimm.github.io/Portfolio/`)

---

## 💻 Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zephyrgrimm/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000/Portfolio](http://localhost:3000/Portfolio) in your browser.

---

## 📦 Production Build & Testing

Run type-checking and static export build:

```bash
npm run build
```

The static site will be exported to the `./out` directory, fully configured with GitHub Pages base paths and `.nojekyll`.
