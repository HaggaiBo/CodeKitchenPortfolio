import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Hi Hotel',
    description: 'Intuitive hotel system enabling service requests, automated routing, management dashboards, and personalized guest messaging.',
    image: '/assets/hihotel-final.png',
    link: 'http://hi-hotel.co.il/login',
   tags: ['React', 'Nest.js', 'PostgreSQL'],
  },
  {
    title: 'Afriwork',
    description: 'A platform connecting job seekers and employers in Africa, featuring resume uploads, advanced filtering,a dedicated mobile app, and Telegram integration.',
    image: '/assets/afrifinal.png',
    link: 'https://afriworket.com/',
    tags: ['react-native', 'Next.js', 'Prisma'],
  },
  {
    title: 'Lead Estate',
    description: 'CRM system for managing real estate in Tel Aviv, featuring a centralized database, direct communication, built-in credit processing, and Google Maps integration.',
    image: '/assets/leadfinal.png',
    link: 'https://newone.icu//features/guest/homePage.php',
    tags: ['TypeScript', 'GCP', 'PostgreSQL'],
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}