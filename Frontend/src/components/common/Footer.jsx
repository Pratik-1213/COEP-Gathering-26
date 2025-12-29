import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300 pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-['Syncopate'] bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">
              GATHERING
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              The annual cultural phenomenon of COEP Technological University. 
              Celebrating creativity, talent, and tradition since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#events" className="hover:text-orange-500 transition-colors">Events</a></li>
              <li><a href="/#sports" className="hover:text-orange-500 transition-colors">Sports</a></li>
              <li><Link to="/team" className="hover:text-orange-500 transition-colors">Our Team</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
              <li><Link to="/passes" className="hover:text-orange-500 transition-colors">Get Passes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
                <span>Shivajinagar, Pune,<br/>Maharashtra 411005</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <a href="mailto:gathering@coep.ac.in" className="hover:text-white">gathering@coep.ac.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>+91 12345 67890</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} COEP Gathering. All rights reserved.</p>
          <p>Designed & Developed by <span className="text-orange-500">Web Team '26</span></p>
        </div>
      </div>
    </footer>
  );
}