import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { SiPostgresql,SiCpanel,SiHostinger,SiJira,SiQgis, SiFlutter, SiJavascript, SiTypescript, SiReact, SiJenkins, SiDocker, SiNginx, SiNestjs, SiGooglecloud, SiMongodb, SiPrisma, SiCplusplus, SiElastic, SiGithub, SiGrafana, SiKotlin } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "Nest.js", icon: SiNestjs, color: "#ea2845", url: "https://nestjs.com/" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063", url: "https://nodejs.org/" },
  { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
  { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
  { name: "QGIS", icon: SiQgis, color: "#589632", url: "https://qgis.org" },
  { name: "Flutter", icon: SiFlutter, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Kotlin", icon: SiKotlin, color: "#6b57ff", url: "https://kotlinlang.org/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
  { name: "Postgresql", icon: SiPostgresql, color: "#31648c", url: "https://www.postgresql.org/" },
  { name: "Prisma", icon: SiPrisma, color: "#186997", url: "https://www.prisma.io/" },
  { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28", url: "https://firebase.google.com/" },
  { name: "GitHub", icon: SiGithub, color: " ", url: "https://github.com/" },
  { name: "Docker", icon: SiDocker, color: "#38bdf8", url: "https://www.docker.com/" },
  { name: "Jenkins", icon: SiJenkins, color: "#D33833", url: "https://www.jenkins.io/" },
  { name: "Hostinger", icon: SiHostinger, color: "#6c43e7", url: "https://www.hostinger.com/" },
  { name: "AWS", icon: FaAws, color: "#ff9900", url: "https://aws.amazon.com/" },
  { name: "GCP", icon: SiGooglecloud, color: "#007acc", url: "https://cloud.google.com/" },
  { name: "cPanel", icon: SiCpanel, color: "#f34f29", url: "https://code.visualstudio.com/" },
  { name: "Elastic", icon: SiElastic, color: "#02bcb7", url: "https://git-scm.com/" },
  { name: "Grafana", icon: SiGrafana, color: "#fabb0f", url: "https://grafana.com/" },
  { name: "Jira", icon: SiJira, color: "#1558bc", url: "https://www.atlassian.com/software/jira" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
          ))}
        </div>
      </div>
    </section>
  );
}