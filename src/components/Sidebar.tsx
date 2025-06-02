import React from 'react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
      <div className="flex items-center justify-center">
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
      </div>
      <nav className="space-y-2">
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Home</a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Dashboard</a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Users</a>
        <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Admin</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
