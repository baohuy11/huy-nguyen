import React from 'react';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function LeftSidebar() {
  return (
    <div className="w-64 ml-[-4rem] flex flex-col items-center space-y-6 sticky top-8">
      <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <svg className="w-20 h-20 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.997A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Huy Nguyen</h2>
        <p className="text-md text-gray-600 dark:text-gray-300 mt-2">
          NLP | Interested in RL Reasoning in LLMs and Multimodal LLMs | Exploring the intersection of Research and Engineering
        </p>
      </div>
      <div className="flex space-x-6">
        <a href="https://x.com/Akira_npbh" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
          <Twitter size={28} />
        </a>
        <a href="https://www.facebook.com/np.baohuy.11101" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
          <Facebook size={28} />
        </a>
        <a href="https://github.com/baohuy11" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/huy-nguyen-phung-bao-57a768338/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
          <Linkedin size={28} />
        </a>
      </div>
    </div>
  );
}
