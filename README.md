# UtilityHub

A global English-language utility platform with calculators, converters, business tools, templates, guides, and a dashboard.

## Features

- 10+ calculator pages
- Business toolkit with invoice, quote, profit, markup, margin, payroll, and ROI tools
- Global SEO-friendly pages for tools and guides
- User dashboard with saved results/history
- Supabase-ready auth schema
- Responsive dark mode UI

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Environment variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Database

Run the SQL in `supabase/schema.sql` in your Supabase SQL editor.

## Production

Deploy to Vercel with the same environment variables.
