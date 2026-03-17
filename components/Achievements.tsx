"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Trophy } from "lucide-react";

export function Achievements() {
  const certifications = [
    { name: "AWS Certified Cloud Practitioner (CLF-02)", date: "Dec 2025" },
    { name: "AWS Certified AI Practitioner (AIF-01)", date: "Dec 2025" },
  ];

  const achievements = [
    "2nd Prize at CSI-InnoWave MAIT Hackathon (National Hackathon).",
    "Top 20 team at CodeForBharat Season 2 (National Hackathon).",
    "Second Branch Topper (1st Year), IT Department.",
    "Received college awards and certifications for excellence in hackathons and academics.",
    "300+ DSA problems solved on LeetCode, GFG, and HackerRank.",
  ];

  return (
    <section id="achievements" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-cyan-500"></span>
              <span className="text-cyan-500 font-medium tracking-widest uppercase text-sm">Credentials</span>
            </div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight flex items-center gap-3">
              Certifications <Award className="w-8 h-8 text-cyan-400" />
            </h2>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-medium text-white/90">{cert.name}</div>
                  </div>
                  <div className="text-sm text-cyan-400/80 font-medium whitespace-nowrap bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm">Milestones</span>
              <span className="w-8 h-px bg-yellow-500"></span>
            </div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight flex items-center gap-3">
              Achievements <Trophy className="w-8 h-8 text-yellow-400" />
            </h2>

            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                  <p className="text-white/80 font-light leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
