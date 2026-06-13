"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "◈",
      title: "Automatización",
      description:
        "Eliminamos tareas repetitivas conectando sistemas, formularios, correos y procesos internos.",
    },
    {
      icon: "◎",
      title: "Inteligencia Artificial",
      description:
        "Implementamos asistentes inteligentes, análisis de datos y flujos impulsados por IA.",
    },
    {
      icon: "⬢",
      title: "Odoo ERP",
      description:
        "Implementamos y personalizamos Odoo para centralizar toda la operación de tu empresa.",
    },
    {
      icon: "⟐",
      title: "Integraciones",
      description:
        "Conectamos CRM, ERP, Excel, WhatsApp, APIs y herramientas externas en un solo ecosistema.",
    },
    {
      icon: "◭",
      title: "Dashboards",
      description:
        "Creamos paneles ejecutivos con métricas en tiempo real para una toma de decisiones inteligente.",
    },
    {
      icon: "◉",
      title: "Consultoría Digital",
      description:
        "Diseñamos estrategias tecnológicas enfocadas en eficiencia operativa y crecimiento empresarial.",
    },
  ];

  return (
    <section
      id="services"
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
            Soluciones
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Servicios diseñados
            <br />
            para escalar tu negocio
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            Tecnología, automatización e inteligencia artificial trabajando
            juntas para aumentar productividad y reducir costos operativos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                transform-gpu
                overflow-hidden
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:bg-cyan-500/[0.03]
                hover:-translate-y-4
                hover:shadow-[0_40px_100px_rgba(34,211,238,0.22)]
              "
            >

              {/* Glow interno premium */}
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

              {/* Glow giratorio premium */}
              <div
                className="
                  absolute
                  -inset-[200%]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-1000
                  bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(34,211,238,0.12)_120deg,transparent_240deg)]
                  animate-spin
                "
                style={{
                  animationDuration: "8s",
                }}
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
                  text-6xl
                  mb-8
                  transition-all
                  duration-500
                  group-hover:scale-125
                  group-hover:text-cyan-300
                "
              >
                {service.icon}
              </div>

              <h3
                className="
                  relative
                  text-2xl
                  font-semibold
                  mb-4
                  transition-all
                  duration-300
                  group-hover:text-cyan-100
                "
              >
                {service.title}
              </h3>

              <p className="relative text-gray-400 leading-relaxed">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}