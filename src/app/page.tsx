"use client"; // This is needed for client-side interactivity

import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("World");
  const [isFocused, setIsFocused] = useState(false);
  const [theme, setTheme] = useState("purple"); // Default theme
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value || "World");
  };

  const themes = {
    purple: {
      primary: "bg-gradient-to-r from-purple-600 to-indigo-600",
      secondary: "bg-purple-100 dark:bg-purple-900/20",
      accent: "bg-purple-500",
      text: "text-purple-700 dark:text-purple-300",
      border: "border-purple-300 dark:border-purple-700",
      ring: "ring-purple-500",
      button: "bg-purple-600 hover:bg-purple-700",
      buttonText: "text-white",
    },
    blue: {
      primary: "bg-gradient-to-r from-blue-600 to-cyan-600",
      secondary: "bg-blue-100 dark:bg-blue-900/20",
      accent: "bg-blue-500",
      text: "text-blue-700 dark:text-blue-300",
      border: "border-blue-300 dark:border-blue-700",
      ring: "ring-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
      buttonText: "text-white",
    },
    green: {
      primary: "bg-gradient-to-r from-green-600 to-teal-600",
      secondary: "bg-green-100 dark:bg-green-900/20",
      accent: "bg-green-500",
      text: "text-green-700 dark:text-green-300",
      border: "border-green-300 dark:border-green-700",
      ring: "ring-green-500",
      button: "bg-green-600 hover:bg-green-700",
      buttonText: "text-white",
    },
  };

  const currentTheme = themes[theme as keyof typeof themes];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-purple-600 border-r-transparent border-b-purple-600 border-l-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">Loading your experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${currentTheme.secondary} transition-all duration-500 ease-in-out`}>
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Hero Section with Animated Gradient */}
        <div className={`${currentTheme.primary} rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-500`}>
          <div className="relative px-6 py-16 sm:px-12 sm:py-24 backdrop-blur-sm">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
                Hello <span className="inline-block animate-pulse">{name}!</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Welcome to your personalized Next.js experience. Try changing your name below!
              </p>
            </div>
          </div>
        </div>
        
        {/* Interactive Input Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-300 hover:shadow-2xl">
          <div className="max-w-md mx-auto">
            <label 
              htmlFor="name-input" 
              className={`block text-sm font-medium ${currentTheme.text} mb-2 transition-colors`}
            >
              Enter your name:
            </label>
            <div className="relative">
              <input
                id="name-input"
                type="text"
                value={name === "World" ? "" : name}
                onChange={handleNameChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Your name"
                className={`w-full px-4 py-3 ${currentTheme.border} rounded-lg 
                  focus:outline-none focus:ring-2 ${currentTheme.ring} 
                  transition-all duration-300 ease-in-out
                  ${isFocused ? 'shadow-lg scale-105' : 'shadow'}
                  dark:bg-gray-700 dark:text-white`}
              />
              <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur-xl opacity-30 
                ${isFocused ? 'opacity-70' : 'opacity-0'} transition-opacity duration-300`}></div>
            </div>
            
            {/* Theme Selector */}
            <div className="mt-6">
              <p className={`text-sm font-medium ${currentTheme.text} mb-2`}>Choose a theme:</p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setTheme('purple')}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 
                    ${theme === 'purple' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-300 dark:ring-offset-gray-800' : ''}
                    transition-all duration-200 hover:scale-110`}
                  aria-label="Purple theme"
                ></button>
                <button 
                  onClick={() => setTheme('blue')}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                    ${theme === 'blue' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-300 dark:ring-offset-gray-800' : ''}
                    transition-all duration-200 hover:scale-110`}
                  aria-label="Blue theme"
                ></button>
                <button 
                  onClick={() => setTheme('green')}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600 
                    ${theme === 'green' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-300 dark:ring-offset-gray-800' : ''}
                    transition-all duration-200 hover:scale-110`}
                  aria-label="Green theme"
                ></button>
              </div>
            </div>
          </div>
        </div>
        
        


        
        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn
            </a>
            <a
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              href="https://vercel.com/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>
            <a
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
          </div>
          <p>Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
