import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    name: "Star Night",
    time: "7:00 PM",
    venue: "Main Stage",
    desc: "Celebrity performances, band showdown, and a dazzling light show.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Tech Expo",
    time: "11:00 AM",
    venue: "Innovation Hall",
    desc: "Showcase of projects, AR/VR zone, and live tech demos.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Cultural Fiesta",
    time: "4:00 PM",
    venue: "Open Arena",
    desc: "Dance, drama, and folk performances from across the country.",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Gaming Arena",
    time: "1:00 PM",
    venue: "Lab Block",
    desc: "E-sports tournaments, casual gaming zone, and mini-prizes.",
    image: "https://images.pexels.com/photos/786244/pexels-photo-786244.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Art & Open Mic",
    time: "3:00 PM",
    venue: "Studio Lounge",
    desc: "Live music, poetry, stand-up, and art exhibition corners.",
    image: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Passes = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden pt-32 pb-20 px-4 md:px-8">
      
      {/* 1. Background Ambience (Red/Orange) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* 2. Header Section */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
            Annual Gathering 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-['Syncopate'] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-gray-400">
              Event Passes
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Secure your spot. Pick your favorite events and grab your <span className="text-orange-500 font-semibold">Get Pass</span> to enter the celebration.
          </p>
        </motion.div>
      </div>

      {/* 3. Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} index={index} />
        ))}
      </div>

    </div>
  );
};

// --- Sub-Component: Event Card ---
const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/50 transition-colors duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Category Tag */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-bold text-white uppercase tracking-wider">2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold font-['Syncopate'] text-white mb-4 group-hover:text-red-500 transition-colors">
          {event.name}
        </h3>
        
        {/* Info Row */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-orange-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-orange-500" />
            <span>{event.venue}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {event.desc}
        </p>

        {/* Button */}
        <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          <Ticket size={18} />
          Get Passes
        </button>
      </div>
    </motion.div>
  );
};

export default Passes;