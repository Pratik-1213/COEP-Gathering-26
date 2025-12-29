// Passes.jsx
import React, { useState } from "react";

const events = [
  {
    name: "Star Night",
    time: "7:00 PM · Main Stage",
    desc: "Celebrity performances, band showdown, and a dazzling light show.",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Tech Expo",
    time: "11:00 AM · Innovation Hall",
    desc: "Showcase of projects, AR/VR zone, and live tech demos.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Cultural Fiesta",
    time: "4:00 PM · Open Arena",
    desc: "Dance, drama, and folk performances from across the country.",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Gaming Arena",
    time: "1:00 PM · Lab Block",
    desc: "E-sports tournaments, casual gaming zone, and mini-prizes.",
    image:
      "https://images.pexels.com/photos/786244/pexels-photo-786244.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Art & Open Mic",
    time: "3:00 PM · Studio Lounge",
    desc: "Live music, poetry, stand-up, and art exhibition corners.",
    image:
      "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    padding: "8rem 1.5rem 4rem", // Kept high padding for Navbar
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#f9fafb",
    // CHANGED: Pure black background with very subtle bottom gradient
    background: "linear-gradient(to bottom, #000000 0%, #0a0a0a 100%)",
    overflowX: "hidden"
  },
  bgGradient: {
    position: "absolute",
    inset: 0,
    // CHANGED: Much subtler, lower opacity spotlights
    background:
      "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15), transparent 40%)," + // Top center faint red
      "radial-gradient(circle at 90% 90%, rgba(234, 88, 12, 0.08), transparent 40%)", // Bottom right faint orange
    filter: "blur(60px)",
    zIndex: 0,
    pointerEvents: "none"
  },
  hero: {
    position: "relative",
    textAlign: "center",
    maxWidth: "720px",
    zIndex: 1,
    marginBottom: "4rem"
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.35rem 1rem",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#fb923c", // Orange text
    marginBottom: "1.5rem"
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    lineHeight: 1.1,
    margin: 0,
    fontWeight: "800",
    letterSpacing: "-0.03em",
    color: "#ffffff",
    textShadow: "0 0 40px rgba(0,0,0,0.5)"
  },
  subtitle: {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#a1a1aa", // Zinc-400
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  main: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px"
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem"
  },
  card: {
    position: "relative",
    borderRadius: "1rem",
    // CHANGED: Very dark, neutral background
    background: "#09090b", 
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 0 0 1px rgba(0,0,0,0)", 
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column"
  },
  cardImageWrapper: {
    position: "relative",
    height: "200px",
    overflow: "hidden"
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease"
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    // Subtle fade at bottom of image
    background: "linear-gradient(to bottom, transparent 60%, #09090b 100%)",
    zIndex: 1
  },
  cardBody: {
    padding: "1.75rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    margin: "0 0 0.5rem 0",
    color: "#fff",
    fontFamily: "'Syncopate', sans-serif" 
  },
  cardMeta: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#f87171", // Muted Red
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },
  cardDesc: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#a1a1aa", // Neutral Gray
    marginBottom: "2rem",
    flexGrow: 1
  },
  cardButton: {
    width: "100%",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "none",
    fontSize: "0.8rem",
    fontWeight: "700",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#fff",
    // Gradient only on button now
    background: "linear-gradient(90deg, #b91c1c 0%, #ea580c 100%)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",
    overflow: "hidden"
  }
};

const Passes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={styles.page}>
      {/* Background Ambience */}
      <div style={styles.bgGradient} />

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.badge}>Annual Gathering • 2026</div>
        <h1 style={styles.title}>Event Passes</h1>
        <p style={styles.subtitle}>
          Secure your spot. Pick your favorite events and grab your{" "}
          <span style={{ color: "#fff", borderBottom: "1px solid #ea580c" }}>Get Pass</span> to
          enter the celebration.
        </p>
      </header>

      {/* Main Grid */}
      <main style={styles.main}>
        <section style={styles.cardGrid}>
          {events.map((event, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <article
                key={index}
                style={{
                  ...styles.card,
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  // Only subtle border glow on hover
                  borderColor: isHovered ? "rgba(255,255,255,0.2)" : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered 
                    ? "0 20px 40px -5px rgba(0,0,0,0.8)" 
                    : "0 4px 6px -1px rgba(0,0,0,0.5)"
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Area */}
                <div style={styles.cardImageWrapper}>
                  <div style={styles.imageOverlay} />
                  <img
                    src={event.image}
                    alt={event.name}
                    style={{
                      ...styles.cardImage,
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      // Slight desaturation that returns to color on hover
                      filter: isHovered ? "grayscale(0%)" : "grayscale(20%)"
                    }}
                  />
                </div>

                {/* Content Area */}
                <div style={styles.cardBody}>
                  <h2 style={styles.cardTitle}>{event.name}</h2>
                  <p style={styles.cardMeta}>{event.time}</p>
                  <p style={styles.cardDesc}>{event.desc}</p>
                  
                  {/* Button */}
                  <button
                    type="button"
                    style={{
                      ...styles.cardButton,
                      opacity: isHovered ? 1 : 0.9,
                      transform: isHovered ? "scale(1.02)" : "scale(1)"
                    }}
                  >
                    Get Passes
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Passes;