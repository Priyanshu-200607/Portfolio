import { SectionHeading } from "@/components/section-heading";
import { MotionSection } from "@/components/motion-section";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="shell section-gap">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Skills"
          title="Core tools I use to design and ship backend-heavy products."
          copy="My strongest work happens when backend architecture, data modeling, and practical product thinking meet. These are the tools and domains I rely on most."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="glass-panel card-hover rounded-[2rem] p-6 md:p-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#dfff97]">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#dde8cf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
