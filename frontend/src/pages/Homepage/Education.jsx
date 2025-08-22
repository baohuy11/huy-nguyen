import React from 'react';
import { Users, Briefcase, Heart, Layers, MoreHorizontal } from 'lucide-react';

const EducationSection = ({ icon, title, children }) => (
  <div>
    <h3 className="flex items-center text-2xl font-semibold mb-2">
      {React.createElement(icon, { className: "mr-2" })}
      {title}
    </h3>
    <div className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400">
      {children}
    </div>
  </div>
);

export default function Education() {
  return (
    <div className="space-y-8">
      <EducationSection icon={Users} title="Affiliation">
        <ul>
          <li>Institute of Science Tokyo, 3rd year (Science and Engineering)</li>
          <li>Digital Creation Club traP</li>
          <li>AIO Vietnam 2025</li>
        </ul>
      </EducationSection>

      <EducationSection icon={Briefcase} title="Working experience">
        <p>None</p>
      </EducationSection>

      <EducationSection icon={Heart} title="Interests">
        <ul>
          <li>Large Language Models</li>
          <li>Machine Translation</li>
          <li>Reinforcement Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
        </ul>
      </EducationSection>

      <EducationSection icon={Layers} title="Technology stack">
        <ul>
          <li><strong>Languages:</strong> Python, JavaScript, TypeScript, C++</li>
          <li><strong>Frameworks:</strong> PyTorch, TensorFlow, React, Node.js</li>
          <li><strong>Tools:</strong> Git, Docker, Kubernetes</li>
        </ul>
      </EducationSection>

      <EducationSection icon={MoreHorizontal} title="Other">
        <p></p>
      </EducationSection>
    </div>
  );
}
