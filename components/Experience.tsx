"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Bisht Enterprises",
      role: "React Native Intern",
      period: "Dec 2025 – Jan 2026",
      description: [
        "Developed production-ready mobile app features using React Native, implementing multiple user-facing screens.",
        "Integrated custom REST APIs and managed authentication, state, and data flow.",
        "Used Git/GitHub for team collaboration and tested APIs using Postman; gained backend exposure with Node.js, Express.js, and MongoDB.",
      ],
    },
    {
      company: "Innogeeks Technical Club",
      role: "Android Coordinator",
      period: "Aug 2025 – Present",
      description: [
        "Teaching Android development using Kotlin and Android Studio to junior members.",
        "Guiding students in cross-platform app development using Flutter with VS Code.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950 text-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-blue-500"></span>
            <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">Career</span>
            <span className="w-12 h-px bg-blue-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">Experience</h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-blue-500 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 shadow-[0_0_0_4px_rgba(0,0,0,1)] transition-colors duration-300 z-10">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors shadow-xl">
                  <div className="flex flex-wrap flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-white/70 mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-white/60 font-light flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-white/30 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
