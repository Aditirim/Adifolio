"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function SkillsEducation() {
  const skillsCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Core",
      skills: ["OOPS", "Data Structures", "Algorithms"],
    },
    {
      title: "App/Web",
      skills: ["React Native", "Flutter", "Kotlin", "JS", "HTML", "CSS"],
    },
    {
      title: "Cloud & AI",
      skills: ["AWS Web Services", "AWS Cloud Services", "AWS AI Services"],
    },
    {
      title: "Tools",
      skills: ["Firebase Firestore", "Cloudinary", "Git", "GitHub", "Android Studio", "VS Code", "Xcode"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-blue-500"></span>
              <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">Journey</span>
            </div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Education</h2>
            
            <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
              <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[8px] top-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-semibold">KIET Group of Institutions</h3>
              </div>
              <div className="text-blue-400 font-medium mb-4">B.Tech in Information Technology</div>
              <p className="text-white/60 mb-2">2024 &mdash; Present</p>
              <div className="inline-block px-3 py-1 bg-white/10 rounded-md border border-white/10 mt-2">
                <span className="text-white/80">CGPA: </span> 
                <span className="text-white font-bold">9.31</span> (1st Year)
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-purple-500 font-medium tracking-widest uppercase text-sm">Expertise</span>
              <span className="w-8 h-px bg-purple-500"></span>
            </div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Technical Skills</h2>

            <div className="space-y-6">
              {skillsCategories.map((category, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-medium mb-4 text-white/90">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <Badge 
                        key={sIdx} 
                        variant="secondary" 
                        className="bg-black/50 text-white/80 hover:bg-white hover:text-black border border-white/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
