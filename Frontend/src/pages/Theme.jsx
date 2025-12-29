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
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated gradient orb following mouse */}
      <div 
        className="fixed w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #f97316, #ec4899, #a855f7)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Subtle grid pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-60" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* Decorative icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="w-16 h-16 text-orange-500 animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-orange-500 opacity-50 animate-pulse" />
          </div>
        </div>

        {/* Theme name with premium typography */}
        <h1 className="text-8xl md:text-9xl font-bold mb-12 tracking-tight">
          <span className="inline-block bg-linear-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient" style={{
            fontFamily: 'Georgia, serif',
            textShadow: '0 0 80px rgba(249, 115, 22, 0.3)',
          }}>
            Anandotsav
          </span>
        </h1>

        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-linear-to-r from-transparent via-orange-500 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <div className="h-px w-16 bg-linear-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Description with refined typography */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8" style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '0.02em',
          lineHeight: '1.8',
        }}>
          A magnificent celebration where joy meets tradition, and hearts unite in harmony. Experience the essence of togetherness through vibrant cultural expressions, soulful melodies, and the timeless spirit of festivity that brings communities together in pure bliss.
        </p>

        {/* Subtitle in elegant italic */}
        <p className="text-lg md:text-xl text-gray-500 italic max-w-2xl mx-auto" style={{
          fontFamily: 'Georgia, serif',
          letterSpacing: '0.03em',
        }}>
          Where every moment becomes a cherished memory, and every gathering transforms into an eternal celebration of life's most precious gift — happiness.
        </p>

        {/* Subtle accent line */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-32 bg-linear-to-r from-transparent via-orange-500/50 to-transparent rounded-full" />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-orange-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-orange-500/20" />
    </div>
  );
}