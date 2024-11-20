"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceMetrics from '../ExperienceMetrics';
import GradientSection from '../Gradient';
import { IconType } from 'react-icons';

interface IconWithClassName extends IconType {
  className?: string;
}
import { BsGearFill } from 'react-icons/bs';
import { FiTool } from 'react-icons/fi';
import { MdDesignServices } from 'react-icons/md';
import { FaBullhorn } from 'react-icons/fa';
import { SiChatbot } from 'react-icons/si';
import { RiShieldCheckLine } from 'react-icons/ri';
import { BsDatabase } from 'react-icons/bs';
import { GiCog } from 'react-icons/gi';
import { FaNodeJs } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';

import {
  FaCode,
  FaServer,
  FaCertificate,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

// Interfaces
interface Service {
  icon: IconWithClassName;
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
    icon: FaCode as IconWithClassName,
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications with modern frameworks and best practices.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: FaServer as IconWithClassName,
    title: 'Backend Development',
    description: 'Developing secure and scalable server-side architectures and managing data flow.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'Django', 'MySQL', 'MongoDB']
  },

  {
    icon: GiCog as IconWithClassName,
    title: 'DevOps & Cloud',
    description: 'Setting up and maintaining cloud infrastructure and CI/CD pipelines.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions']
  },
  // 
  {
    icon: SiChatbot as IconWithClassName,
    title: 'AI Integration',
    description: 'Integrating AI chatbots to automate interactions and improve user engagement.',
    technologies: ['IBM WatsonX.ai', 'IBM Watson Assistant', 'Python', 'NLP libraries']
  },
  {
    icon: BsGearFill as IconWithClassName,
    title: 'API Design and Integration',
    description: 'Designing and integrating APIs for seamless communication between frontend and backend',
    technologies: ['REST', 'GraphQL', 'Express.js', 'Django', 'REST Framework']
  },
  {
    icon: RiShieldCheckLine as IconWithClassName,
    title: 'Web Application Security',
    description: 'Implementing security protocols to protect applications and user data.',
    technologies: ['2FA', 'JWT', 'SSL/TLS', 'encryption libraries']
  },
  {
    icon: BsDatabase as IconWithClassName,
    title: 'Web Scraping',
    description: 'Extracting data from websites for insights, research, and automation needs.',
    technologies: ['Scrapy', 'BeautifulSoup', 'Selenium']
  },
  {
    icon: FiTool as IconWithClassName,
    title: 'Troubleshooting and Maintenance',
    description: 'Providing reliable support and debugging to keep systems optimized and secure.',
    technologies: ['Debugging tools', 'Postman', 'Git', 'server monitoring']
  },
  {
    icon: MdDesignServices as IconWithClassName,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and aesthetically pleasing user interfaces to enhance user experience.',
    technologies: ['Figma', 'Sketch', 'Canva']
  },
  {
    icon: FaBullhorn as IconWithClassName,
    title: 'Digital Marketing & SEO Optimization',
    description: 'Enhancing online presence through strategic SEO and targeted digital marketing.',
    technologies: ['Google Analytics', 'SEO tools', 'WordPress',]
  },
];

const experiences: Experience[] = [
  {
    company: 'Elite Dev Enterprises | International Co. Ltd',
    role: 'Founder & Lead Developer',
    duration: '2024 - Present',
    location: 'Remote',
    description: [
      'Founded and led a software development company focusing on web and software solutions for businesses',
      'Developed custom ERP systems, management software, and full-stack applications for various clients',
      'Provided mentorship and technical guidance to junior developers in full-stack JavaScript frameworks'
    ],
    technologies: ['Next.js', 'Node.js', 'React', 'MongoDB', 'MySQL']
  },
  {
    company: 'Rush Digital',
    role: 'Lead Digital Marketer & Web Developer',
    duration: '2023 - Present',
    location: 'Remote',
    description: [
      'Launched a digital marketing site offering services including advertising, web design, and UI/UX development',
      'Implemented SEO strategies and optimized ad campaigns for various clients to increase online presence',
      'Designed and developed websites and branding materials for clients in multiple industries'
    ],
    technologies: ['WordPress', 'Google Analytics', 'SEO Tools', 'HTML', 'CSS']
  },
  {
    company: 'Medlink (Personal Project)',
    role: 'Full Stack Developer',
    duration: '2024',
    location: 'Remote',
    description: [
      'Developed a medical platform to streamline patient and doctor interactions, including secure authentication',
      'Integrated Google Sign-In and implemented 2FA for enhanced user security',
      'Built a chatbot using IBM Watson X for appointment booking and user support'
    ],
    technologies: ['Next.js', 'Django', 'MySQL', 'React', 'IBM Watson X']
  },
  {
    company: 'LunaCorp Data',
    role: 'Data Analyst & Web Developer',
    duration: '2024',
    location: 'Remote',
    description: [
      'Developed a data analysis platform for an educational institution to analyze and visualize student performance',
      'Built backend data processing workflows and front-end visualizations to support real-time insights',
      'Automated data reporting and improved accuracy in institutional assessments'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS']
  },
  {
    company: 'Compliance is Us',
    role: 'Full Stack Developer',
    duration: '2023 - Present',
    location: 'USA (Remote)',
    description: [
      'Developed a compliance consultation platform for a US-based company to streamline client and case management',
      'Implemented secure data handling and custom dashboard for client interaction and reporting',
      'Integrated RESTful APIs and backend services to support scalable client services'
    ],
    technologies: ['Next.js', 'Node.js', 'MySQL', 'JavaScript']
  },
  {
    company: 'FamousGates Hotel',
    role: 'Full Stack Developer',
    duration: '2022 - Present',
    location: 'Kenya (Remote)',
    description: [
      'Built a custom booking and management system for a luxury hotel in Kenya to enhance customer engagement',
      'Implemented responsive UI and a secure database for customer data and booking records',
      'Improved operational efficiency and provided real-time analytics for hotel management'
    ],
    technologies: ['Next.js', 'MongoDB', 'JavaScript', 'React']
  },
  {
    company: 'Concern Kenya',
    role: 'Web Developer',
    duration: '2021',
    location: 'Kenya',
    description: [
      'Developed a political campaign website to engage constituents and communicate campaign messaging',
      'Utilized SEO strategies to increase visibility and engagement with the site during the election period',
      'Provided ongoing support and updates as per campaign requirements'
    ],
    technologies: ['WordPress', 'SEO Tools', 'HTML', 'CSS']
  },
  {
    company: 'Google Developer Student Clubs (GDSC)',
    role: 'GDSC Lead',
    duration: '2023 - 2024',
    location: 'Remote',
    description: [
      'Led and organized workshops, hackathons, and training sessions on web development and Google technologies',
      'Mentored student developers and facilitated hands-on projects to enhance their technical skills',
      'Promoted innovation and collaboration within the student developer community'
    ],
    technologies: ['Google Cloud', 'Firebase', 'React', 'JavaScript', 'Python']
  },
  {
    company: 'Freelance Web Developer',
    role: 'Freelancer',
    duration: '2020 - Present',
    location: 'Remote',
    description: [
      'Built and deployed full-stack applications for small to medium-sized businesses',
      'Specialized in frontend development and UI/UX design to deliver user-centered solutions',
      'Provided ongoing maintenance and troubleshooting support for clients to optimize application performance'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Bootstrap', 'MongoDB']
  }
];

const certifications: Certification[] = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google/Course era',
    date: '2024',
    credential: '1HJER5NDTG6O'
  },
  {
    name: 'Tools of the Trade: Linux and SQL',
    issuer: 'Google/Course era',
    date: '2024',
    credential: '2LVES6T48SG8'
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google/Course era',
    date: '2024',
    credential: '6XAUB363MUQ7'
  },
  {
    name: 'Assets, Threats, and Vulnerabilities',
    issuer: 'Google/Course era',
    date: '2024',
    credential: 'SNUMH7WR32NK'
  },
  {
    name: 'Automate Cybersecurity Tasks with Python',
    issuer: 'Google/Course era',
    date: '2024',
    credential: '7WTWQKMZXHVD'
  },
  {
    name: 'Sound the Alarm: Detection and Response',
    issuer: 'Google/Course era',
    date: '2024',
    credential: 'CUJDCLGVWOPE'
  },
  {
    name: 'Play It Safe: Manage Security Risks',
    issuer: 'Google/Course era',
    date: '2024',
    credential: 'D54UZG5EGC9V'
  },
  {
    name: 'Put It to Work: Prepare for Cybersecurity Jobs',
    issuer: 'Google/Course era',
    date: '2024',
    credential: 'EKWOINTLVB6L'
  },
  {
    name: 'Technical Support Fundamentals',
    issuer: 'Google/Course era',
    date: '2024',
    credential: 'H8ZMTYQ73WED'
  }
];

// Components
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { icon: Icon, title, description, technologies } = service;

  return (
    <GradientSection className='h-full'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-transparent h-full rounded-xl transition-all duration-300"
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
        className="bg-transparent rounded-xl transition-all duration-300"
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
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />

        <p className="text-gray-300 max-w-2xl mx-auto">
          Specialized in delivering high-quality solutions across various domains of software development.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className=" px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />

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
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />

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
    { icon: SiTailwindcss, name: 'Tailwind css', level: 82 },
    { icon: SiDocker, name: 'Docker', level: 80 },
    { icon: SiKubernetes, name: 'Kubernetes', level: 75 },

    { icon: SiDjango, name: 'Django', level: 90 },
    { icon: FaNodeJs, name: 'Node.js', level: 80 },
    { icon: SiTensorflow, name: 'AI/ML', level: 87 }
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
        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />

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