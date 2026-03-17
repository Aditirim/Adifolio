"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "SheRaksha",
      subtitle: "Women Safety App",
      tech: ["React Native", "Firebase", "Native Modules"],
      description: [
        "Women safety app featuring SOS alerts, live location tracking, emergency contacts, and real-time notifications.",
        "Integrated React Native Vision Camera for QR scanning, Botpress chatbot, and native modules for auto SMS and calling.",
        "Implemented Lottie animations, Firestore backend, and background services."
      ],
      color: "from-pink-500/20 to-rose-500/5",
    },
    {
      title: "Pixora",
      subtitle: "Wireframe-to-Code Platform",
      tech: ["React.js", "Canva", "WebView"],
      description: [
        "A platform that converts wireframes, including hand-drawn designs, into ready-to-use React.js code.",
        "Designed UI templates using Canva and deployed the solution as a mobile app via WebView."
      ],
      color: "from-purple-500/20 to-blue-500/5",
    },
    {
      title: "Manager App",
      subtitle: "Client Project",
      tech: ["Flutter", "Firebase", "Cloudinary"],
      description: [
        "Developed a task and revenue management app for a clothing business.",
        "Used Firebase Firestore for real-time data and Cloudinary for image storage.",
        "Built for Android and iOS; executed iOS builds using Xcode (Runner.xcworkspace)."
      ],
      color: "from-emerald-500/20 to-cyan-500/5",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-px bg-purple-500"></span>
          <span className="text-purple-500 font-medium tracking-widest uppercase text-sm">Work</span>
          <span className="w-12 h-px bg-purple-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Card className={`h-full bg-gradient-to-br ${project.color} border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden relative backdrop-blur-sm bg-black/40`}>
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers className="w-24 h-24" />
                </div>
                <CardContent className="p-8 h-full flex flex-col pt-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">{project.title}</h3>
                    <div className="text-white/60 font-medium text-sm mb-4">{project.subtitle}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="outline" className="border-white/20 text-white/80 bg-black/50">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.description.map((desc, i) => (
                      <li key={i} className="text-white/70 text-sm font-light leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-white/40 rounded-full flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
