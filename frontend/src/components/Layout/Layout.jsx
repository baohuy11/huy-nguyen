import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Layout({ currentPage, setCurrentPage, children }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} font-sans antialiased text-gray-800`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">&copy; 2023 Huy Nguyen. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://x.com/Akira_npbh" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://www.facebook.com/np.baohuy.11101" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://github.com/baohuy11" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/huy-nguyen-phung-bao-57a768338/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
