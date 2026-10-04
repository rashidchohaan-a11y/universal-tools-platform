export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 dark:text-slate-300 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>© 2026 UtilityHub</div>
        <div className="flex gap-6">
          <a href="/calculators" className="hover:text-blue-600">Calculators</a>
          <a href="/business" className="hover:text-blue-600">Business tools</a>
          <a href="/blog" className="hover:text-blue-600">Blog</a>
        </div>
      </div>
    </footer>
  );
}
