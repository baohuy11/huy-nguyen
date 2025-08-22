import React from 'react';
import Navbar from '../Navbar/Navbar';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import { useTheme } from '../../contexts/ThemeContext';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://x.com/Akira_npbh',
    icon: Twitter,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/np.baohuy.11101',
    icon: Facebook,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/baohuy11',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/huy-nguyen-phung-bao-57a768338/',
    icon: Linkedin,
  },
];

const Footer = ({ links }) => (
  <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <p className="text-gray-600 dark:text-gray-400">&copy; 2025 Nguyen Phung Bao Huy. All rights reserved.</p>
      <div className="flex space-x-4">
        {links.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
          >
            {React.createElement(link.icon, { size: 24 })}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function Layout({ currentPage, setCurrentPage, children }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} font-sans antialiased text-gray-800 flex flex-col min-h-screen`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-6 pt-24 pb-8 flex-grow">
        <div className="flex justify-between space-x-8">
          <div className="w-64 sticky top-24 self-start">
            <LeftSidebar socialLinks={socialLinks} />
          </div>
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </main>
      <Footer links={socialLinks} />
    </div>
  );
}
