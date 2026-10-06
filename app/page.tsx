import DemoForm from './components/DemoForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <nav className="mb-24 flex items-center justify-between">
          <a
            href="https://bruca.space"
            className="text-lg font-semibold tracking-tight text-neutral-900 transition-opacity hover:opacity-70"
          >
            bruca
          </a>

          <a
            href="https://bruca.space"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            bruca.space
          </a>
        </nav>

        <section className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500 shadow-sm">
            Book a demo
          </div>

          <h1 className="mb-5 text-4xl font-medium tracking-tight leading-[1.08] sm:text-6xl">
            See how Bruca can help your team write more inclusively.
          </h1>

          <p className="mb-10 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
            Bruca helps teams find and fix biased wording in text, product copy
            and brand stories. Leave your email and we will get back to you to
            set up a demo.
          </p>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <DemoForm />
          </div>

          <p className="mt-5 text-xs leading-relaxed text-neutral-400">
            No commitment. We&apos;ll only use your email to arrange the demo.
          </p>
        </section>
      </div>
    </main>
  )
}
