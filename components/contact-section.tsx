import { SectionHeading } from "@/components/section-heading";

const contactLinks = [
  {
    label: "Email",
    value: "priyanshu@example.com",
    href: "mailto:priyanshu@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/priyanshu-swami",
    href: "https://github.com/priyanshu-swami",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/priyanshu-swami",
    href: "https://linkedin.com/in/priyanshu-swami",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="shell section-gap">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Open to backend roles, ambitious builds, and serious collaboration."
            copy="If you are hiring for product-minded backend work, API development, or practical AI tooling, I am interested in conversations where engineering quality actually matters."
          />

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="card-hover flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/40 px-5 py-5"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                    {link.label}
                  </p>
                  <p className="mt-2 text-base text-white">{link.value}</p>
                </div>
                <span className="text-sm text-sky-200">Reach out</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
