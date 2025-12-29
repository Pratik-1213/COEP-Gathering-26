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
    <div className="w-full h-screen relative overflow-hidden bg-black mask-[linear-gradient(to_bottom,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent)]">
      {/* Light Rays Effect */}
      <div className="absolute inset-0 z-1 pointer-events-none transition-opacity duration-2000 ease-in" style={{ opacity: lightRaysOpacity }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
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

      {/* Logo */}
      <div
        className="absolute top-1/2 left-[47%] z-3 transition-all duration-1500 ease-out"
        style={{
          transform: showLogo
            ? "translate(-50%, -60%)"
            : "translate(-50%, -50%)",
          opacity: showLogo ? 1 : 0,
        }}
      >
        <img src="/Logotext.png" alt="Logo" style={{ width: "500px" }} />
      </div>

      {/* Tagline */}
      <div
        className="absolute top-[58%] left-[53%] z-3 transition-all duration-1800 ease-[cubic-bezier(0.34,1.56,0.64,1)] font-['Cinzel_Decorative','Trajan_Pro',serif] text-[36px] font-semibold italic tracking-[3px] bg-[linear-gradient(135deg,#f4e4c1_0%,#e8d4a8_50%,#d4af7a_100%)] bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(244,228,193,0.5)]"
        style={{
          transform: showTagline
            ? "translate(-30%, 10%)"
            : "translate(-30%, -10%)",
          opacity: showTagline ? 1 : 0,
          filter: showTagline ? "blur(0px)" : "blur(10px)",
        }}
      >
        where cultures unite
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay={!hasPlayedVideo}
        muted
        onEnded={handleVideoEnd}
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/curtains.mp4" type="video/mp4" />
        <source src="/curtains.webm" type="video/webm" />
      </video>

    </div>
  );
};

export default Home;