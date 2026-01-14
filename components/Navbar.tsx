
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Microscope, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'About PharmaCollege', path: '/about' },
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: 'Chairman Message', path: '/about/chairman' },
      ],
    },
    {
      name: 'Academics',
      path: '#',
      children: [
        { name: 'Admission', path: '/academics/admission' },
        { name: 'Courses', path: '/academics/courses' },
        { name: 'Fee Details', path: '/academics/fees' },
        { name: 'Academic Calendar', path: '/academics/calendar' },
      ],
    },
    {
      name: 'Departments',
      path: '#',
      children: [
        { name: 'Pharmaceutics', path: '/departments/pharmaceutics' },
        { name: 'Pharmacology', path: '/departments/pharmacology' },
        { name: 'Pharmaceutical Chemistry', path: '/departments/pharmaceutical-chemistry' },
        { name: 'Pharmacognosy & Phytochemistry', path: '/departments/pharmacognosy' },
      ],
    },
    {
      name: 'Media',
      path: '#',
      children: [
        { name: 'Gallery', path: '/media/gallery' },
        { name: 'Videos', path: '/media/videos' },
      ],
    },
    { name: 'Staff', path: '/staff' },
    { name: 'Students', path: '/students' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group shrink-0">
            <div className="bg-teal-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Microscope className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline">
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Pharma</span>
              <span className="text-xl md:text-2xl font-light text-teal-600 tracking-tight">College</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-12 flex items-center"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <button className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-colors hover:bg-teal-50 hover:text-teal-700 ${location.pathname.startsWith(link.path) ? 'text-teal-600' : 'text-slate-600'}`}>
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors hover:bg-teal-50 hover:text-teal-700 ${location.pathname === link.path ? 'bg-teal-600 text-white hover:bg-teal-700 hover:text-white' : 'text-slate-600'}`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.children && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-2xl py-3 border border-slate-100 dropdown-animate">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-6 py-3 text-sm font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Always Visible Contact Button (Desktop) */}
            <div className="flex items-center space-x-3 ml-4">
              <Link 
                to="/contact" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${location.pathname === '/contact' ? 'bg-teal-50 border-teal-600 text-teal-700' : 'border-slate-100 text-slate-600 hover:border-teal-600 hover:text-teal-700'}`}
              >
                <PhoneCall className="w-4 h-4" />
                <span className="text-sm font-bold">Contact</span>
              </Link>
              <Link to="/academics/admission" className="px-6 py-2.5 bg-teal-600 text-white rounded-full text-sm font-bold shadow-lg shadow-teal-600/20 hover:scale-105 transition-transform">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Persistent Utility Icons (Mobile & Tablet) */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link 
              to="/contact" 
              className={`p-2.5 rounded-xl transition-all ${location.pathname === '/contact' ? 'bg-teal-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}
              aria-label="Contact Us"
            >
              <PhoneCall className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 bg-slate-900 text-white rounded-xl shadow-md z-[110]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out fixed inset-x-0 top-[72px] bg-white border-t border-slate-100 shadow-2xl overflow-y-auto ${isOpen ? 'max-h-[calc(100vh-72px)] opacity-100 pointer-events-auto translate-y-0' : 'max-h-0 opacity-0 pointer-events-none -translate-y-2'}`}>
        <div className="px-4 pt-4 pb-20 space-y-2">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <div className="py-2">
                    <div className="px-4 py-2 text-[10px] font-black text-teal-600 uppercase tracking-[0.2em]">
                      {link.name}
                    </div>
                    <div className="grid grid-cols-1 gap-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-6 py-3 text-sm font-semibold rounded-xl transition-colors ${location.pathname === child.path ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 text-sm font-bold rounded-xl uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'bg-teal-600 text-white shadow-md' : 'text-slate-900 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-slate-50 mt-4">
            <Link 
              to="/academics/admission" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 bg-teal-600 text-white rounded-2xl font-bold shadow-xl shadow-teal-600/20 active:scale-95 transition-transform"
            >
              Apply for Admission 2024
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
