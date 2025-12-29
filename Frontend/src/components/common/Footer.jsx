import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300 pt-12 pb-8 overflow-hidden border-t border-white/10">
      
      {/* Background Glows (Red/Orange Theme) */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid: 2 Cols on Mobile (Compact), 4 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 mb-10">
          
          {/* 1. Brand Section (Full width on mobile) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold font-['Syncopate'] bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
              GATHERING
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              The annual cultural phenomenon of COEP Tech. Celebrating creativity, talent, and tradition.
            </p>
          </div>

          {/* 2. Explore Links (Compact Column) */}
          <div className="col-span-1">
            <h4 className="text-white font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#events" className="hover:text-orange-500 transition-colors">Events</a></li>
              <li><a href="/#sports" className="hover:text-orange-500 transition-colors">Sports</a></li>
              <li><Link to="/team" className="hover:text-orange-500 transition-colors">Team</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
              <li><Link to="/passes" className="hover:text-orange-500 transition-colors">Passes</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info (Compact Column) */}
          <div className="col-span-1">
            <h4 className="text-white font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-gray-400">Shivajinagar, Pune<br/>MH 411005</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-500 shrink-0" />
                <a href="mailto:gathering@coep.ac.in" className="hover:text-white text-xs md:text-sm text-gray-400">gathering@coep.ac.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-500 shrink-0" />
                <span className="text-xs md:text-sm text-gray-400">+91 12345 67890</span>
              </li>
            </ul>
          </div>

          {/* 4. Socials (Full width on mobile or side-by-side on desktop) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] md:text-xs text-gray-600 text-center md:text-left">
          <p>© {currentYear} COEP Gathering. All rights reserved.</p>
          <p>Designed by <span className="text-orange-500">Web Team '26</span></p>
        </div>
      </div>
    </footer>
  );
}