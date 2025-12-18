import React from "react"
import { GlitchText } from "@/components/glitch-text"
import SpotlightCard from '../ui/SpotlightCard2';

// Function to calculate duration between two dates
const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (years === 0 && months === 0) {
    return "Less than a month";
  } else if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
  }
};

const experiences = [
  {
    title: "Software Engineer",
    company: "TallyGroup, Melbourne, Australia",
    period: "October 2020 – Present",
    startDate: "2020-10-01",
    endDate: "Present",
    points: [
      "Actively participating in Daily Stand-ups and weekly scrum to add to the growth of the current product and services.",
      "Reporting to Team lead on daily basis to discuss the progress on task assigned and having face-to-face once a week to discuss the personal growth to ensure if one is doing good in the environment, they work in.",
      "Hands-on experience using Microsoft Dynamics 365 with experience in building CRM and managing different entities involved in the business logic.",
      "Contributing to the current TallyIt Billing Software to do Continuous Improvement (CI) and fixing the bugs and errors.",
      "Developing the new functionality in every sprint in timely manner to continuously add to the current software in agile approach.",
      "Technologies learned: C#, HTML, CSS, JavaScript, React.js, .Net Core, Azure Services.",
      "Successfully finished 1 project and currently working on TallyIt Billing Software for continuous development."
    ],
  },
  {
    title: "Freelance Software Developer",
    startDate: "2019-03-01",
    endDate: "2020-10-01",
    company: "Melbourne and Sydney, Australia",
    period: "March 2019 – October 2020",
    points: [
      "DConnect - CRM based web application with sending Email Campaign, Data Record and Data Integration features. Applications help in making a marketing journey and send emails with the help of CRON jobs based on their status. This product is developed in PHP, HTML, CSS, JavaScript, and MySQL as Database. With API integration of SendGrid for mails.",
      "DManage - This project involved integration of all three i.e., HR management solutions, employee onboarding, Time clock and rostering system based on the roles of the User. Its developed using ASP.Net Core (MVC Framework), React, HTML, CSS and MySQL as Database.",
      "DCovid - COVID Safe Web App used to record people visiting a place so that they can be tracked in case of an outbreak. People data being recorded and maintained considering all GDPR policy. This web app is built using PHP, HTML, CSS, JavaScript, and MySQL as Database."
    ],
  },
  {
    title: "Front End Developer Intern (Unpaid)",
    startDate: "2020-04-01",
    endDate: "2020-09-01",
    company: "CyQIQ, Melbourne, Australia",
    period: "April 2020 - September 2020",
    points: [
      "Daily scrum, Wrap-up meetings and a Weekly Scrum meeting which takes place once in a week.",
      "Reported to the manager on the daily basis regarding the progress of the task assigned.",
      "Working on the Website re-development of CyQIQ with agile approach with passion of completing all the task on priority basis mentioned in product backlog.",
      "Technologies learned: WordPress, HTML, CSS, JavaScript, React, ASP.Net Core.",
      "Was involved in two different projects in my tenure.",
      "Working as a Full stack Developer more than a soul Front End Developer. This helps me improve my knowledge and experience all-round from development to deployment and support.",
      "Working in a team of 4 developers with everyone primarily focusing on different goals to work collectively in a team and efficiently release the website for the stakeholders before the deadline."
    ],
  },
  {startDate: "2016-08-01",
    endDate: "2017-12-01",
    
    title: "Software Engineer",
    company: "In-Solutions Global Pvt Ltd., Mumbai, India",
    period: "August 2016 - December 2017",
    points: [
      "Managed 6 different Banking domain projects. With Client Onsite visit and problem-solving experience as well.",
      "Worked on 4 live projects and made 2 projects live during my tenure. My job roles include designing, coding, testing, configure, support and documenting all the steps taken in the process to develop and deliver the application.",
      "Check and supervise day-to-day reports and manage different transactions. Developed a system using the stored procedures, some automated script that operates on a particular time in the day, functions in database and various ETL operations to perform various tasks. Co-ordination with the UX/UI developers to maintain the design of the application.",
      "Effectively communicated with the project manager, operations, clients and other project teams about project progress, development, activities, and goals.",
      "Completed daily report cross verification which is generated from the operations team and giving a go-ahead to the team.",
      "Reported to project manager on day-to-day basis."
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Experience" /></h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <SpotlightCard key={`${exp.title}-${index}`} className="bg-white/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                  <span className="border border-blue-400 text-blue-400 w-fit rounded px-2 py-1 text-xs font-semibold">{exp.period}</span>
                  <span className="text-gray-400 text-xs italic">({calculateDuration(exp.startDate, exp.endDate)})</span>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">{point}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
} 