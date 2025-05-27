import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/next.svg" alt="Logo" width={32} height={32} className="mr-3" />
        <h1 className="text-2xl font-bold">My Awesome App</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
