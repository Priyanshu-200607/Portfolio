import { SectionHeading } from "@/components/section-heading";
import { MotionSection } from "@/components/motion-section";

const principles = [
  {
    title: "Project-driven learning",
    copy: "I move fastest when the work is tangible. Most of what I know about backend systems came from building projects that had to actually function, not from following safe tutorials.",
  },
  {
    title: "Backend-first thinking",
    copy: "I naturally think in services, database flows, integration points, failure cases, and architecture decisions before I think in visuals. That gives my work technical depth.",
  },
  {
    title: "Practical over performative",
    copy: "I care more about whether a system is usable, scalable, and maintainable than whether it sounds impressive in a headline. I like clean structure and practical outcomes.",
  },
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="shell section-gap">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="A builder mindset shaped by real systems."
          copy="I am a student, but my approach is not academic-first. I build working applications, study the gaps exposed by those applications, and then improve the system. That loop is what made backend engineering feel natural to me."
        />

        <div className="space-y-5">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="glass-panel card-hover rounded-3xl p-6 md:p-7"
            >
              <h3 className="text-xl font-medium text-white">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#a6b69f] md:text-base">
                {principle.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
