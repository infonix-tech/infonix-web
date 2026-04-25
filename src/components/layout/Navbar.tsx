import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4 border-b border-surface' : 'bg-background py-6'
        }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative flex items-center">
            <div className="w-8 h-8 bg-secondary rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-sm"></div>
            </div>
            <span className="ml-3 text-2xl font-bold tracking-tight text-primary uppercase">
              Infonix<span className="text-secondary">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/services" className="text-sm font-bold text-primary hover:text-secondary transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-bold text-primary hover:text-secondary transition-colors">About Us</Link>
          <Link to="/industries" className="text-sm font-bold text-primary hover:text-secondary transition-colors">Customer Stories</Link>
          <Link to="/about" className="text-sm font-bold text-primary hover:text-secondary transition-colors">Careers</Link>
          <Link to="/contact" className="text-sm font-bold text-primary hover:text-secondary transition-colors">Resources</Link>

          <Link
            to="/contact"
            className="bg-secondary text-background px-8 py-3 rounded-full font-bold text-sm hover:bg-primary transition-all duration-300 shadow-md"
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary hover:text-secondary focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-xl absolute top-full left-0 w-full border-t border-surface">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-bold text-primary hover:text-secondary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 w-full text-center bg-secondary text-background font-bold py-3 rounded-md"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
