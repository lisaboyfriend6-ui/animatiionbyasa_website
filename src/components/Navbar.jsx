import { useState } from 'react';

export default function Navbar({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-wider">
                ASA
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </div>
            <span className="ml-3 text-xs text-gray-500 hidden sm:block uppercase tracking-widest">Animation Streaming</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className={`text-sm font-medium transition-colors ${currentPage === 'catalog' ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
            >
              Catalog
            </button>
            <a
              href="https://t.me/animationbyasa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Telegram
            </a>
            <button
              onClick={() => onNavigate('admin')}
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800/50 mt-2 pt-4 flex flex-col gap-3">
            <button onClick={() => { onNavigate('home'); setMenuOpen(false); }} className="text-sm text-gray-300 hover:text-white text-left">Home</button>
            <button onClick={() => { onNavigate('catalog'); setMenuOpen(false); }} className="text-sm text-gray-300 hover:text-white text-left">Catalog</button>
            <a href="https://t.me/animationbyasa" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white">Telegram</a>
            <button onClick={() => { onNavigate('admin'); setMenuOpen(false); }} className="text-xs text-gray-600 hover:text-gray-400 text-left">Admin</button>
          </div>
        )}
      </div>
    </nav>
  );
}
