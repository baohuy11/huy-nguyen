import React from 'react';

const projects = [
  {
    title: 'Paper Implementations',
    description: 'I have created a repository consisting of my implementations of AI/ML paper(s) from domains ranging from ML to LLMs, showcasing my eagerness to learn and explore the diverse fields to much deeper extent, whilst demonstrating my abilities to replicate the papers from scratch.',
    link: 'https://github.com/baohuy11/paper-implementations',
    tags: ['Python', 'PyTorch'],
    date: 'August 23, 2025',
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
    <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{project.date}</p>
    <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">{project.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span key={tag} className="bg-indigo-100 text-indigo-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">{tag}</span>
      ))}
    </div>
    <a href={project.link} className="text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold mt-6 inline-block">View Project &rarr;</a>
  </div>
);

export default function Works() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
