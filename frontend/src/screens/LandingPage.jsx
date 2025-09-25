import React from 'react';
import { ArrowRightIcon, BookOpenIcon, BeakerIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LandingPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-900">🍎 AppleDex</span>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                    <a href="/admin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Admin</a>
                </div>
            </div>
             <div className="flex items-center">
                <button 
                    onClick={() => onLogin('user@manifest.build', 'password')}
                    className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Try Demo Login
                </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover, Catalog, and Savor</span>
              <span className="block text-blue-600">Every Apple Variety</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-600 sm:max-w-3xl">
              AppleDex is the ultimate tool for orchardists, hobbyists, and apple enthusiasts to track, manage, and explore the rich world of apple varieties.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <button 
                  onClick={() => onLogin('user@manifest.build', 'password')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <a href="/admin" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105">
                  Explore Admin Panel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="bg-white py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Everything you need to be an apple expert</p>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                    <BookOpenIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Detailed Cataloging</h3>
                <p className="mt-2 text-base text-gray-600">Record everything from tasting notes and origins to harvest dates and high-resolution images for each apple variety.</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                    <BeakerIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Personal Collection</h3>
                <p className="mt-2 text-base text-gray-600">Login to manage your own private collection of apple varieties. All your data is secure and accessible only by you.</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                    <GlobeAltIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Powerful Admin Panel</h3>
                <p className="mt-2 text-base text-gray-600">An auto-generated admin panel gives you full control over all data, user management, and file uploads with zero setup.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <p className="text-2xl font-bold">🍎 AppleDex</p>
            <p className="mt-4 text-base text-gray-400">&copy; 2024 AppleDex. All rights reserved. Built with Manifest.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
