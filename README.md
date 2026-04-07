# 🏺 Mindroap: Atelier Design System

**The Cinematic Visual Architecture for High-Retention Brand Storytelling.**

Mindroap is a bespoke digital environment built for creators and agencies who prioritize **art over noise**. It implements the "Atelier" design language — a high-fidelity, motion-intensive aesthetic characterized by glassmorphism, fluid typography, and precise interactive states.

## ✨ Core Architecture

*   **Cinematic Experience**: Every interaction is weight-balanced with Framer Motion for a premium, intentional feel.
*   **The Editorial Bay**: A high-retention "Thought Laboratory" for long-form insights and project showcases.
*   **Tactical Booking Architecture**: A bento-grid inspired interaction layer designed to maximize conversion through elite visual hierarchy.
*   **Atelier Blueprint**: Fully responsive grid systems tailored for 4K down to mobile viewports.

## 🛠 Tech Stack

*   **Foundation**: [Next.js 16.2+](https://nextjs.org) (App Router Architecture)
*   **Dynamics**: [Framer Motion](https://www.framer.com/motion/) (High-performance animations)
*   **Interface**: [Lucide Icons](https://lucide.dev) & [Google Fonts: Inter, Playfair Display]
*   **Communications**: [Nodemailer](https://nodemailer.com) (SMTP Integration)

## 🚀 Getting Started

### 1. Initialize Prototyping Environment

```bash
npm install
npm run dev
```

### 2. Configure Environment Variables

Create a `.env.local` to enable tactical features (SMTP, Admin Admin):

```bash
ADMIN_PASSWORD=your_secure_password
ADMIN_SECRET_TOKEN=your_auth_token
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_smtp_password
```

## 📐 Project Structure

- `src/app`: Primary Next.js routes (The Gallery, Insights, Investing strategies).
- `src/components`: Custom UI primitives (Hero, Pricing Matrix, Editorial Bayesian cards).
- `src/data`: `cms.json` — The centralized source of truth for the local-first CMS.
- `src/actions`: Server-side logistics for booking and authentication.

## 🏺 Aesthetics Principles

1.  **Glassmorphism**: Use of `backdrop-blur-xl` and `white/30` for floating surfaces.
2.  **Wide Tracking**: Precision typography with `tracking-widest` for all strategic headers.
3.  **Fluid Motion**: `stagger` and `blurReveal` animations on all page entries.

---

**© 2024 Mindroap Agency. All rights reserved. Architecting Legacies.**
