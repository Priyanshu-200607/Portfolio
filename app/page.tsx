import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0B1A12] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(180,255,0,0.16),_transparent_30%),radial-gradient(circle_at_80%_18%,_rgba(34,197,94,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:72px_72px] opacity-20" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#b4FF00]/50 to-transparent" />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
