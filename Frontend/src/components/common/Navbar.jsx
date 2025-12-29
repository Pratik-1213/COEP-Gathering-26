import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isNavigating = useRef(false);

  // Handle Hash Scroll and Active State
  useEffect(() => {
    if (location.pathname === "/") {
      const initialHash = location.hash || "#home";
      setActiveHash(initialHash);
      if (!location.hash) window.history.replaceState(null, "", "#home");
    } else {
      setActiveHash("");
    }
  }, [location.pathname]);

  // Scroll Spy for Home Page
  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = ["home", "theme", "events", "sports"];

    const handleScroll = () => {
      if (isNavigating.current) return;
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) current = id;
        }
      });
      if (activeHash !== `#${current}`) setActiveHash(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeHash, location.pathname]);

  const handleLinkClick = (hash) => {
    setActiveHash(hash);
    setIsOpen(false);
    isNavigating.current = true;
    setTimeout(() => { isNavigating.current = false; }, 1000);
  };

  const navLinkClasses = (isActive) =>
    `relative px-3 py-2 text-sm md:text-base font-medium transition-all duration-300 tracking-wide 
    ${isActive ? "text-orange-500 drop-shadow-[0_0_8px_rgba(255,69,0,0.8)]" : "text-gray-300 hover:text-white"}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link
            to="/#home"
            onClick={() => handleLinkClick("#home")}
            className="flex items-center gap-3 group"
          >
            {/* Logo Image */}
            <img 
              src="/Logo.png" 
              alt="Gathering Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]" 
            />
            
            {/* Text Logo */}
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 group-hover:animate-pulse font-['Syncopate']">
              GATHERING<span className="text-white text-sm ml-1 align-top">26</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Theme", "Events", "Sports"].map((item) => (
              <Link
                key={item}
                to={`/#${item.toLowerCase()}`}
                onClick={() => handleLinkClick(`#${item.toLowerCase()}`)}
                className={navLinkClasses(activeHash === `#${item.toLowerCase()}`)}
              >
                {item}
                {activeHash === `#${item.toLowerCase()}` && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 shadow-[0_0_10px_#ff4500]" />
                )}
              </Link>
            ))}
            
            {["Team", "Gallery", "Passes"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => navLinkClasses(isActive)}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-red-900/30 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {["Theme", "Events", "Sports"].map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              onClick={() => handleLinkClick(`#${item.toLowerCase()}`)}
              className="text-lg text-gray-300 hover:text-orange-500 tracking-widest uppercase font-medium"
            >
              {item}
            </Link>
          ))}
          <div className="w-12 h-px bg-red-500/30 my-2"></div>
          {["Team", "Gallery", "Passes"].map((item) => (
             <NavLink
             key={item}
             to={`/${item.toLowerCase()}`}
             onClick={() => setIsOpen(false)}
             className={({ isActive }) => 
               `text-lg tracking-widest uppercase font-medium ${isActive ? 'text-red-500' : 'text-gray-300'}`
             }
           >
             {item}
           </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}