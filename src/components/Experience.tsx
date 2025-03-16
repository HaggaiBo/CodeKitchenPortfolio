import React from "react";
import { ExperienceCard } from "./ui/ExperienceCard";
import { Briefcase } from "lucide-react";


const experiences = [
  {
    title: "HORIZON",
    company: "A Digital Revolution in Fish Importing",
    lucide:{Briefcase},
    description: `An intelligent system that routes and synchronizes orders so that each stakeholder receives precise information.
    Full transparency throughout the process – every link in the supply chain knows what is happening at any given moment. 
   Integration with inventory and logistics systems to prevent overbooking and excess stock.`,
    skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
  },
  {
    title: "BizHub",
    company: "Connecting Small Businesses in Africa to a Digital Platform",
    description: `One-click creation of a digital business profile, with promotional options.
    Built-in tools for creating discounts, special offers, and customer loyalty programs.
     Seamless integration with Telegram and payment systems, allowing easy order processing and transactions.`,
    skills: ["Nest.js", "PostgreSQL", "Kotlin", "Firebase", "Team Collaboration"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
