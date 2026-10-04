import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black">Create account</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Start building your utility platform experience</p>
        </div>

        <form className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Full name</span>
            <input type="text" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Email</span>
            <input type="email" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-600 dark:text-slate-300">Password</span>
            <input type="password" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800" />
          </label>
          <button type="submit" className="w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white">
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
