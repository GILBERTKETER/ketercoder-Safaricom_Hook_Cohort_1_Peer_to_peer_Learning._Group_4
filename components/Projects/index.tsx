import React from 'react';
import GradientSection from '../Gradient';
import { IconType } from 'react-icons';

interface IconWithClassName extends IconType {
  className?: string;
}
import { SiDjango } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiGoogle } from 'react-icons/si';

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaStar
} from 'react-icons/fa';
import {
  SiReact,
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
    name: 'Medlink',
    description: 'A healthcare platform connecting patients with doctors, featuring secure authentication, 2FA, and chatbot-based appointment booking.',
    githubLink: 'https://github.com/gilbertketer/medlink.git',
    demoLink: 'https://medlink.gk.h.cw.co.ke',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Django', icon: SiDjango },
      { name: 'React', icon: SiReact },
      { name: 'MySQL', icon: SiMysql }
    ],
    featured: true
  },

  {
    name: 'LunaCorp Data',
    description: 'An educational data analysis tool designed to process and visualize student performance metrics in real-time.',
    githubLink: 'https://github.com/gilbertketer/lunacorpdata.git',
    demoLink: 'https://lunacorpdata.co.ke',
    technologies: [
      { name: 'PHP', icon: SiPhp },
      { name: 'MySQL', icon: SiMysql },
      { name: 'JavaScript', icon: SiJavascript }
    ],
    featured: false
  },
  {
    name: 'Compliance is Us',
    description: 'A compliance management platform offering secure data handling, client dashboards, and detailed reporting for US-based clients.',
    githubLink: 'https://github.com/gilbertketer/ciu.git',
    demoLink: 'https://barareconsultinggroup.com',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MySQL', icon: SiMysql }
    ],
    featured: true
  },

  {
    name: 'SmartCampus',
    description: 'A campus management system that streamlines student and faculty management with real-time data and campus resource scheduling.',
    githubLink: 'https://github.com/gilbertketer/tmu-scms.git',
    demoLink: 'https://smartcampus-lilac.vercel.app',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Express.js', icon: SiExpress }
    ],
    featured: true
  },

  {
    name: 'Concern Kenya',
    description: 'A political campaign website built for a Kenyan politician, emphasizing constituent engagement and campaign updates.',
    githubLink: '#',
    demoLink: 'https://concernekenya.co.ke',
    technologies: [
      { name: 'WordPress', icon: SiWordpress },
      { name: 'SEO Tools', icon: SiGoogle },
      { name: 'HTML', icon: SiHtml5 }
    ],
    featured: false
  }
];


const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <GradientSection>
      <div className="relative bg-transparent rounded-xl overflow-hidden shadow-lg h-full transition-all duration-300">
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