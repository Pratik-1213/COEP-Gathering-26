import React, { useRef, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const sportsData = [
  { id: 1, name: "Cricket", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80", type: "Outdoor" },
  { id: 2, name: "Football", img: "https://images.unsplash.com/photo-1579952363873-27f3bde9be51?w=800&q=80", type: "Outdoor" },
  { id: 3, name: "Basketball", img: "https://images.unsplash.com/photo-1546519638-68e109498ee2?w=800&q=80", type: "Outdoor" },
  { id: 4, name: "Badminton", img: "https://images.unsplash.com/photo-1626224583764-847890e045b5?w=800&q=80", type: "Indoor" },
  { id: 5, name: "Chess", img: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&q=80", type: "Indoor" },
  { id: 6, name: "Volleyball", img: "https://images.unsplash.com/photo-1592656094267-764a45160876?w=800&q=80", type: "Outdoor" },
];

const Sports = () => {
  const swiperRef = useRef(null);
  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-black">
      
      {/* 1. Dynamic Background - Speed Lines & Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Moving Gradient Orbs */}
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity }}
           className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/30 rounded-full blur-[150px]" 
         />
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
           className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/30 rounded-full blur-[150px]" 
         />
         
         {/* Grid Texture */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      {/* 2. Header Section */}
      <div className="relative z-10 text-center mb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy size={20} className="text-yellow-500 animate-pulse" />
                <h3 className="text-red-500 tracking-[0.4em] text-sm uppercase font-bold">The Arena</h3>
                <Trophy size={20} className="text-yellow-500 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold font-['Syncopate'] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]">
            SPORTS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-4" />
        </motion.div>
      </div>

      {/* 3. The 3D Carousel */}
      <div className="w-full max-w-[1400px] px-4 relative z-10">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 }, // Mobile: Peeking slides
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 60 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300, // Deep 3D effect
            modifier: 1,
            slideShadows: false, // We use custom shadows
          }}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          className="w-full py-12"
        >
          {sportsData.map((item, index) => (
            <SwiperSlide key={index} className="group">
               <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-gray-900 transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                  
                  {/* Image with Zoom Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  </div>

                  {/* Hover Glare Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-yellow-500">
                          {item.type} Event
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Syncopate'] uppercase italic tracking-tighter">
                        {item.name}
                    </h2>
                    
                    {/* Animated Line */}
                    <div className="w-12 h-1.5 bg-red-600 skew-x-[-20deg] group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-500" />
                  </div>
               </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 4. Navigation Buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-red-500/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 group"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-red-500/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 group"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sports;