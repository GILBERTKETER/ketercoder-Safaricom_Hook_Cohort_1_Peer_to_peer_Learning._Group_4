import React from 'react';
import GradientSection from '../Gradient';
import { IconType } from 'react-icons';

interface IconWithClassName extends IconType{
  className?:string;
}
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaStar
} from 'react-icons/fa';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: IconWithClassName;
}

interface Project {
  name: string;
  description: string;
  githubLink: string;
  demoLink: string;
  technologies: Technology[];
  featured: boolean;
}

const sampleProjects: Project[] = [
  {
    name: 'NextGen E-Commerce',
    description: 'A modern e-commerce platform built with Next.js and TypeScript. Features include real-time cart updates, user authentication, and Stripe payment integration.',
    githubLink: 'https://github.com/yourproject1',
    demoLink: 'https://demo-project1.com',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ],
    featured: true
  },
  {
    name: 'DevConnect Platform',
    description: 'Social networking platform for developers. Includes real-time chat, code sharing, and project collaboration features.',
    githubLink: 'https://github.com/yourproject2',
    demoLink: 'https://demo-project2.com',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'TypeScript', icon: SiTypescript }
    ],
    featured: true
  },
  {
    name: 'AI Task Manager',
    description: 'Smart task management system with AI-powered task prioritization and time estimation features.',
    githubLink: 'https://github.com/yourproject3',
    demoLink: 'https://demo-project3.com',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ],
    featured: false
  },
];

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <GradientSection>
      <div  className="relative bg-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-2xl font-bold">{project.name}</h3>
            {project.featured && (
              <div className="flex items-center text-cyan-500">
                <FaStar className="mr-1" />
                <span className="text-sm">Featured</span>
              </div>
            )}
          </div>

          <p className="text-gray-300 mb-6 min-h-[80px]">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full"
              >
                <tech.icon className="mr-1 text-sm" />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-cyan-500 transition-colors"
            >
              <FaGithub className="mr-2" />
              <span>Source Code</span>
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-cyan-500 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </GradientSection>

  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id='projects' className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <FaCode className="text-cyan-500 text-3xl mr-3" />
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>

        </div>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore a collection of my recent projects showcasing my expertise in web development,
          from responsive design to full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProjects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;