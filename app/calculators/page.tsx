import Link from 'next/link';
import { calculatorCatalog } from '@/lib/calculators';
import { CalculatorCard } from '@/components/calculator-card';

export default function CalculatorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Calculators</p>
          <h1 className="mt-2 text-4xl font-black">Free calculators and converters</h1>
        </div>
        <Link href="/business" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
          Go to business toolkit →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {calculatorCatalog.map((tool) => (
          <CalculatorCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
