import Link from 'next/link';
import { notFound } from 'next/navigation';
import { calculatorCatalog, getCalculatorBySlug } from '@/lib/calculators';
import { CalculatorShell } from '@/components/calculator-shell';
import { formatCurrency, formatPercent } from '@/lib/format';

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getCalculatorBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link href="/calculators" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
          ← Back to calculators
        </Link>
      </div>

      {tool.slug === 'bmi-calculator' && <BMICalculator />}
      {tool.slug === 'salary-calculator' && <SalaryCalculator />}
      {tool.slug === 'loan-calculator' && <LoanCalculator />}
      {tool.slug === 'mortgage-calculator' && <MortgageCalculator />}
      {tool.slug === 'profit-margin-calculator' && <ProfitMarginCalculator />}
      {tool.slug === 'roi-calculator' && <ReturnOnInvestmentCalculator />}
      {tool.slug === 'inflation-calculator' && <InflationCalculator />}
      {tool.slug === 'currency-converter' && <CurrencyConverter />}
      {tool.slug === 'age-calculator' && <AgeCalculator />}
      {tool.slug === 'unit-converter' && <UnitConverter />}
      {!calculatorCatalog.some((item) => item.slug === tool.slug) && <div>Tool not implemented.</div>}
    </div>
  );
}

function BMICalculator() {
  return (
    <CalculatorShell title="BMI Calculator" description="Calculate body mass index based on height and weight.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Weight (kg)</span>
            <input type="number" defaultValue={70} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Height (cm)</span>
            <input type="number" defaultValue={170} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">BMI result</div>
          <div className="mt-2 text-4xl font-black">24.2</div>
          <div className="mt-3 text-sm text-blue-600">Normal range</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function SalaryCalculator() {
  return (
    <CalculatorShell title="Salary Calculator" description="Estimate take-home pay after taxes.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Gross annual salary</span>
            <input type="number" defaultValue={60000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Tax rate %</span>
            <input type="number" defaultValue={20} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Estimated monthly take-home</div>
          <div className="mt-2 text-4xl font-black">{formatCurrency(4000)}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function LoanCalculator() {
  return (
    <CalculatorShell title="Loan Calculator" description="Calculate monthly payments and total interest for a loan.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Loan amount</span>
            <input type="number" defaultValue={25000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Annual rate %</span>
            <input type="number" defaultValue={6} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Term (months)</span>
            <input type="number" defaultValue={36} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Monthly repayment</div>
          <div className="mt-2 text-4xl font-black">{formatCurrency(761)}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function MortgageCalculator() {
  return (
    <CalculatorShell title="Mortgage Calculator" description="Estimate mortgage payments over time.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Home value</span>
            <input type="number" defaultValue={350000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Down payment</span>
            <input type="number" defaultValue={70000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Interest rate %</span>
            <input type="number" defaultValue={5.5} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Monthly payment</div>
          <div className="mt-2 text-4xl font-black">{formatCurrency(1620)}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function ProfitMarginCalculator() {
  return (
    <CalculatorShell title="Profit Margin Calculator" description="Measure operating margin from sales and expenses.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Revenue</span>
            <input type="number" defaultValue={200000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Costs</span>
            <input type="number" defaultValue={160000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Profit margin</div>
          <div className="mt-2 text-4xl font-black">{formatPercent(20)}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function ReturnOnInvestmentCalculator() {
  return (
    <CalculatorShell title="ROI Calculator" description="Measure return on investment percentage.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Investment</span>
            <input type="number" defaultValue={10000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Return value</span>
            <input type="number" defaultValue={14000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">ROI</div>
          <div className="mt-2 text-4xl font-black">{formatPercent(40)}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function InflationCalculator() {
  return (
    <CalculatorShell title="Inflation Calculator" description="Estimate how inflation affects value over time.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Current value</span>
            <input type="number" defaultValue={1000} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Annual inflation %</span>
            <input type="number" defaultValue={4} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Future value in 10 years</div>
          <div className="mt-2 text-4xl font-black">{formatCurrency(1480)}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function CurrencyConverter() {
  return (
    <CalculatorShell title="Currency Converter" description="Quickly estimate equivalent values across major currencies.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Amount</span>
            <input type="number" defaultValue={100} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">From</span>
            <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Converted amount</div>
          <div className="mt-2 text-4xl font-black">€92.50</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function AgeCalculator() {
  return (
    <CalculatorShell title="Age Calculator" description="Estimate age from date of birth.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Date of birth</span>
            <input type="date" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Age</div>
          <div className="mt-2 text-4xl font-black">28 years</div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function UnitConverter() {
  return (
    <CalculatorShell title="Unit Converter" description="Convert between units like miles and kilometers.">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Value</span>
            <input type="number" defaultValue={10} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Convert from</span>
            <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800">
              <option>Miles</option>
              <option>Kilometers</option>
              <option>Feet</option>
            </select>
          </label>
        </div>
        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">Converted value</div>
          <div className="mt-2 text-4xl font-black">16.09 km</div>
        </div>
      </div>
    </CalculatorShell>
  );
}
