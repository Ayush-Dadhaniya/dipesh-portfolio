import React from "react"
import { GlitchText } from "@/components/glitch-text"

export default function ContactSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Contact" /></h2>
          <p className="text-lg italic text-gray-300 max-w-2xl mx-auto"><b className="text-2xl">" </b>Let's connect! I'm always open to new opportunities, collaborations, or just a friendly chat. Reach out below!<b className="text-2xl"> "</b></p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/20 p-10 flex flex-col items-center gap-6 w-full max-w-md">
            <div className="text-center mb-2">
              <h3 className="text-xl font-bold text-white">Dipesh Dadhania</h3>
              <p className="text-cyan-300 text-sm font-medium">Software / Web Developer</p>
            </div>
            {/* Contact Info */}
            <div className="w-full flex flex-col gap-4 mt-2">
              <a href="mailto:dipeshdadhania4@gmail.com" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow hover:from-cyan-500 hover:to-blue-600 transition">
                {/* Email icon - classic envelope */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                dipeshdadhania4@gmail.com
              </a>
              <a href="tel:+61450786045" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow hover:from-cyan-500 hover:to-blue-600 transition">
                {/* Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +61 450 786 045
              </a>
              <a href="https://www.linkedin.com/in/dipeshdadhania4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow hover:from-cyan-500 hover:to-blue-600 transition">
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Dipesh-Dadhania/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow hover:from-cyan-500 hover:to-blue-600 transition">
                {/* GitHub icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <div className="flex items-center gap-3 px-4 py-3 bg-neutral-900/80 text-cyan-200 rounded-xl font-semibold shadow border border-blue-500/20">
                {/* Location icon - modern filled map pin */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 6.25 9.54 6.52 9.71a1 1 0 001 0C10.75 18.54 17 14.25 17 9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1110 6a2.5 2.5 0 010 5.5z" /></svg>
                Melbourne, Australia
              </div>
            </div>
            {/* Friendly message */}
            <div className="mt-6 text-center text-gray-300 text-sm italic">
              <span>“Let’s build something amazing together!”</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-12 text-center text-xs text-cyan-300/80 font-medium">
        &copy; {new Date().getFullYear()} Dipesh Dadhania. All rights reserved.
      </footer>
    </section>
  )
} 