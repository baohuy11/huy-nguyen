import React from 'react';
import './Sidebar.css';
import { socialLinks as socialLinksData } from '../../config/content';
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const iconComponents = {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin
};

const UserProfile = {
  name: 'NGUYEN PHUNG BAO HUY',
  description: 'Interested in RL Reasoning in LLMs and Multimodal LLMs | Exploring the intersection of Research and Engineering',
  avatar: 'https://avatars.githubusercontent.com/u/131153339?v=4',
};

const Profile = ({ user }) => (
  <div className="profile-container">
    <div className="avatar-container">
      <img src={user.avatar} alt={user.name} className="avatar-image" />
    </div>
    <h2 className="profile-name">{user.name}</h2>
    <p className="profile-description">{user.description}</p>
  </div>
);

const SocialLinks = ({ links }) => (
  <div className="social-links-container">
    {links.map((link) => {
      const IconComponent = iconComponents[link.icon];
      return (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${link.name} profile`}
          className="social-link"
        >
          {IconComponent ? <IconComponent size={28} /> : null}
        </a>
      );
    })}
  </div>
);

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Profile user={UserProfile} />
      <SocialLinks links={socialLinksData} />
    </div>
  );
}