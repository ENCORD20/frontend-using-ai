import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effects and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar background change
      setIsScrolled(window.scrollY > 20);

      // 2. Active section detection
      // We check which section is currently in the viewport
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    }
    
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-gray-900' // Always dark for visibility or adjust based on hero bg
              }`}
            >
              TechFlow
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-blue-600' 
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                // Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-900 p-2"
              aria-label="Close menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-2xl font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-600'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full max-w-xs mt-8 bg-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg active:scale-95 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
