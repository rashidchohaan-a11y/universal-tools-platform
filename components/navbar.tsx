import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
            U
          </div>
          <div>
            <div className="text-lg font-black">UtilityHub</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Tools + Guides</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/calculators" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200">Calculators</Link>
          <Link href="/business" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200">Business</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200">Blog</Link>
          <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => {
        const html = document.documentElement;
        html.classList.toggle('dark');
      }}
      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium dark:border-slate-700 dark:bg-slate-800"
    >
      Dark mode
    </button>
  );
}
