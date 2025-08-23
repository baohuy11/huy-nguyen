import React from 'react';
import { User } from 'lucide-react';

export default function CompactAboutMe() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 md:hidden">
      <div className="flex items-center space-x-4">
        {/* Placeholder for your icon */}
        <User className="w-12 h-12 text-indigo-500" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Huy Nguyen</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Pre-final year CS student focusing on ML/DL and LLMs.
          </p>
        </div>
      </div>
    </div>
  );
}