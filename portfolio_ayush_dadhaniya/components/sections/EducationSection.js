import React from "react"
import { GlitchText } from "@/components/glitch-text"
import SpotlightCard2 from '../ui/SpotlightCard2';

const education = [
  {
    degree: "Professional Year",
    school: "Performance Education, Melbourne, Australia",
    period: "March 2021 – March 2022",
    keyLearnings: "Accelerating Interview Success (AIS), Professional Workplace Communication (PWC), Internship Preparation (IP), Australian Job Search Skills (AJS).",
    achievements: "Successfully completed all the course in a timely manner.",
  },
  {
    degree: "Master of Information Technology",
    school: "Royal Melbourne Institute of Technology University, Melbourne, Australia",
    period: "February 2018 – December 2019",
    keyLearnings: "Software and System Architecture and its Design and implementation, MVC Models, Agile SCRUM Methodology, Cloud Security, Secure E-Commerce, Database Concepts, Big Data Processing, IT Infrastructure and Security, Project Management, Algorithm and Analysis.",
    achievements: "Finished master's with Distinction and Secured High Distinction (HD) in Final Year Project.",
  },
  {
    degree: "Bachelor of Computer Engineering",
    school: "University of Mumbai, India",
    period: "June 2012 – June 2016",
    keyLearnings: "OOPS Concepts and its methodology, Cryptography and System Security, Artificial Intelligence, Data Warehouse and Mining, Data Structure, Distributed Database, Computer graphics, Operating systems, Web development, Software Engineering.",
    achievements: "Presented 2 technical papers at national level organized by IETE and 1 CSI paper organized by CSI in our university.",
  },
]

export default function EducationSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Education" /></h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <SpotlightCard2 key={`${edu.degree}-${index}`} className="bg-white/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-cyan-400 font-medium">{edu.school}</p>
                </div>
                <span className="border border-blue-400 text-blue-400 w-fit rounded px-2 py-1 text-xs mt-2 md:mt-0 font-semibold">{edu.period}</span>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-blue-300 mb-1">Key Learnings:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.keyLearnings}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-300 mb-1">Achievements:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.achievements}</p>
                </div>
              </div>
            </SpotlightCard2>
          ))}
        </div>
      </div>
    </section>
  )
} 