import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Linkedin } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-bold transition-colors ${isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
    }`;

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3 md:py-4 border-b border-surface' : 'bg-background py-4 md:py-6'
        }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group" aria-label="Infonix Solutions home">
          <div className="relative flex items-center">
            <div className="w-8 h-8 bg-secondary rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-sm"></div>
            </div>
            <span className="ml-3 text-xl sm:text-2xl font-bold tracking-tight text-primary uppercase">
              Infonix<span className="text-secondary">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks
            .filter((l) => l.name !== 'Home' && l.name !== 'Contact')
            .map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass} end>
                {link.name}
              </NavLink>
            ))}

          <a
            href="tel:+441244840089"
            className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
            aria-label="Call Infonix Solutions"
          >
            <Phone className="w-4 h-4" />
            01244 840089
          </a>

          <a
            href="https://www.linkedin.com/company/105996236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
            aria-label="Infonix Solutions on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <Link
            to="/contact"
            className="bg-secondary text-background px-6 xl:px-8 py-3 rounded-full font-bold text-sm hover:bg-primary transition-all duration-300 shadow-md"
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary hover:text-secondary focus:outline-none p-2 -mr-2"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-background shadow-xl absolute top-full left-0 w-full border-t border-surface max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block px-3 py-3 text-base font-bold rounded-md transition-colors ${isActive
                    ? 'text-secondary bg-surface/40'
                    : 'text-primary hover:text-secondary hover:bg-surface/30'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
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
