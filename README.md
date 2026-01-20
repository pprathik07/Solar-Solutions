# Vajra Renew

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Vajra Renew is a comprehensive platform for solar energy solutions and battery/UPS systems, featuring interactive calculators, service information, and portfolio showcases for residential, commercial, and industrial clients.

## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure
```
vajra-renew/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (routes)/                 # Route groups
│   │   │   ├── battery-ups/          # Battery & UPS pages
│   │   │   ├── commercial/           # Commercial solutions
│   │   │   ├── industrial/           # Industrial solutions
│   │   │   └── residential/          # Residential solutions
│   │   ├── about/                    # About page
│   │   ├── api/contact/              # Contact API endpoint
│   │   ├── contact/                  # Contact page
│   │   ├── portfolio/                # Portfolio showcase
│   │   ├── services/                 # Services pages
│   │   ├── error.tsx                 # Error boundary
│   │   ├── layout.tsx                # Root layout
│   │   ├── loading.tsx               # Loading state
│   │   └── page.tsx                  # Homepage
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   ├── sections/                 # Page sections
│   │   │   └── battery/              # Battery-specific sections
│   │   └── ui/                       # Reusable UI components
│   ├── lib/                          # Utility functions
│   │   ├── battery-pricing.ts        # Battery pricing logic
│   │   ├── constants.ts              # App constants
│   │   ├── pricing.ts                # Solar pricing logic
│   │   └── utils.ts                  # Helper utilities
│   └── types/                        # TypeScript definitions
│       ├── battery.ts
│       └── index.ts
└── public/                           # Static assets
```

## Features

This project includes pages for solar solutions (residential, commercial, industrial), battery and UPS systems with product catalogs, interactive ROI and battery calculators, portfolio showcases, customer testimonials, and a contact form with API integration.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.