import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Helper: Chunk Array into groups of 5 ---
const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// --- Animations ---
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
  }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const letterVariant = {
  hidden: { opacity: 0, y: 50, rotateX: 90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 }
  }
};

// --- Data (24 Images) ---
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070", title: "Crowd Euphoria", year: "2026", desc: "The roar of the stadium." },
  { id: 2, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070", title: "Neon Nights", year: "2026", desc: "Dancing under the lights." },
  { id: 3, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070", title: "Main Stage", year: "2026", desc: "Where magic happens." },
  { id: 4, src: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974", title: "The Vibe", year: "2026", desc: "Unfiltered energy." },
  { id: 5, src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974", title: "After Hours", year: "2026", desc: "The party never ends." },
  { id: 6, src: "https://images.unsplash.com/photo-1506157782155-2b412a0166be?q=80&w=2070", title: "Confetti Rain", year: "2026", desc: "A sky full of colors." },
  { id: 7, src: "https://images.unsplash.com/photo-1516450360452-9312bcd7e80c?q=80&w=2070", title: "Electric Soul", year: "2026", desc: "Lost in the rhythm." },
  { id: 8, src: "https://images.unsplash.com/photo-1459749411177-712961561f1c?q=80&w=2070", title: "Golden Hour", year: "2026", desc: "Sunset vibes & good times." },
  { id: 9, src: "https://images.unsplash.com/photo-1524368535928-5b561239f3ed?q=80&w=2070", title: "Vocal Power", year: "2026", desc: "Voices that echo." },
  { id: 10, src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070", title: "Laser Storm", year: "2026", desc: "Piercing the darkness." },
  { id: 11, src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070", title: "Festival Spirit", year: "2026", desc: "United by sound." },
  { id: 12, src: "https://images.unsplash.com/photo-1574169208507-84376194878d?q=80&w=2069", title: "Bass Drop", year: "2026", desc: "Wait for it..." },
  { id: 13, src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070", title: "Spotlight", year: "2026", desc: "The center of attention." },
  { id: 14, src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2076", title: "Unplugged", year: "2026", desc: "Raw acoustic emotions." },
  { id: 15, src: "https://images.unsplash.com/photo-1530419248307-be80b9468e77?q=80&w=2070", title: "Drumline", year: "2026", desc: "Heartbeat of the night." },
  { id: 16, src: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=2070", title: "Silent Disco", year: "2026", desc: "Rhythm in the mind." },
  { id: 17, src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070", title: "Surfing Waves", year: "2026", desc: "Hands in the air." },
  { id: 18, src: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070", title: "Techno Tunnel", year: "2026", desc: "Future sounds." },
  { id: 19, src: "https://images.unsplash.com/photo-1621319664082-881e1945f3ba?q=80&w=2070", title: "Rock Anthem", year: "2026", desc: "Strings on fire." },
  { id: 20, src: "https://images.unsplash.com/photo-1563841930606-67e26ce48b75?q=80&w=2070", title: "Backstage", year: "2026", desc: "Before the curtain rises." },
  { id: 21, src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070", title: "Road Trip", year: "2026", desc: "Journey to the venue." },
  { id: 22, src: "https://images.unsplash.com/photo-1505236858274-87f50f87d2b3?q=80&w=2070", title: "Sunset Chill", year: "2026", desc: "Moments of peace." },
  { id: 23, src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070", title: "Grand Finale", year: "2026", desc: "Ending with a bang." },
  { id: 24, src: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2070", title: "Afterparty", year: "2026", desc: "Until the sun comes up." },
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(1);
  const [modalImg, setModalImg] = useState(null); 
  const [isHovering, setIsHovering] = useState(false);

  // Split images into chunks of 5
  const imageRows = chunkArray(images, 5);

  // --- Auto-Play Logic ---
  useEffect(() => {
    let interval;
    if (!isHovering && !modalImg) {
      interval = setInterval(() => {
        setActiveId((prev) => {
          if (prev >= images.length) return 1;
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovering, modalImg]);

  // --- Modal Navigation Handlers ---
  const handleNext = useCallback((e) => {
    e?.stopPropagation(); // Prevent closing the modal
    if (!modalImg) return;
    const currentIndex = images.findIndex((img) => img.id === modalImg.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setModalImg(images[nextIndex]);
  }, [modalImg]);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    if (!modalImg) return;
    const currentIndex = images.findIndex((img) => img.id === modalImg.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setModalImg(images[prevIndex]);
  }, [modalImg]);

  // --- Keyboard Navigation ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalImg) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setModalImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImg, handleNext, handlePrev]);


  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* 1. Header Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-350 mx-auto text-center md:text-left relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariant}
        >
          <motion.p variants={textVariant} className="text-red-500 font-bold tracking-[0.4em] text-sm uppercase mb-4">
            Gathering '26 Archives
          </motion.p>
          
          <h1 className="font-['Syncopate'] text-5xl md:text-7xl lg:text-9xl font-bold leading-none overflow-hidden flex flex-wrap justify-center md:justify-start gap-2">
            {"GALLERY".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant} className="inline-block origin-bottom">
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={textVariant} className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Capturing the chaos, the glory, and the unforgettable memories of our journey through the years.
          </motion.p>
        </motion.div>
      </div>

      {/* 2. DESKTOP VIEW */}
      <div 
        className="hidden md:flex flex-col gap-16 px-12 pb-20 max-w-450 mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {imageRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex h-112.5 gap-4 w-full">
            {row.map((img) => (
              <DesktopCard 
                key={img.id} 
                img={img} 
                isActive={activeId === img.id} 
                onHover={() => setActiveId(img.id)}
                onClick={() => setModalImg(img)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* 3. MOBILE VIEW */}
      <div className="md:hidden flex flex-col gap-6 px-4 pb-20">
        {images.map((img, index) => (
          <MobileCard key={img.id} img={img} index={index} onClick={() => setModalImg(img)} />
        ))}
      </div>

      {/* 4. Fullscreen Modal with Navigation */}
      <AnimatePresence>
        {modalImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setModalImg(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-110">
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white backdrop-blur-md border border-white/10 transition-all z-110 group"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Image Container */}
            <motion.div 
               key={modalImg.id} // Key change triggers animation on nav
               initial={{ scale: 0.9, opacity: 0, x: 50 }} 
               animate={{ scale: 1, opacity: 1, x: 0 }} 
               exit={{ scale: 0.9, opacity: 0, x: -50 }}
               transition={{ type: "spring", duration: 0.5 }}
               className="relative"
               onClick={(e) => e.stopPropagation()} // Stop propagation here so clicking image doesn't close modal
            >
              <img 
                src={modalImg.src} 
                alt={modalImg.title}
                className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg shadow-2xl border border-white/10"
              />
              <div className="absolute bottom-6 left-0 w-full text-center">
                <h3 className="font-['Syncopate'] text-xl md:text-2xl uppercase tracking-widest text-white drop-shadow-md">{modalImg.title}</h3>
                <p className="text-red-400 text-xs tracking-[0.2em] font-bold mt-2">{modalImg.year}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white backdrop-blur-md border border-white/10 transition-all z-110 group"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

// --- Component: Desktop Card ---
const DesktopCard = ({ img, isActive, onHover, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      onMouseEnter={onHover}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      animate={{ flex: isActive ? 5 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div className="absolute inset-0 w-full h-full">
         <img 
            src={img.src} 
            alt={img.title} 
            className="w-full h-full object-cover filter brightness-[0.6] hover:brightness-100 transition-all duration-700" 
         />
      </motion.div>

      <div className={`absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

      <div className="absolute inset-0 flex flex-col justify-end p-6 overflow-hidden">
        {isActive ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-2 mb-2">
               <span className="w-6 h-0.5 bg-red-500"></span>
               <span className="text-red-400 font-bold tracking-widest text-[10px] uppercase">{img.year}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-['Syncopate'] font-bold uppercase leading-none mb-2 whitespace-nowrap">{img.title}</h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-62.5 truncate">{img.desc}</p>
          </motion.div>
        ) : (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
             <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 -rotate-90 origin-center">
               {img.title}
             </h3>
          </div>
        )}
      </div>
      
      <div className={`absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <Maximize2 size={16} />
      </div>
    </motion.div>
  );
};

// --- Component: Mobile Card ---
const MobileCard = ({ img, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="relative aspect-4/5 w-full rounded-xl overflow-hidden group shadow-lg"
    >
      <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h2 className="text-2xl font-['Syncopate'] font-bold uppercase text-white mb-1">{img.title}</h2>
        <p className="text-gray-400 text-sm">{img.desc}</p>
      </div>
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white">
        <Maximize2 size={18} />
      </div>
    </motion.div>
  );
};

export default Gallery;