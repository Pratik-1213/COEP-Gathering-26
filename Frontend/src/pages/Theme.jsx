import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Theme() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-20 px-4">
      
      {/* Animated gradient orb - Red/Orange */}
      <div 
        className="fixed w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20 blur-[100px] transition-all duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ff4500, #dc2626, #7f1d1d)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          zIndex: 0
        }}
      />

      {/* Subtle grid pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0
      }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl text-center mx-auto flex flex-col items-center">
        
        {/* Decorative icon */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-orange-500 animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-orange-500 opacity-50 animate-pulse" />
          </div>
        </div>

        {/* Theme name - Responsive Text Sizing */}
        {/* Changed: text-5xl on mobile to prevent cutting off, scaling up to 9xl on desktop */}
        <h1 className="w-full text-5xl sm:text-7xl md:text-9xl font-bold mb-6 md:mb-10 tracking-tight leading-tight">
          <span className="inline-block bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_35px_rgba(234,88,12,0.4)] py-2" style={{
            fontFamily: 'Georgia, serif',
          }}>
            Anandotsav
          </span>
        </h1>

        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-12 opacity-80">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_orange]" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 font-light px-2" style={{
          letterSpacing: '0.02em',
        }}>
          A magnificent celebration where joy meets tradition, and hearts unite in harmony. Experience the essence of togetherness through vibrant cultural expressions, soulful melodies, and the timeless spirit of festivity.
        </p>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-xl text-orange-400/80 italic max-w-2xl mx-auto px-4" style={{
          fontFamily: 'Georgia, serif',
        }}>
          Where every moment becomes a cherished memory, and every gathering transforms into an eternal celebration of life's most precious gift — happiness.
        </p>

      </div>

      {/* Corner accents - Pushed to edges */}
      <div className="absolute top-24 left-4 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 border-red-900/40 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-4 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 border-red-900/40 rounded-br-3xl pointer-events-none" />
    </div>
  );
}