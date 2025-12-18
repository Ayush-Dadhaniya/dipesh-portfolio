"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Dipesh-Dadhania/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/dipeshdadhania4/' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-purple-900 via-pink-900 to-cyan-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Profile */}
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-white">Dipesh Dadhania</span>
            <div className="text-xs text-cyan-300">Software / Web Developer</div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="text-white hover:text-cyan-300 font-medium transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-900 via-pink-900 to-cyan-900 px-4 pb-4 pt-2 shadow-lg animate-fade-in-down">
          <div className="flex flex-col gap-3 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-white hover:text-cyan-300 font-medium text-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
} 