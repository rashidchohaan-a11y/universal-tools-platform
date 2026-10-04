import Link from 'next/link';
import type { CalculatorTool } from '@/types/calculator';

export function CalculatorCard({ tool }: { tool: CalculatorTool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-3 inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
        {tool.category}
      </div>
      <div className="text-2xl font-bold">{tool.name}</div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
      <div className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-500">
        Open tool →
      </div>
    </Link>
  );
}
