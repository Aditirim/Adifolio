import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsEducation } from "@/components/SkillsEducation";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <SkillsEducation />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </main>
  );
}
