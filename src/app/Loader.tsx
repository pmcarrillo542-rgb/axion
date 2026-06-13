"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            bg-black
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* Glow principal */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                w-[700px]
                h-[700px]
                rounded-full
                bg-cyan-500/20
                blur-[180px]
              "
            />
          </div>

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
              [background-size:60px_60px]
            "
          />

          <div className="relative z-10 text-center">

            {/* AXION */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              className="
                text-6xl
                md:text-9xl
                font-bold
                tracking-[0.5em]
                text-white
              "
            >
              AXION
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="
                mt-8
                text-cyan-300
                tracking-[0.4em]
                uppercase
                text-sm
              "
            >
              Automation • AI • Odoo
            </motion.p>

            {/* Systems */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 1],
              }}
              transition={{
                delay: 2,
                duration: 2,
                repeat: Infinity,
              }}
              className="
                mt-12
                text-gray-400
                tracking-[0.3em]
                text-xs
                uppercase
              "
            >
              Initializing Systems...
            </motion.p>

            {/* Progress */}
            <div
              className="
                mt-10
                w-72
                h-[3px]
                mx-auto
                bg-white/10
                rounded-full
                overflow-hidden
              "
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}