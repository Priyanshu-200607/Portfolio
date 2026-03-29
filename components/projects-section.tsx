import { SectionHeading } from "@/components/section-heading";
import { MotionSection } from "@/components/motion-section";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <MotionSection id="projects" className="shell section-gap">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Systems built around backend depth, not demo polish."
          copy="These projects reflect how I like to work: solve a real technical problem, design the backend properly, and make the product coherent enough that the engineering decisions are visible from the outside."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="glass-panel card-hover flex h-full flex-col overflow-hidden rounded-[2rem]"
            >
              <div className="border-b border-white/8 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#dfff97]">
                      {project.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-medium text-white">
                      {project.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#a7b59e]">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-7 text-[#a6b69f] md:text-base">
                  {project.description}
                </p>

                <div className="soft-panel mt-6 rounded-2xl border p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#7c8b75]">
                    Why it matters
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#a6b69f]">
                    {project.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#b4FF00]/15 bg-[#b4FF00]/10 px-3 py-1 text-xs text-[#e9ffc0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a href={project.githubUrl} className="button-secondary">
                    GitHub
                  </a>
                  <a href={project.liveUrl} className="button-primary">
                    Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
