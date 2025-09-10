import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Projects from './pages/Projects/Projects';

import Footer from './components/Footer/Footer';

import BlogPostPage from './pages/BlogPostPage/BlogPostPage';

function App() {
  const [currentPage, setCurrentPage] = useState('homepage');

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="body-wrapper">
        <Sidebar />
        <main className="main-content">
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPostPage />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;