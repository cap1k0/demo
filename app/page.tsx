import Logo from './components/Logo'
import DemoForm from './components/DemoForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <nav className="mb-24 flex items-center justify-between">
          <a href="https://bruca.space"><Logo /></a>
          <a href="https://bruca.space" className="text-sm text-neutral-600 hover:text-neutral-900">bruca.space</a>
        </nav>

        <section className="max-w-xl">
          <h1 className="mb-4 text-4xl font-medium leading-tight sm:text-5xl">Request a Bruca demo</h1>
          <p className="mb-8 text-base leading-relaxed text-neutral-600">
            Bruca helps teams find and fix biased wording in text, product copy and brand stories.
            Leave your email and we will get back to you to set up a demo.
          </p>
          <DemoForm />
        </section>
      </div>
    </main>
  )
}
