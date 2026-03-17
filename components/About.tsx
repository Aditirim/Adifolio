"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950 text-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-blue-500"></span>
            <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">About Me</span>
            <span className="w-12 h-px bg-blue-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Profile Summary</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70">
            I am an Information Technology undergraduate skilled in <span className="text-white font-medium">mobile and web development</span>, <span className="text-blue-400 font-medium">AWS cloud</span>, and <span className="text-purple-400 font-medium">AI services</span>. 
            With a strong foundation in problem-solving, I have proven experience through national-level hackathons, internships, and leadership roles, consistently building scalable cross-platform applications.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-white/5 -z-10" />
      <div className="absolute top-0 bottom-0 right-[10%] w-px bg-white/5 -z-10" />
    </section>
  );
}
