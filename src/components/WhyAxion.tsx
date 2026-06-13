"use client";

import { motion } from "framer-motion";

import {
  FiZap,
  FiCpu,
  FiLink,
  FiTrendingUp,
} from "react-icons/fi";

export default function WhyAxion() {
  const benefits = [
    {
      icon: FiZap,
      title: "Implementación rápida",
      description:
        "Creamos soluciones ágiles para generar resultados en semanas, no en meses.",
    },
    {
      icon: FiCpu,
      title: "IA aplicada al negocio",
      description:
        "Implementamos inteligencia artificial donde realmente genera eficiencia, ahorro y crecimiento.",
    },
    {
      icon: FiLink,
      title: "Integraciones avanzadas",
      description:
        "Conectamos sistemas, aplicaciones y plataformas en un ecosistema totalmente sincronizado.",
    },
    {
      icon: FiTrendingUp,
      title: "Escalabilidad garantizada",
      description:
        "Diseñamos soluciones preparadas para acompañar el crecimiento de tu empresa.",
    },
  ];

  return (
    <section
      id="why"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
            ¿Por qué AXION?
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Tecnología diseñada
            <br />
            para generar resultados
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Combinamos automatización, inteligencia artificial y experiencia
            tecnológica para transformar operaciones complejas en procesos
            eficientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/[0.03]
                  hover:-translate-y-3
                  hover:shadow-[0_0_70px_rgba(34,211,238,0.15)]
                  transition-all
                  duration-500
                "
              >

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-gradient-to-br
                    from-cyan-500/5
                    via-transparent
                    to-cyan-400/5
                  "
                />

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400/60
                    to-transparent
                  "
                />

                <div
                  className="
                    relative
                    text-cyan-400
                    text-5xl
                    mb-8
                    flex
                    justify-start
                    group-hover:scale-110
                    group-hover:text-cyan-300
                    transition-all
                    duration-500
                  "
                >
                  <Icon />
                </div>

                <h3
                  className="
                    relative
                    text-white
                    text-2xl
                    font-semibold
                    mb-4
                    group-hover:text-cyan-100
                    transition-all
                  "
                >
                  {benefit.title}
                </h3>

                <p className="relative text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}