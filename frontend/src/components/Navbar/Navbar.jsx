import React from 'react';

// Helper component for the navigation links
const NavLink = ({ pageName, currentPage, setCurrentPage, children }) => (
  <a
    href="#"
    onClick={() => setCurrentPage(pageName)}
    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
      currentPage === pageName
          ? 'bg-indigo-500 text-white shadow text-lg'
          : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 text-lg'
    }`}
  >
    {children}
  </a>
);

const navLinks = [
  { pageName: 'homepage', text: 'Homepage' },
  { pageName: 'blogs', text: 'Blogs' },
  { pageName: 'works', text: 'Projects' },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Your name or brand */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Huy Nguyen
          </h1>
        </div>

        {/* Right side: Navigation links and Theme Toggle */}
        <div className="flex space-x-4 items-center">
          {navLinks.map(link => (
            <NavLink key={link.pageName} pageName={link.pageName} currentPage={currentPage} setCurrentPage={setCurrentPage}>
              {link.text}
            </NavLink>
          ))}
          <a href="/NGUYEN-PHUNG-BAO-HUY-RESUME.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg transition-colors duration-300 text-gray-700 hover:text-indigo-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 text-lg">
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}