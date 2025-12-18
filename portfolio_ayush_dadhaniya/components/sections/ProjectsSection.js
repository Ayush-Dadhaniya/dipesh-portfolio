import React from "react"
import { GlitchText } from "@/components/glitch-text"
import { NeonButton } from "@/components/neon-button"
import { motion } from "framer-motion"

const projects = [
  {
    title: "I-Continue Donation",
    description: "I-Continue is a donation web application developed as a Minimum Viable Product (MVP) to meet real-world client requirements. The project focused on creating a user-friendly and scalable platform to facilitate online donations while following industry-standard development practices.",
    tech: ["Vue.js",".Net Core and Framework","MySQL Workbench", "IntelliJ IDEA", "Eclipse IDE", "Amazon EC2","Visual Studio Code"],
    github: "",
    live: "",
    image: "/i-continue-donation.png",
  },
  {
    title: "Application Server Load Balancer",
    description: "Designed and implemented an application server load balancer to efficiently distribute incoming traffic across multiple servers based on their current load. The system redirects excess requests from overloaded servers to available ones, ensuring high availability, improved performance, and reliable request handling using Ubuntu OS and Apache application servers.",
    tech: ["Ubuntu OS", "Apache as an Application Server."],
    github: "",
    live: "",
    image: "/app-server-load-balancer.png",
  },
  {
    title: "DCovid",
    description: "COVID Safe Web App used to record people visiting a place so that they can be tracked in case of an outbreak. People data being recorded and maintained considering all GDPR policy.",
    tech: ["PHP", "HTML", "CSS", "Javascript", "MySQL"],
    github: "",
    live: "",
    image: "/dcovid.png",
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Featured Projects" /></h2>
          <p className="text-lg italic text-gray-300"><b className="text-2xl">" </b>Some of my work that I'm proud of<b className="text-2xl"> "</b></p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
            >
              <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 shadow-xl hover:shadow-blue-500/40 rounded-3xl flex flex-col max-w-sm mx-auto p-0 overflow-hidden transition-shadow duration-300">
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title + ' thumbnail'}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                )}
                {/* Content */}
                <div className="flex flex-col flex-1 px-6 py-5 bg-gradient-to-b from-transparent to-slate-900/30 box-shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-100 border border-blue-400/30 rounded-full px-3 py-1 text-xs font-semibold shadow shadow-blue-500/10 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pb-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <NeonButton variant="secondary" className="px-5 py-2 text-sm">Code</NeonButton>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <NeonButton variant="primary" className="px-5 py-2 text-sm">Live</NeonButton>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 