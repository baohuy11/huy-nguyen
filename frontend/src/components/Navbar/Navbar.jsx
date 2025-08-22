import React from 'react';

// Helper component for the navigation links
const NavLink = ({ pageName, currentPage, setCurrentPage, children }) => (
  <a
    href="#"
    onClick={() => setCurrentPage(pageName)}
    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
      currentPage === pageName
          ? 'bg-indigo-500 text-white shadow'
          : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
    }`}
  >
    {children}
  </a>
);

export default function Navbar({ currentPage, setCurrentPage }) {
  

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Your name or brand */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Huy Nguyen
          </h1>
        </div>

        {/* Right side: Navigation links and Theme Toggle */}
        <div className="flex space-x-4 items-center">
          <NavLink pageName="homepage" currentPage={currentPage} setCurrentPage={setCurrentPage}>Homepage</NavLink>
          <NavLink pageName="blogs" currentPage={currentPage} setCurrentPage={setCurrentPage}>Blogs</NavLink>
          <NavLink pageName="works" currentPage={currentPage} setCurrentPage={setCurrentPage}>Projects</NavLink>
          <a href="/NGUYEN-PHUNG-BAO-HUY-RESUME.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg transition-colors duration-300 text-gray-700 hover:text-indigo-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}