"use client";

import { motion } from "framer-motion";

import {
  SiGoogle,
  SiMeta,
  SiStripe,
  SiHubspot,
  SiWhatsapp,
} from "react-icons/si";

export default function TechStack() {
  const technologies = [
    { name: "OpenAI", icon: () => <span className="font-bold">AI</span> },
    { name: "Odoo", icon: () => <span className="font-bold">O</span> },
    { name: "WhatsApp", icon: SiWhatsapp },
    { name: "Google", icon: SiGoogle },
    { name: "Meta", icon: SiMeta },
    { name: "Stripe", icon: SiStripe },
    { name: "Power BI", icon: () => <span className="font-bold">BI</span> },
    { name: "HubSpot", icon: SiHubspot },
  ];

  return (
    <section
      id="tech"
      className="relative py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
            Ecosistema tecnológico
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Tecnologías que impulsan
            <br />
            nuestros proyectos
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Integramos herramientas líderes para construir soluciones
            escalables, automatizadas y preparadas para crecer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">

          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/[0.03]
                  hover:-translate-y-2
                  hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]
                  transition-all
                  duration-500
                "
              >
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
                    text-cyan-400
                    text-5xl
                    mb-6
                    flex
                    justify-center
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <Icon />
                </div>

                <h3
                  className="
                    text-center
                    text-white
                    font-semibold
                    text-lg
                  "
                >
                  {tech.name}
                </h3>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}