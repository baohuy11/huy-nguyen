import React from 'react';
import { Github, Linkedin, Twitter, Facebook, ExternalLink, Calendar, ArrowUp } from 'lucide-react';
import Education from './Education.jsx';

export default function Home() {{
  return (
    <div className="space-y-8">
      {/* First Block: Social Media and Profile Icon */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex items-center space-x-12 max-w-5xl mx-auto">
        {/* Left side: Profile Icon and Social Links */}
        <div className="flex-shrink-0 flex flex-col items-center space-y-4">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.997A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
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

        {/* Right side */}
        <div className="flex-grow flex flex-col space-y-4">
          {/* Top: Name and Title */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">NGUYEN PHUNG BAO HUY</h2>
            <p className="text-2xl text-black dark:text-gray-300 mt-1">Student</p>
          </div>

          {/* Bottom: Introduction */}
          <div>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              I am a pre-final year student, studying Artificial Intelligence, with a focus on Machine Learning, Deep Learning, and Large Language Models.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 mt-4">
              I am passionate about reading books and research papers in my field.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 mt-4">
              My goal is to become an AI Engineer or a researcher in Artificial Intelligence.
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-8 max-w-5xl mx-auto">
        {/* Third Block: Articles */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Blogs</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I am passionate about sharing my knowledge and insights with the community. I plan to write articles on various topics related to AI, including tutorials, research summaries, and opinion pieces. Stay tuned for my upcoming blog posts!
          </p>
        </div>

        {/* Second Block: Background */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Background</h3>
          <div className="mt-4">
            <Education />
          </div>
        </div>
      </div>

      {/* Fourth Block: Works */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Projects</h3>
        <p className="text-gray-600 dark:text-gray-400">
          I am constantly working on new projects to apply my skills and learn new things. My portfolio showcases a range of projects, from small-scale experiments to larger, more complex applications. I am always open to collaboration and new ideas, so feel free to reach out if you have a project in mind.
        </p>
      </div>

      {/* Fifth Block: Achievements */}
      {/*
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Achievements</h3>
      <p className="text-gray-600 dark:text-gray-400">
        I am proud of the progress I have made in my academic and personal projects. I am always striving to improve and achieve new goals. This section will be updated with my latest accomplishments.
      </p>
    </div>
    */}

      {/* Sixth Block: Certificates */}
      {/*
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Certificates</h3>
      <p className="text-gray-600 dark:text-gray-400">
        I have earned a certificate from the Matsuo-Iwasawa Research lab for my contributions to a research project on Large Language Models. I am always seeking new opportunities to learn and grow, and I will be adding more certificates to this section as I acquire them.
      </p>
    </div> 
    */}
    </div>
  );
}}