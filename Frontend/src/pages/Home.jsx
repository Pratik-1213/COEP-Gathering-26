import React, { useState, useEffect, useRef } from "react";
import LightRays from "../components/LightRays";

const Home = () => {
  const [lightRaysOpacity, setLightRaysOpacity] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [hasPlayedVideo, setHasPlayedVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoPlayed = sessionStorage.getItem('homeVideoPlayed');

    if (videoPlayed === 'true') {
      setHasPlayedVideo(true);
      setLightRaysOpacity(1);
      setShowLogo(true);
      setShowTagline(true);

      if (videoRef.current) {
        const setToEnd = () => {
          if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration;
            videoRef.current.pause();
          }
        };

        if (videoRef.current.readyState >= 2) {
          setToEnd();
        } else {
          videoRef.current.addEventListener('loadedmetadata', setToEnd);
        }
      }
      return;
    }

    const fadeTimer = setTimeout(() => {
      setLightRaysOpacity(1);
    }, 3000);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 6000);

    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 7000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(logoTimer);
      clearTimeout(taglineTimer);
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    sessionStorage.setItem('homeVideoPlayed', 'true');
    setHasPlayedVideo(true);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Light Rays Effect - Changed to Gold/Orange */}
      <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-2000 ease-in mix-blend-screen" style={{ opacity: lightRaysOpacity }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffaa00" 
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Logo - Responsive Sizing */}
      <div
        className="absolute top-1/2 left-1/2 z-30 transition-all duration-1500 ease-out w-full px-4 flex justify-center"
        style={{
          transform: showLogo
            ? "translate(-50%, -60%)"
            : "translate(-50%, -50%)",
          opacity: showLogo ? 1 : 0,
        }}
      >
        <img 
            src="/Logotext.png" 
            alt="Logo" 
            className="w-[280px] md:w-[500px] object-contain drop-shadow-[0_0_30px_rgba(255,69,0,0.3)]" 
        />
      </div>

      {/* Tagline - Theme Colors */}
      <div
        className="absolute top-[60%] left-1/2 z-30 w-full text-center transition-all duration-1800 ease-[cubic-bezier(0.34,1.56,0.64,1)] font-['Cinzel_Decorative','Trajan_Pro',serif] text-xl md:text-[36px] font-semibold italic tracking-[3px]"
        style={{
          transform: showTagline
            ? "translate(-50%, 0%)"
            : "translate(-50%, 20%)",
          opacity: showTagline ? 1 : 0,
          filter: showTagline ? "blur(0px)" : "blur(10px)",
          // Gold/Red Gradient Text
          background: "linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 50%, #d4af7a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 20px rgba(244, 228, 193, 0.3)"
        }}
      >
        where cultures unite
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay={!hasPlayedVideo}
        muted
        playsInline // Important for mobile
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60"
      >
        <source src="/curtains.mp4" type="video/mp4" />
        <source src="/curtains.webm" type="video/webm" />
      </video>
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-1 pointer-events-none" />

    </div>
  );
};

export default Home;