"use client";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 text-center md:text-left relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <a href="#" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity mb-4 inline-block">
            ADITI<span className="text-blue-500">.</span>
          </a>
          <p className="text-white/50 text-sm max-w-sm mb-6 mx-auto md:mx-0">
            Building scalable cross-platform experiences and developing efficient web & mobile applications.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://github.com/Aditirim" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/aditi-pandey-21ab65326" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:aditirim2006@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:items-end justify-center h-full space-y-2">
          <p className="text-white/60 text-sm flex items-center gap-1 justify-center md:justify-end">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Aditi Pandey
          </p>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
