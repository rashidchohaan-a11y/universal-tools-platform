import Link from 'next/link';
import { calculatorCatalog } from '@/lib/calculators';
import { CalculatorCard } from '@/components/calculator-card';

const featured = calculatorCatalog.slice(0, 6);

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-soft md:grid-cols-2 md:p-12">
        <div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            UtilityHub
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Tools that solve everyday problems and search intent.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-blue-100">
            A global platform for calculators, converters, generators, templates, guides, and business tools designed to attract useful organic traffic.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculators"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Explore tools
            </Link>
            <Link
              href="/business"
              className="rounded-full border border-white/50 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Business toolkit
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950/10 p-6 backdrop-blur-sm">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Popular tools
          </div>
          <div className="space-y-4">
            {featured.map((tool) => (
              <div key={tool.slug} className="rounded-2xl bg-white/10 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold">{tool.name}</div>
                    <div className="text-sm text-blue-100">{tool.category}</div>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-xs font-semibold text-emerald-100">
                    Live
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Categories</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">Built for real utility</h2>
          </div>
          <Link href="/calculators" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            View all tools →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { name: 'Finance', tools: ['Salary', 'Loan', 'ROI', 'Inflation'] },
            { name: 'Health', tools: ['BMI', 'BMR', 'Calorie', 'Age'] },
            { name: 'Business', tools: ['Invoice', 'Quote', 'Profit', 'Payroll'] },
            { name: 'Utility', tools: ['Unit converter', 'Word counter', 'QR generator', 'Password'] },
          ].map((category) => (
            <div key={category.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 text-xl font-bold">{category.name}</div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {category.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Featured calculators</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">Instantly useful from day one</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((tool) => (
            <CalculatorCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-900 p-8 text-white">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-4xl font-black">300+</div>
            <div className="mt-2 text-slate-300">Utility pages planned</div>
          </div>
          <div>
            <div className="text-4xl font-black">50+</div>
            <div className="mt-2 text-slate-300">SEO-friendly guides</div>
          </div>
          <div>
            <div className="text-4xl font-black">1</div>
            <div className="mt-2 text-slate-300">Shared platform for tools, business, and resources</div>
          </div>
        </div>
      </section>
    </div>
  );
}
