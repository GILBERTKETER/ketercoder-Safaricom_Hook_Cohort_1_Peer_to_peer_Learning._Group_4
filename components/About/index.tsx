"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceMetrics from '../ExperienceMetrics';
import GradientSection from '../Gradient';
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCertificate,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiNextdotjs,
  SiGithub,
  SiAwsamplify
} from 'react-icons/si';

// Interfaces
interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential: string;
}

// Sample Data
const services: Service[] = [
  {
    icon: FaCode,
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications with modern frameworks and best practices.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    description: 'Developing robust server-side applications and RESTful APIs.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS']
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with native performance.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux']
  },
  {
    icon: FaDatabase,
    title: 'DevOps & Cloud',
    description: 'Setting up and maintaining cloud infrastructure and CI/CD pipelines.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions']
  }
];

const experiences: Experience[] = [
  {
    company: 'Tech Innovation Labs',
    role: 'Senior Full Stack Developer',
    duration: '2021 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led development of microservices-based architecture serving 1M+ users',
      'Implemented real-time data processing pipeline reducing latency by 40%',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Kubernetes']
  },
  {
    company: 'Digital Solutions Inc',
    role: 'Frontend Developer',
    duration: '2019 - 2021',
    location: 'New York, NY',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Improved application performance by 60% through optimization',
      'Collaborated with UX team to implement new design system'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components']
  }
];

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credential: 'AWS-CSA-2023'
  },
  {
    name: 'Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credential: 'GCP-PCD-2022'
  }
];

// Components
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { icon: Icon, title, description, technologies } = service;

  return (
    <GradientSection>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-transparent rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-cyan-500 text-2xl" />
        </div>
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </GradientSection>

  );
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <GradientSection className='mb-10'>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 border-l-2 border-cyan-500 last:pb-0"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full" />
      <div className="bg-transparent rounded-xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-white text-xl font-bold">{experience.role}</h3>
            <p className="text-cyan-500">{experience.company}</p>
          </div>
          <div className="text-right">
            <p className="text-white">{experience.duration}</p>
            <p className="text-gray-400">{experience.location}</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
    </GradientSection>
  );
};

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  return (
    <GradientSection>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-transparent rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <FaCertificate className="text-cyan-500 text-2xl mb-3" />
          <h3 className="text-white text-lg font-bold">{certification.name}</h3>
          <p className="text-gray-300">{certification.issuer}</p>
        </div>
        <p className="text-cyan-500">{certification.date}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-cyan-500/20">
        <p className="text-sm text-gray-400">Credential ID: {certification.credential}</p>
      </div>
    </motion.div>
    </GradientSection>
  );
};

// Sections
export const ServicesSection: React.FC = () => {
  return (
    <section id='services' className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"/>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Specialized in delivering high-quality solutions across various domains of software development.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"/>

        <p className="text-gray-300 max-w-2xl mx-auto">
          A track record of delivering impactful solutions at industry-leading companies.
        </p>
      </motion.div>
      <div className="max-w-4xl mx-auto ">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
      <ExperienceMetrics />
    </section>
  );
};

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"/>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional certifications and achievements in various technologies.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} />
        ))}
      </div>
    </section>
  );
};

const SkillsSection: React.FC = () => {
  const skills = [
    { icon: SiReact, name: 'React', level: 90 },
    { icon: SiTypescript, name: 'TypeScript', level: 85 },
    { icon: SiNextdotjs, name: 'Next.js', level: 88 },
    { icon: SiAwsamplify, name: 'AWS', level: 82 },
    { icon: SiDocker, name: 'Docker', level: 80 },
    { icon: SiKubernetes, name: 'Kubernetes', level: 75 }
  ];

  return (

    <section id='skills' className="py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"/>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Proficient in modern technologies and frameworks used in production environments.
        </p>
      </motion.div>
      <GradientSection className='lg:mx-0 mx-5'>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-transparent rounded-xl"
          >
            <div className="flex items-center mb-4">
              <skill.icon className="text-cyan-500 text-2xl mr-3" />
              <h3 className="text-white text-lg font-bold">{skill.name}</h3>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-sm text-cyan-500 font-semibold">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="flex h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-cyan-500 rounded-full"
                />
                <div className="flex-1 bg-cyan-500/10 rounded-full" />
              </div>
            </div>
          </motion.div>

))}
      </div>
      </GradientSection>

    </section>

  );
};

export { SkillsSection };