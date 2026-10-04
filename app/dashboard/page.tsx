import Link from 'next/link';

const history = [
  { name: 'BMI Calculator', result: '25.2', time: 'Today • 10:42 AM' },
  { name: 'Salary Calculator', result: '$4,450', time: 'Yesterday • 5:15 PM' },
  { name: 'ROI Calculator', result: '18.4%', time: '2 days ago' },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Dashboard</p>
          <h1 className="mt-2 text-4xl font-black">Your saved tools and history</h1>
        </div>
        <Link href="/calculators" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          Explore tools
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Saved tools" value="12" />
        <StatCard label="This month" value="48" />
        <StatCard label="Shared results" value="17" />
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 text-xl font-bold">Recent results</div>
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{item.time}</div>
              </div>
              <div className="text-lg font-black">{item.result}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-2 text-3xl font-black">{value}</div>
    </div>
  );
}
