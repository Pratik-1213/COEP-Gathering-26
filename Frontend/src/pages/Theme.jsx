// Design 1
// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Settings, Sparkles, MapPin } from 'lucide-react';

// const Theme = () => {
//   return (
//     <div className="min-h-screen w-full bg-[#050505] relative flex flex-col items-center justify-center overflow-hidden">
      
//       {/* ================= BACKGROUND: THE ENGINEERING MANDALA ================= */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        
//         {/* 1. The Central Tech Core */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-37.5 h-37.5 bg-orange-600/20 rounded-full blur-[80px]" />

//         {/* 2. Inner Gear (Fast, Tech-like) */}
//         <motion.div 
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute border border-orange-500/20 w-75 h-75 rounded-full border-dashed"
//         >
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500/50 rounded-full" />
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-orange-500/50 rounded-full" />
//         </motion.div>

//         {/* 3. Middle Gear (The Cogwheel - Representing Engineering) */}
//         <motion.div 
//              animate={{ rotate: -360 }}
//              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//              className="absolute w-125 md:w-150 h-125 md:h-150 border border-white/5 rounded-full flex items-center justify-center"
//         >
//              {/* Creating Gear Teeth */}
//              {[...Array(12)].map((_, i) => (
//                 <div 
//                     key={i}
//                     className="absolute w-8 h-8 border border-orange-500/30 bg-black/50 backdrop-blur-sm"
//                     style={{
//                         top: '50%',
//                         left: '50%',
//                         transform: `translate(-50%, -50%) rotate(${i * 30}deg) translate(250px) md:translate(300px)`
//                     }}
//                 />
//              ))}
//              <div className="w-[95%] h-[95%] border border-orange-500/10 rounded-full" />
//         </motion.div>

//         {/* 4. Outer Ring (The Mandala - Representing Tradition) */}
//         <motion.div 
//              animate={{ rotate: 360 }}
//              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//              className="absolute w-175 md:w-225 h-175 md:h-225 border border-white/5 rounded-full flex items-center justify-center opacity-50"
//         >
//              {[...Array(8)].map((_, i) => (
//                 <div 
//                     key={i}
//                     className="absolute w-4 h-4 bg-red-600/40 rounded-full blur-[2px]"
//                     style={{
//                         top: '50%',
//                         left: '50%',
//                         transform: `translate(-50%, -50%) rotate(${i * 45}deg) translate(350px) md:translate(450px)`
//                     }}
//                 />
//              ))}
//         </motion.div>

//         {/* 5. Texture */}
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
//       </div>


//       {/* ================= MAIN CONTENT ================= */}
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">

//         {/* --- COEP Branding --- */}
//         <motion.div 
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8 flex flex-col items-center gap-2"
//         >
//             <div className="flex items-center gap-2 px-4 py-1.5 border border-orange-500/30 rounded-full bg-orange-950/20 backdrop-blur-md">
//                 <MapPin size={12} className="text-orange-500" />
//                 <span className="text-orange-100/80 font-bold tracking-widest text-[10px] uppercase">Shivajinagar, Pune</span>
//             </div>
//             <h3 className="text-white/60 font-mono text-sm tracking-[0.2em] mt-2 uppercase">
//                 College of Engineering Pune
//             </h3>
//         </motion.div>

//         {/* --- MAIN TITLE BLOCK --- */}
//         <div className="relative py-4 md:py-10">
//             {/* The "2026" Big Number Background */}
//             <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 select-none pointer-events-none" style={{ fontFamily: "'Syncopate', sans-serif" }}>
//                 2026
//             </h1>

//             {/* The Main Event Title */}
//             <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="relative z-10"
//             >
//                 <div className="flex items-center justify-center gap-4 mb-2">
//                      <div className="h-px w-8 md:w-20 bg-orange-500" />
//                      <span className="text-xl md:text-3xl font-light text-white tracking-[0.2em] uppercase">Gathering</span>
//                      <div className="h-px w-8 md:w-20 bg-orange-500" />
//                 </div>
                
//                 <h2 
//                     className="text-5xl md:text-8xl lg:text-9xl font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-white via-orange-400 to-orange-600 drop-shadow-[0_0_35px_rgba(234,88,12,0.4)]"
//                     style={{ fontFamily: "'Cinzel Decorative', serif" }}
//                 >
//                     Anandotsav
//                 </h2>
//             </motion.div>
//         </div>


//         {/* --- Description & Details --- */}
//         <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="mt-12 max-w-3xl"
//         >
//             <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
                
//                 {/* Left: The Quote */}
//                 <div className="flex-1 border-r-0 md:border-r border-white/10 pr-0 md:pr-12">
//                     <p className="text-lg text-gray-300 font-light italic leading-relaxed">
//                         "Where every moment becomes a cherished memory, and every gathering transforms into an eternal celebration of life's most precious gift - happiness."
//                     </p>
//                 </div>

              

//             </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// // --- Sub-Component: Feature Item ---
// const FeatureItem = ({ text }) => (
//     <div className="flex items-center gap-3 group cursor-default">
//         <div className="w-8 h-8 rounded-full bg-white/5 border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500 transition-colors">
//             <Sparkles size={14} className="text-orange-500" />
//         </div>
//         <span className="text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
//             {text}
//         </span>
//     </div>
// );

// export default Theme;


// Design 2
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame } from 'lucide-react';

const Theme = () => {
  const containerRef = useRef(null);
  
  // Parallax Scroll Effects
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Reduced parallax distance for smoother mobile feel
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-[#030000] relative flex flex-col items-center justify-center overflow-hidden py-16 md:py-32">
      
      {/* ================= BACKGROUND: THE ECLIPSE ENGINE ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* 1. Core Light Source (Smaller on Mobile) */}
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-45 h-45 md:w-75 md:h-75 bg-orange-600 rounded-full blur-[80px] md:blur-[150px] opacity-50 md:opacity-60"
        />

        {/* 2. Rotating Rings (Responsive Sizes) */}
        {/* Outer Ring: 300px on mobile, 600px/900px on tablet/desktop */}
        <div className="absolute w-75 h-75 md:w-150 md:h-150 lg:w-225 lg:h-225 border border-white/5 rounded-full flex items-center justify-center">
            <motion.div
                style={{ rotate }}
                className="w-full h-full border-t border-l border-orange-500/20 rounded-full"
            />
        </div>
        
        {/* Inner Ring: 220px on mobile, 450px/650px on tablet/desktop */}
        <div className="absolute w-55 h-55 md:w-112.5 md:h-112.5 lg:w-162.5 lg:h-162.5 border border-white/5 rounded-full flex items-center justify-center opacity-70">
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-b border-r border-red-500/30 rounded-full"
            />
        </div>

        {/* 3. Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" />
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* --- Top Tagline --- */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
        >
            <div className="h-px w-8 md:w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase">COEP Gathering 2026</span>
            <div className="h-px w-8 md:w-12 bg-orange-500" />
        </motion.div>


        {/* --- MASSIVE TITLE LAYOUT --- */}
        <div className="relative w-full py-6 md:py-10">
            {/* Background Hollow Text (Depth Layer) */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[14vw] font-black text-transparent opacity-10 pointer-events-none select-none whitespace-nowrap"
                style={{ WebkitTextStroke: '1px #fff', fontFamily: "'Syncopate', sans-serif" }}>
                GATHERING
            </h1>

            {/* Foreground Main Text */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none drop-shadow-2xl"
                style={{ fontFamily: "'Syncopate', sans-serif" }}
            >
                 <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-orange-400 animate-gradient-x">
                    ANANDOTSAV
                </span>
            </motion.h2>
        </div>


        {/* --- Description Box --- */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 md:mt-12 max-w-xs md:max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl relative group hover:border-orange-500/30 transition-colors"
        >
            {/* Decorative Icon */}
            <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 bg-[#030000] p-2 md:p-3 rounded-full border border-white/10">
                <Flame className="text-orange-500 fill-orange-500/20 w-5 h-5 md:w-6 md:h-6" />
            </div>

            <p className="text-sm md:text-xl text-gray-300 font-light leading-relaxed">
                "From the spark of tradition to the roar of celebration. This year, we don't just celebrate joy; we <b className="text-white">ignite</b> it. Join us as we illuminate the night."
            </p>

        </motion.div>

      </div>

      {/* --- Floating Particles (Atmosphere) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <FloatingEmbers />
      </div>

    </div>
  );
};

// --- Sub-Component: Floating Embers ---
const FloatingEmbers = () => {
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1, // Slightly smaller particles
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
    }));

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bottom-0 rounded-full bg-orange-500 blur-[1px]"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}%`,
                    }}
                    animate={{
                        y: [0, -window.innerHeight],
                        opacity: [0, 0.8, 0], // Slightly reduced opacity
                        x: [0, Math.random() * 30 - 15] 
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </>
    );
};

export default Theme;