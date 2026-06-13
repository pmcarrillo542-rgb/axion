"use client";

import { motion } from "framer-motion";

export default function ParticlesBackground() {
  const particles = [
    { top: "10%", left: "12%" },
    { top: "20%", left: "75%" },
    { top: "35%", left: "50%" },
    { top: "50%", left: "18%" },
    { top: "65%", left: "82%" },
    { top: "75%", left: "30%" },
    { top: "85%", left: "60%" },
    { top: "25%", left: "40%" },
    { top: "45%", left: "70%" },
    { top: "60%", left: "55%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="
            absolute
            w-2
            h-2
            rounded-full
            bg-cyan-400/50
            shadow-[0_0_20px_rgba(34,211,238,0.6)]
          "
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}