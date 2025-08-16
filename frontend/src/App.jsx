import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './pages/Homepage/Home.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Works from './pages/Works/Works.jsx';
import Layout from './components/Layout/Layout.jsx';
import { ThemeProvider } from './contexts/ThemeContext';

// Main App component
export default function App() {
  // Use 'homepage' as the initial page state
  const [currentPage, setCurrentPage] = useState('homepage');

  // A function to render the correct component based on the current page state
  const renderPage = () => {
    switch (currentPage) {
      case 'homepage':
        return <Home />;
      case 'blogs':
        return <Blogs />;
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