import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Planner', path: '/planner' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'News', path: '/news' },
  ];

  return (
    <header className="glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          Mabel Fol’s
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-luxury-navy/60 ${
                  isActive ? 'text-luxury-navy' : 'text-luxury-navy/40'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-luxury-navy/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <Link to="/shop" className="p-2 hover:bg-luxury-navy/5 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-luxury-navy text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </Link>
          <Link to="/admin" className="p-2 hover:bg-luxury-navy/5 rounded-full transition-colors">
            <User size={20} />
          </Link>
          <button
            className="md:hidden p-2 hover:bg-luxury-navy/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-white border-t border-luxury-navy/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-luxury-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold">Mabel Fol’s</h2>
          <p className="text-luxury-white/60 text-sm leading-relaxed">
            Travel Smart. Travel Beautifully. Travel Boldly. Curating the world's most exquisite experiences for the modern explorer.
          </p>
        </div>
        
        <div>
          <h3 className="font-medium mb-6">Explore</h3>
          <ul className="space-y-4 text-sm text-luxury-white/60">
            <li><Link to="/planner" className="hover:text-white transition-colors">Itinerary Planner</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop eBooks</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Travel Blog</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-6">Support</h3>
          <ul className="space-y-4 text-sm text-luxury-white/60">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-6">Newsletter</h3>
          <p className="text-sm text-luxury-white/60 mb-4">Join our community for exclusive travel insights.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-white/40"
            />
            <button className="bg-luxury-white text-luxury-navy px-4 py-2 rounded-r-lg text-sm font-medium hover:opacity-90 transition-all">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 text-center text-xs text-luxury-white/40">
        <p>&copy; 2026 Mabel Fol’s Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};
