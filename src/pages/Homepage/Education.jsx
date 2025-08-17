import React from 'react';
import { Users, Briefcase, Heart, Layers, MoreHorizontal } from 'lucide-react';

export default function Education() {
  return (
    <div className="space-y-8">
      {/* Affiliation */}
      <div>
        <h3 className="flex items-center text-xl font-semibold mb-2">
          <Users className="mr-2" /> Affiliation
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li>Institute of Science Tokyo, 3rd year (Science and Engineering)</li>
          <li>Digital Creation Club traP</li>
          <li>AIO Vietnam 2025</li>
        </ul>
      </div>

      {/* Working experience */}
      <div>
        <h3 className="flex items-center text-xl font-semibold mb-2">
          <Briefcase className="mr-2" /> Working experience
        </h3>
        <p className="text-gray-600 dark:text-gray-400">None</p>
      </div>

      {/* Interests */}
      <div>
        <h3 className="flex items-center text-xl font-semibold mb-2">
          <Heart className="mr-2" /> Interests
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li>Large Language Models</li>
          <li>Machine Translation</li>
          <li>Reinforcement Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
        </ul>
      </div>

      {/* Technology stack */}
      <div>
        <h3 className="flex items-center text-xl font-semibold mb-2">
          <Layers className="mr-2" /> Technology stack
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li><strong>Languages:</strong> Python, JavaScript, TypeScript, C++</li>
          <li><strong>Frameworks:</strong> PyTorch, TensorFlow, React, Node.js</li>
          <li><strong>Tools:</strong> Git, Docker, Kubernetes</li>
        </ul>
      </div>

      {/* Other */}
      <div>
        <h3 className="flex items-center text-xl font-semibold mb-2">
          <MoreHorizontal className="mr-2" /> Other
        </h3>
        <p className="text-gray-600 dark:text-gray-400"></p>
      </div>
    </div>
  );
}
