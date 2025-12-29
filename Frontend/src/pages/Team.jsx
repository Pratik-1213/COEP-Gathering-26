import React from 'react';
// Import the JSON data. 
// If this file is dynamically loaded or fetched, you might need a useEffect. 
// For now, assuming it's imported locally as per your file structure.
import teamData from '../data/team.json'; 
import { Linkedin, Instagram } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden pt-24 pb-20">
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_30%,rgba(168,85,247,0.15),transparent_50%)] animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)] animate-[float_25s_ease-in-out_infinite_reverse]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold font-['Syncopate'] text-white mb-4 animate-[fade-in-up_1s_ease-out]">
          OUR TEAM
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {teamData.teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="animate-[fade-in-up_1s_ease-out]" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
            
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10 tracking-wider uppercase font-['Syncopate'] border-b border-white/10 pb-4 inline-block w-full">
              {section.title}
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {section.members.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative w-full max-w-sm aspect-3/4 rounded-2xl overflow-hidden bg-gray-900 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=Member"; }} // Fallback
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                  </div>

                  {/* Info Card - Slide Up */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-black to-transparent">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{member.name}</h3>
                    <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-4">{member.role}</p>
                    
                    {/* Social Icons */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.instagram && (
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors">
                          <Instagram size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Glare */}
                  <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;