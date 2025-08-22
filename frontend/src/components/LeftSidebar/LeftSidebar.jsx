import React from 'react';

const UserProfile = {
  name: 'NGUYEN PHUNG BAO HUY',
  description: 'NLP | Interested in RL Reasoning in LLMs and Multimodal LLMs | Exploring the intersection of Research and Engineering',
  avatar: 'https://avatars.githubusercontent.com/u/131153339?v=4',
};

const Profile = ({ user }) => (
  <div className="text-center">
    <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden mx-auto">
      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
    </div>
    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">{user.name}</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{user.description}</p>
  </div>
);

const SocialLinks = ({ links }) => (
  <div className="flex space-x-6">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${link.name} profile`}
        className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
      >
        {React.createElement(link.icon, { size: 32 })}
      </a>
    ))}
  </div>
);

export default function LeftSidebar({ socialLinks }) {
  return (
    <div className="w-64 flex flex-col items-center space-y-6">
      <Profile user={UserProfile} />
      <SocialLinks links={socialLinks} />
    </div>
  );
}
