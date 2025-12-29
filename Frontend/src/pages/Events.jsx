import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom"; // Added for navigation
import { events } from '../data/events';

const AUTO_DELAY = 5000; // 5 Seconds

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  // --- Auto Cycle ---
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextEvent();
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const nextEvent = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const activeEvent = events[activeIndex];

  // --- Swipe Logic ---
  const onDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      nextEvent();
    } else if (info.offset.x > 50) {
      prevEvent();
    }
  };

  // --- Variants ---
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.8 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="relative min-h-dvh w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* ================= BACKGROUND ================= */}
      {/* Dynamic Blurred Background Image */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeEvent.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }} // Reduced opacity to keep bg darker
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={activeEvent.image} alt="bg" className="w-full h-full object-cover blur-[100px] scale-110" />
          {/* Heavy Overlay to ensure bg is black-ish */}
          <div className="absolute inset-0 bg-black/80" /> 
        </motion.div>
      </AnimatePresence>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      <FloatingParticles />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center justify-center h-full py-12">
        
        {/* Header */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
           className="text-center mb-8 md:mb-12 w-full"
        >
            <h3 className="text-orange-500 tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
                <Sparkles size={12} /> COEP Gathering 2026 <Sparkles size={12} />
            </h3>
            <h1 className="text-4xl md:text-7xl font-black font-['Syncopate'] text-white uppercase drop-shadow-2xl">
                Event <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">Showcase</span>
            </h1>
        </motion.div>

        {/* --- CAROUSEL STAGE --- */}
        <div 
            className="relative w-full flex items-center justify-center h-105 md:h-125 perspective-1000"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            
            {/* Desktop Side Previews */}
            <SideCard onClick={prevEvent} image={events[activeIndex === 0 ? events.length - 1 : activeIndex - 1].image} position="left" />
            <SideCard onClick={nextEvent} image={events[activeIndex === events.length - 1 ? 0 : activeIndex + 1].image} position="right" />

            {/* --- MAIN CARD --- */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={activeEvent.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={onDragEnd}
                    className="absolute w-[95%] md:w-187.5 h-full bg-[#0a0a0a] rounded-4xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(220,38,38,0.5)] border border-white/10 z-30 group touch-pan-y"
                >
                    {/* Card Image */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.img 
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "easeOut" }}
                            src={activeEvent.image} 
                            alt={activeEvent.text} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <motion.div 
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end items-start pointer-events-none"
                    >
                        <div className="flex flex-wrap gap-3 mb-4">
                            <Tag icon={Clock} text="7:00 PM" />
                            <Tag icon={MapPin} text="Main Stage" />
                        </div>

                        <h2 className="text-3xl md:text-6xl font-bold font-['Syncopate'] text-white uppercase leading-none mb-4 drop-shadow-xl">
                            {activeEvent.text}
                        </h2>
                        
                        <p className="text-gray-200 text-sm md:text-lg line-clamp-3 max-w-lg mb-8 font-light leading-relaxed drop-shadow-md">
                            {activeEvent.description}
                        </p>

                        <Link to="/passes" className="pointer-events-auto">
                            <button className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform shadow-lg hover:shadow-orange-500/50">
                                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                                    Get Passes <ArrowRight size={18} />
                                </span>
                            </button>
                        </Link>
                    </motion.div>

                    {/* Timer Bar */}
                    {!isPaused && (
                        <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
                            className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-red-500 to-orange-500 z-50 shadow-[0_0_15px_orange]"
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* --- CONTROL DECK (Arranged Properly) --- */}
        <div className="relative z-30 mt-10 md:mt-12">
            <div className="flex items-center gap-4 md:gap-6 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors">
                
                {/* Previous Button */}
                <button 
                    onClick={prevEvent}
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Pagination Dots */}
                <div className="flex gap-2.5 items-center">
                    {events.map((_, idx) => (
                        <div 
                            key={idx}
                            onClick={() => {
                                setDirection(idx > activeIndex ? 1 : -1);
                                setActiveIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                                idx === activeIndex 
                                ? 'w-8 bg-linear-to-r from-red-500 to-orange-500 shadow-[0_0_10px_orange]' 
                                : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button 
                    onClick={nextEvent}
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

// --- Sub-Components ---

const SideCard = ({ onClick, image, position }) => (
    <div 
        onClick={onClick}
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-65 h-95 opacity-40 hover:opacity-80 transition-all duration-500 cursor-pointer z-10 grayscale hover:grayscale-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105
            ${position === 'left' ? 'left-10 transform -rotate-y-12 scale-90' : 'right-10 transform rotate-y-12 scale-90'}
        `}
    >
        <img src={image} className="w-full h-full object-cover" alt="nav" />
        <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors" />
    </div>
);

const Tag = ({ icon: Icon, text }) => (
    <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase text-white border border-white/10 shadow-sm">
        <Icon size={12} className="text-orange-500" /> {text}
    </span>
);

const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
                    initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                    animate={{ 
                        y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default Events;