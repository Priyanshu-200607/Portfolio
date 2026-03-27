const statItems = [
  {
    value: "3+",
    label: "serious systems in active development",
  },
  {
    value: "FastAPI",
    label: "as the backend foundation for APIs and app services",
  },
  {
    value: "DB-first",
    label: "thinking around schema design, reliability, and scale",
  },
];

export function HeroSection() {
  return (
    <section className="shell section-gap relative flex min-h-screen items-center">
      <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="fade-in space-y-6">
            <span className="eyebrow">Backend-Focused Full Stack Developer</span>
            <div className="space-y-5">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-400">
                Priyanshu Swami
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
                Building practical systems with strong backend architecture,
                clean APIs, and real product intent.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I learn by shipping. My work sits at the intersection of
                backend engineering, AI-assisted workflows, database-heavy
                applications, and automation built for actual use instead of
                portfolio filler.
              </p>
            </div>
          </div>

          <div className="fade-in-delay flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              Contact
            </a>
          </div>

          <div className="fade-in-delay-2 grid gap-4 md:grid-cols-3">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="glass-panel card-hover rounded-2xl p-5"
              >
                <p className="font-mono text-sm uppercase tracking-[0.22em] text-sky-200">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-delay glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
                  System Snapshot
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  What I optimize for
                </p>
              </div>
              <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Builder mode
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Backends that stay understandable as they grow",
                "Database design that supports real product constraints",
                "Automation and AI tools with practical system control",
                "Interfaces that explain technical depth without noise",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/8 bg-slate-950/40 p-4"
                >
                  <p className="text-sm leading-7 text-slate-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-300/10 bg-sky-400/8 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Face recognition workflows, local LLM orchestration, FastAPI
                services, and database-backed systems designed to feel useful
                from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
