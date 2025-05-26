"use client";
import { useState } from "react";

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* App Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              🧇 Waffle
            </h1>
          </div>

          {/* Settings Icon */}
          <div className="relative">
            <button
              onClick={toggleSettings}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Settings"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isSettingsOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            {/* Settings Dropdown */}
            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSettingsOpen(false);
                  }}
                >
                  Profile Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSettingsOpen(false);
                  }}
                >
                  Preferences
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSettingsOpen(false);
                  }}
                >
                  Theme Settings
                </a>
                <div className="border-t border-gray-100"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSettingsOpen(false);
                  }}
                >
                  Help & Support
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subtle bottom border with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"></div>
    </header>
  );
}
