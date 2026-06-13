"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] bg-black text-white overflow-hidden">

      <Navbar />

      <ParticlesBackground />

      {/* Glow principal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] rounded-full bg-cyan-500/10 blur-[220px]" />
      </div>

      {/* Glow lateral */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />

      {/* Grid tecnológica */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          px-6
          pt-44
          pb-20
        "
      >

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mb-8
            px-6
            py-3
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            backdrop-blur-xl
            text-cyan-300
            text-sm
            tracking-[0.25em]
            shadow-[0_0_30px_rgba(34,211,238,0.15)]
          "
        >
          IA • AUTOMATIZACIÓN • ODOO
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            max-w-6xl
            text-6xl
            md:text-8xl
            font-bold
            leading-[0.92]
            tracking-tight
          "
        >
          Tecnología que
          <br />
          trabaja por ti
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
          className="
            mt-10
            max-w-4xl
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >
          Automatizamos procesos, conectamos sistemas e implementamos
          inteligencia artificial para que tu empresa opere más rápido,
          reduzca costos y escale con tecnología diseñada para crecer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
          }}
          className="flex flex-col md:flex-row gap-6 mt-14"
        >

          <a
            href="https://wa.me/593987103931?text=Hola%20AXION,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-10
              py-5
              rounded-full
              bg-cyan-400
              text-black
              font-semibold
              hover:scale-105
              hover:bg-cyan-300
              transition-all
              duration-300
              shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            Agendar diagnóstico
          </a>

          <a
            href="#services"
            className="
              px-10
              py-5
              rounded-full
              border
              border-white/15
              bg-white/[0.02]
              backdrop-blur-xl
              text-white
              hover:border-cyan-400
              hover:text-cyan-300
              hover:bg-cyan-500/[0.03]
              transition-all
              duration-300
            "
          >
            Ver soluciones
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
            mt-20
            flex
            flex-wrap
            justify-center
            gap-8
            text-sm
            text-gray-500
            uppercase
            tracking-[0.2em]
          "
        >
          <span>Automatización</span>
          <span>•</span>
          <span>IA</span>
          <span>•</span>
          <span>Odoo ERP</span>
          <span>•</span>
          <span>Integraciones</span>
          <span>•</span>
          <span>Dashboards</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-20
            text-cyan-400/60
            text-sm
            tracking-[0.3em]
            uppercase
          "
        >
          Scroll
        </motion.div>

      </div>

    </section>
  );
}