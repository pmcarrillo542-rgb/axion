"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description:
        "Analizamos tus procesos actuales e identificamos oportunidades de automatización y optimización.",
    },
    {
      number: "02",
      title: "Diseño",
      description:
        "Diseñamos una solución personalizada utilizando Odoo, IA y automatizaciones adaptadas a tu negocio.",
    },
    {
      number: "03",
      title: "Implementación",
      description:
        "Configuramos, integramos y desplegamos la solución minimizando interrupciones operativas.",
    },
    {
      number: "04",
      title: "Escalamiento",
      description:
        "Monitoreamos resultados y mejoramos continuamente para acompañar el crecimiento de tu empresa.",
    },
  ];

  return (
   <section
  id="process"
  className="relative py-24 text-white overflow-hidden"
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
            Nuestro proceso
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Cómo transformamos
            <br />
            tu empresa
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            Un proceso simple, estratégico y enfocado en resultados reales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                rounded-3xl
                p-10
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:bg-cyan-500/[0.03]
                hover:-translate-y-2
                hover:shadow-[0_0_60px_rgba(34,211,238,0.10)]
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
                  font-bold
                  mb-6
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:text-cyan-300
                "
              >
                {step.number}
              </div>

              <h3
                className="
                  text-3xl
                  font-semibold
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-cyan-100
                "
              >
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}