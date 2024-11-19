import React from 'react';

interface Project {
  name: string;
  description: string;
  link: string;
}

const sampleProjects: Project[] = [
  {
    name: 'Project One',
    description: 'This is a description of the first project.',
    link: 'https://github.com/yourproject1',
  },
  {
    name: 'Project Two',
    description: 'Description for the second project.',
    link: 'https://github.com/yourproject2',
  },
  {
    name: 'Project Three',
    description: 'This is another project description.',
    link: 'https://github.com/yourproject3',
  },
];

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-transparent border-2 border-cyan-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col justify-between">
        <h3 className="text-white text-2xl font-semibold">{project.name}</h3>
        <p className="text-white text-sm my-2">{project.description}</p>
        <button className="text-cyan-300 border-cyan-300 border-2 rounded-full px-4 py-2 mt-4 hover:bg-cyan-300 hover:text-black transition-all">
          Visit Project
        </button>
      </div>
    </a>
  );
};

const Card: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {sampleProjects.map((project, index) => (
        <PortfolioCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Card;
