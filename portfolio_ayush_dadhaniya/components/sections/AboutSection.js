import React from "react"
import { GlitchText } from "@/components/glitch-text"
import SpotlightCard from '../ui/SpotlightCard';
export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="About Me" /></h2>
          <p className="text-lg font-bold text-gray-300 max-w-3xl italic mx-auto"><b className="text-2xl">" </b>
            Software Developer with 6+ years of experience in full-stack development, skilled in C#, React.js, Java, .NET, and databases like Oracle, MySQL, and MS-SQL, with hands-on experience in freelancing projects. Highly motivated, quick to learn, and eager to contribute my skills while growing professionally within your organization.
          <b className="text-2xl"> "</b></p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["C#","ReactJs", "MSSQL","ASP.Net core","Dynamics 365","Microsoft Azure", "PHP", "MySQL", "MVC","PL-SQL(T-SQL)","Database (Oracle)","Vue.Js","Java 8+","HTML","CSS","JavaScript", "MongoDB", "Bootstrap"].map(skill => (
                <span key={skill} className="bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded px-3 py-1 text-sm font-semibold">{skill}</span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 mt-4">Familiar with tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Jira","Microsoft Teams","Slack","Confluence","cPanel","GitHub","Plesk","Struts 2","WinSCP","Putty","Microsoft Office"].map(tool => (
                <span key={tool} className="bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded px-3 py-1 text-sm font-semibold">{tool}</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <SpotlightCard className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
              <p className="text-gray-300">Creating responsive, interactive user interfaces with modern frameworks</p>
            </SpotlightCard>
            <SpotlightCard className="bg-white/10 rounded-xl p-6" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
              <p className="text-gray-300">Building scalable APIs and server-side applications</p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
} 