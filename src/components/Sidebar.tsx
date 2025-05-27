import React from 'react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
      <div className="flex items-center justify-center">
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
      </div>
      <nav className="space-y-2">
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Dashboard</a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Profile</a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Settings</a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Reports</a>
      </nav>
      <div className="pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400">Quick Links</p>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="block py-1 px-4 rounded hover:bg-gray-700 transition-colors text-sm">Support</a></li>
          <li><a href="#" className="block py-1 px-4 rounded hover:bg-gray-700 transition-colors text-sm">Documentation</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
