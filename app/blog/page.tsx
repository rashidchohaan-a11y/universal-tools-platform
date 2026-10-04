import Link from 'next/link';

const posts = [
  {
    title: 'How to calculate profit margin',
    summary: 'A practical guide to understanding profit, revenue, and operating margin.',
    category: 'Business',
  },
  {
    title: 'Markup vs margin explained',
    summary: 'Learn the difference between markup and margin with simple examples.',
    category: 'Sales',
  },
  {
    title: 'How to price freelance work',
    summary: 'A simple framework for calculating accurate service pricing.',
    category: 'Freelance',
  },
  {
    title: 'How to calculate employee cost',
    summary: 'Estimate base salary, tax, benefits, and full employment cost.',
    category: 'HR',
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Blog & guides</p>
        <h1 className="mt-2 text-4xl font-black">Helpful content supporting the tools</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{post.category}</div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{post.summary}</p>
            <Link href="/blog" className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-500">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
