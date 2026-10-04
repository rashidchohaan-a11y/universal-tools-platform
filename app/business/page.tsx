'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculator-shell';
import { formatCurrency, formatPercent } from '@/lib/format';

export default function BusinessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Business toolkit</p>
        <h1 className="mt-2 text-4xl font-black">Small business operating toolkit</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <InvoiceGenerator />
        <ProfitCalculator />
        <MarkupCalculator />
        <MarginCalculator />
        <PayrollCalculator />
        <ROICalculator />
      </div>
    </div>
  );
}

function InvoiceGenerator() {
  const [items, setItems] = useState([{ quantity: 2, rate: 80, name: 'Consulting' }]);
  const [taxRate, setTaxRate] = useState(10);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.rate, 0),
    [items],
  );
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;

  const updateItem = (index: number, field: 'name' | 'quantity' | 'rate', value: string | number) => {
    setItems((current) =>
      current.map((item, itemIndex) => {
        if (itemIndex !== index) return item;
        return { ...item, [field]: field === 'name' ? value : Number(value) };
      }),
    );
  };

  return (
    <CalculatorShell title="Invoice Generator" description="Create a basic invoice and calculate tax.">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr]">
            <input
              value={item.name}
              onChange={(e) => updateItem(index, 'name', e.target.value)}
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
              placeholder="Item name"
            />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateItem(index, 'quantity', e.target.value)}
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
            />
            <input
              type="number"
              value={item.rate}
              onChange={(e) => updateItem(index, 'rate', e.target.value)}
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>
        ))}

        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setItems((current) => [...current, { quantity: 1, rate: 50, name: 'New item' }])}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Add item
          </button>
          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            Tax rate %
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              className="w-20 rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
            />
          </label>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="mt-3 flex justify-between text-lg font-black">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function ProfitCalculator() {
  const [revenue, setRevenue] = useState(150000);
  const [cost, setCost] = useState(100000);

  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  return (
    <CalculatorShell title="Profit Calculator" description="Estimate profit and profit margin.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Revenue</span>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Total costs</span>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>

        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Profit</span>
            <span>{formatCurrency(profit)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Margin</span>
            <span>{formatPercent(margin)}</span>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function MarkupCalculator() {
  const [cost, setCost] = useState(100);
  const [markupPercent, setMarkupPercent] = useState(30);

  const price = cost * (1 + markupPercent / 100);
  const profit = price - cost;

  return (
    <CalculatorShell title="Markup Calculator" description="Calculate selling price from cost and markup.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Item cost</span>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Markup %</span>
          <input
            type="number"
            value={markupPercent}
            onChange={(e) => setMarkupPercent(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>

        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Sell price</span>
            <span>{formatCurrency(price)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Profit</span>
            <span>{formatCurrency(profit)}</span>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function MarginCalculator() {
  const [revenue, setRevenue] = useState(500);
  const [cost, setCost] = useState(350);

  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  return (
    <CalculatorShell title="Margin Calculator" description="Calculate revenue margin from cost and selling price.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Revenue / selling price</span>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Cost</span>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>

        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Gross profit</span>
            <span>{formatCurrency(profit)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Margin</span>
            <span>{formatPercent(margin)}</span>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function PayrollCalculator() {
  const [salary, setSalary] = useState(5000);
  const [taxRate, setTaxRate] = useState(18);
  const [benefits, setBenefits] = useState(300);

  const tax = salary * (taxRate / 100);
  const net = salary - tax - benefits;

  return (
    <CalculatorShell title="Payroll Calculator" description="Estimate payroll deductions and take-home pay.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Gross monthly salary</span>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Tax rate %</span>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Benefits</span>
          <input
            type="number"
            value={benefits}
            onChange={(e) => setBenefits(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>

        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Net pay</span>
            <span>{formatCurrency(net)}</span>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

function ROICalculator() {
  const [investment, setInvestment] = useState(5000);
  const [gain, setGain] = useState(7500);

  const roi = investment > 0 ? ((gain - investment) / investment) * 100 : 0;

  return (
    <CalculatorShell title="ROI Calculator" description="Measure return on investment percentage.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Initial investment</span>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Final value / gain</span>
          <input
            type="number"
            value={gain}
            onChange={(e) => setGain(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
        </label>

        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>ROI</span>
            <span>{formatPercent(roi)}</span>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}
