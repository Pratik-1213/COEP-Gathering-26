import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Use placeholder sports images for now
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
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <h3 className="text-gray-500 tracking-[0.3em] text-sm uppercase mb-2">- COEP Gathering -</h3>
        <h1 className="text-5xl md:text-7xl font-bold font-['Syncopate'] text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-lg">
          SPORTS
        </h1>
      </div>

      <div className="w-full max-w-7xl px-4 md:px-6 relative z-10">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          // Responsive breakpoints
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false, // Disabled for cleaner look
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          className="w-full py-10"
        >
          {sportsData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative group rounded-3xl overflow-hidden aspect-3/4 border border-white/10 bg-gray-900 transition-all duration-500 select-none"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                   <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-orange-500 text-black rounded-full">
                     {item.type}
                   </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 font-['Syncopate']">{item.name}</h2>
                <div className="w-12 h-1 bg-white/50 rounded-full group-hover:w-full group-hover:bg-orange-500 transition-all duration-500" />
              </div>

              {/* Shine Effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:animate-[shine_1s_ease-in-out]" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-8 mt-12">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
};

export default Sports;