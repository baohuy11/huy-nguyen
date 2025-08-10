import React from 'react';
import { Github, Linkedin, Twitter, Facebook, ExternalLink, Calendar, ArrowUp } from 'lucide-react';

export default function Home() {{
  return (
    <div className="space-y-8">
    {/* First Block: Social Media and Profile Icon */}
    <div className="bg-white p-8 rounded-xl shadow-lg flex items-center space-x-12">
      {/* Left side: Profile Icon */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
          [Your Icon]
        </div>
      </div>

      {/* Right side */}
      <div className="flex-grow flex flex-col space-y-4">
        {/* Top: Name and Title */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">NGUYEN PHUNG BAO HUY</h2>
          <p className="text-lg text-indigo-600 font-medium mt-1">AI Engineer</p>
        </div>

        {/* Bottom: Social Media Blocks */}
        <div className="w-full grid grid-cols-2 gap-4">
        
          {/* Twitter Block */}
          <a href="https://x.com/Akira_npbh" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:bg-gray-200 transition-colors duration-200">
            <div>
              <h4 className="text-md font-semibold text-gray-900">Twitter</h4>
              <span className="text-gray-500 text-sm">@Akira_npbh</span>
            </div>
            <Twitter className="text-gray-500" />
          </a>
          
          {/* Facebook Block */}
          <a href="https://www.facebook.com/np.baohuy.11101" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:bg-gray-200 transition-colors duration-200">
            <div>
              <h4 className="text-md font-semibold text-gray-900">Facebook</h4>
              <span className="text-gray-500 text-sm">@np.baohuy.11101</span>
            </div>
            <Facebook className="text-gray-500" />
          </a>

          {/* GitHub Block */}
          <a href="https://github.com/baohuy11" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:bg-gray-200 transition-colors duration-200">
            <div>
              <h4 className="text-md font-semibold text-gray-900">GitHub</h4>
              <span className="text-gray-500 text-sm">@baohuy11</span>
            </div>
            <Github className="text-gray-500" />
          </a>

          {/* LinkedIn Block */}
          <a href="https://www.linkedin.com/in/huy-nguyen-phung-bao-57a768338/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:bg-gray-200 transition-colors duration-200">
            <div>
              <h4 className="text-md font-semibold text-gray-900">LinkedIn</h4>
              <span className="text-gray-500 text-sm">@huy-nguyen-phung-bao</span>
            </div>
            <Linkedin className="text-gray-500" />
          </a>
        </div>
      </div>
    </div>

    {/* Second Block: About Me */}
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h3>
      <p className="text-gray-600">
        Institute of Science Tokyo
      </p>
    </div>

    {/* Third Block: Articles */}
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Articles</h3>
      <p className="text-gray-600">
        Will write something in the future
      </p>
    </div>

    {/* Fourth Block: Works */}
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Works</h3>
      <p className="text-gray-600">
        Some coding project
      </p>
    </div>

    {/* Fifth Block: Achievements */}
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achievements</h3>
      <p className="text-gray-600">
        None
      </p>
    </div>

    {/* Sixth Block: Certificates */}
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certificates</h3>
      <p className="text-gray-600">
        Matsuo-Iwasawa Lab Certificate
      </p>
    </div>
  </div>
  );
}}
