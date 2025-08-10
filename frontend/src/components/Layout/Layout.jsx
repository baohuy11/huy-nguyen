import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Layout({ currentPage, setCurrentPage, children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
