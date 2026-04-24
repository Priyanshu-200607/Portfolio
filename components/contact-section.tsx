import { SectionHeading } from "@/components/section-heading";
import { MotionSection } from "@/components/motion-section";

const contactLinks = [
  {
    label: "Email",
    value: "priyanshuswami08@gmail.com",
    href: "mailto:priyanshuswami08@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Priyanshu-200607",
    href: "https://github.com/Priyanshu-200607",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/priyanshu-swami-93bbb7307",
    href: "https://www.linkedin.com/in/priyanshu-swami-93bbb7307",
  },
];

export function ContactSection() {
  return (
    <MotionSection id="contact" className="shell section-gap">
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
                className="soft-panel card-hover flex items-center justify-between rounded-2xl border px-5 py-5"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7c8b75]">
                    {link.label}
                  </p>
                  <p className="mt-2 text-base text-white">{link.value}</p>
                </div>
                <span className="text-sm text-[#dfff97]">Reach out</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
