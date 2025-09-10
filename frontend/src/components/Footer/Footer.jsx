import React from 'react';
import './Footer.css';
import { socialLinks as socialLinksData } from '../../config/content';
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const iconComponents = {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin
};

const SocialLinks = ({ links }) => (
  <div className="footer-social-links">
    {links.map((link) => {
      const IconComponent = iconComponents[link.icon];
      return (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${link.name} profile`}
          className="footer-social-link"
        >
          {IconComponent ? <IconComponent size={24} /> : null}
        </a>
      );
    })}
  </div>
);

export default function Footer() {
  return (
    <footer className="footer-container">
      <SocialLinks links={socialLinksData} />
      <p>&copy; {new Date().getFullYear()} Huy Nguyen. All Rights Reserved.</p>
    </footer>
  );
}