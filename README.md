# Priyanshu Swami Portfolio

A production-ready personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive single-page portfolio layout

## Folder Structure

```text
.
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- about-section.tsx
|   |-- contact-section.tsx
|   |-- footer.tsx
|   |-- hero-section.tsx
|   |-- projects-section.tsx
|   |-- section-heading.tsx
|   `-- skills-section.tsx
|-- lib
|   `-- data.ts
|-- next-env.d.ts
|-- next.config.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Render Deployment

Create a new **Web Service** on Render and use these settings:

- Environment: `Node`
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`

Recommended Render settings:

- Node version: `20` or newer
- Auto deploy: enabled

No environment variables are required for this project right now.

## Customization

- Update project links in `lib/data.ts`
- Replace placeholder email / social links in `components/contact-section.tsx`
- Update `metadataBase` in `app/layout.tsx` after the final domain is available
