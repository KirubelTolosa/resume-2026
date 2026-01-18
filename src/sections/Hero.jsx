import Button from '../components/Button.jsx'

const Hero = ({ basics, hero, resumeUrl }) => {
  return (
    <section className="relative overflow-hidden pb-10 pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {basics.location}
          </p>
          <h1 className="text-3xl font-semibold text-text md:text-5xl">{basics.name}</h1>
          <p className="mt-3 text-lg text-muted">{hero.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-text/90">{hero.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href={resumeUrl} variant="primary" download>
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href="#contact" variant="ghost">
              {hero.ctaSecondary}
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-panel p-4">
                <p className="text-2xl font-semibold text-text">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="terminal-ring rounded-3xl border border-border bg-panel p-6">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono">~/portfolio</span>
          </div>
          <pre className="mt-6 whitespace-pre-wrap text-sm leading-relaxed text-code">
            {hero.code.join('\n')}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero

