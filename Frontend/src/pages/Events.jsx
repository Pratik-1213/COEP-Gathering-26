import React from "react";
import CircularGallery from '../components/CircularGallery';
// Ensure you have events.js in the right path
import { events } from '../data/events'; 

const Events = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-8 px-4">
        <h3 className="text-gray-500 tracking-[0.3em] text-sm uppercase mb-2">- COEP GATHERING -</h3>
        <h1 className="text-4xl md:text-6xl font-bold font-['Syncopate'] text-transparent bg-clip-text bg-linear-to-br from-cyan-300 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          EVENTS
        </h1>
      </div>

      {/* Gallery Container - Key to responsiveness */}
      <div className="flex-1 w-full h-[60vh] md:h-200 relative">
        <CircularGallery
          items={events}
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          font="bold 30px 'Syncopate', sans-serif" // Custom font
        />
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-0 w-full text-center text-gray-500 text-xs tracking-widest animate-bounce pointer-events-none">
        SCROLL TO EXPLORE
      </div>
    </div>
  );
};

export default Events;