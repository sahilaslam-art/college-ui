
import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const address = "At:- Erka Colony, Post:- Amba, Dist:- Aurangabad, Bihar 824111.";
  const phoneNumber = "9031043316";
  const emailAddress = "dprppharmacy@gmail.com";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Microscope className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">PharmaCollege</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the way in pharmaceutical innovation since 1994. Committed to producing ethically grounded and clinically proficient pharmacy experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-teal-500 transition-colors">About PharmaCollege</Link></li>
              <li><Link to="/academics/admission" className="hover:text-teal-500 transition-colors">Admissions 2024</Link></li>
              <li><Link to="/academics/calendar" className="hover:text-teal-500 transition-colors">Academic Calendar</Link></li>
              <li><Link to="/staff" className="hover:text-teal-500 transition-colors">Faculty Directory</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500 transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Programs</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/academics/courses" className="hover:text-teal-500 transition-colors">Bachelor of Pharmacy</Link></li>
              <li><Link to="/academics/courses" className="hover:text-teal-500 transition-colors">Master of Science</Link></li>
              <li><Link to="/academics/courses" className="hover:text-teal-500 transition-colors">Pharm.D Program</Link></li>
              <li><Link to="/academics/courses" className="hover:text-teal-500 transition-colors">PhD in Drug Research</Link></li>
              <li><Link to="/academics/courses" className="hover:text-teal-500 transition-colors">Short-term Certifications</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 hover:text-teal-500 transition-colors">
                  <MapPin className="text-teal-500 w-5 h-5 shrink-0" />
                  <span>{address}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-center space-x-3 hover:text-teal-500 transition-colors">
                  <Phone className="text-teal-500 w-5 h-5 shrink-0" />
                  <span>+91 {phoneNumber}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${emailAddress}`} className="flex items-center space-x-3 hover:text-teal-500 transition-colors">
                  <Mail className="text-teal-500 w-5 h-5 shrink-0" />
                  <span>{emailAddress}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} PharmaCollege. All rights reserved. Professional Academic Institution.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
