"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-black text-white" id="home">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10 animate-pulse duration-[5000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -z-10 animate-pulse duration-[7000ms]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-sm tracking-wide text-white/80">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for Opportunities
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Building scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              cross-platform
            </span> <br />
            experiences.
          </h1>
          <p className="text-xl text-white/60 mb-8 max-w-xl font-light">
            Hi, I'm <strong className="text-white font-medium">Aditi Pandey</strong>, an IT undergraduate specialized in Mobile & Web Development, Cloud, and AI Services.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects">
              <Button size="lg" className="rounded-full gap-2 bg-white text-black hover:bg-white/90 h-14 px-8 text-base">
                View Work <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:aditirim2006@gmail.com">
              <Button size="lg" variant="outline" className="rounded-full gap-2 border-white/20 h-14 px-8 text-base hover:bg-white/10">
                Contact Me
              </Button>
            </a>
          </div>

          <div className="flex gap-6 text-white/50">
            <a href="https://github.com/Aditirim" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/aditi-pandey-21ab65326" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:aditirim2006@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group">
            {/* Dummy Image Placeholder */}
            {/* User will replace this asset later */}
            <img
              src="/adi_microsoft_img.jpeg"
              alt="Abstract Art / Aditi Placeholder"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-2xl font-bold tracking-tight mb-2">Aditi Pandey</div>
              <div className="text-white/60">B.Tech IT @ KIET Group of Institutions</div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-white/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-blue-500/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
}
