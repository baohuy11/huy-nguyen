import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './pages/Homepage/Home.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Works from './pages/Works/Works.jsx';
import MagiBlog from './pages/Blogs/MagiBlog.jsx'; // New import
import Layout from './components/Layout/Layout.jsx';
import { ThemeProvider } from './contexts/ThemeContext';

// Main App component
export default function App() {
  // Use 'homepage' as the initial page state
  const [currentPage, setCurrentPage] = useState('homepage');
  const [currentBlogId, setCurrentBlogId] = useState(null); // New state for blog ID

  // A function to render the correct component based on the current page state
  const renderPage = () => {
    switch (currentPage) {
      case 'homepage':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'blogs':
        if (currentBlogId === 'magi') {
          return <MagiBlog />;
        }
        return <Blogs setCurrentPage={setCurrentPage} setCurrentBlogId={setCurrentBlogId} />;
      case 'works':
        return <Works />;
      default:
        return <Home />; // A default case is good practice
    }
  };

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  );
}