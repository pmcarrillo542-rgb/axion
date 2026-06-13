"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "10%", left: "15%", size: 4, duration: 12 },
  { top: "20%", left: "80%", size: 5, duration: 15 },
  { top: "35%", left: "60%", size: 3, duration: 18 },
  { top: "50%", left: "25%", size: 6, duration: 20 },
  { top: "65%", left: "75%", size: 4, duration: 14 },
  { top: "80%", left: "45%", size: 5, duration: 16 },
  { top: "15%", left: "50%", size: 3, duration: 13 },
  { top: "45%", left: "90%", size: 4, duration: 17 },
  { top: "70%", left: "10%", size: 5, duration: 19 },
  { top: "90%", left: "65%", size: 3, duration: 21 },
];

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-50">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-[-400px]
          left-[-400px]
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/5
          blur-[260px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[-400px]
          right-[-400px]
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/5
          blur-[260px]
        "
      />

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-400/40"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 12px rgba(34,211,238,0.4)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}