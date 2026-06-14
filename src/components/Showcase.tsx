"use client";

import { motion } from "framer-motion";

export default function Showcase() {
  const projects = [
    {
      title: "Automatización de Ventas",
      result: "-72%",
      metric: "Tiempo Administrativo",
      description:
        "Automatizamos el seguimiento de leads, cotizaciones y tareas comerciales mediante IA y flujos inteligentes.",
    },
    {
      title: "Implementación Odoo ERP",
      result: "+43%",
      metric: "Productividad",
      description:
        "Centralizamos ventas, inventario, compras y finanzas en una única plataforma conectada en tiempo real.",
    },
    {
      title: "Dashboard Gerencial IA",
      result: "24/7",
      metric: "Control Operativo",
      description:
        "Creamos paneles ejecutivos con indicadores clave para monitorear el negocio desde cualquier dispositivo.",
    },
  ];

  return (
    <section
      id="showcase"
      className="relative py-32 text-white overflow-hidden"
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
            Soluciones implementadas
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Transformamos procesos
            <br />
            en resultados
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Ayudamos a las empresas a reducir costos, eliminar tareas manuales
            y escalar operaciones mediante automatización e inteligencia
            artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-8
                hover:border-cyan-400/40
                hover:bg-cyan-500/[0.03]
                hover:-translate-y-3
                hover:shadow-[0_0_80px_rgba(34,211,238,0.15)]
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

              <span
                className="
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  mb-8
                "
              >
                Proyecto destacado
              </span>

              <h3 className="text-3xl font-semibold mb-8">
                {project.title}
              </h3>

              <div className="mb-8">
                <div
                  className="
                    text-7xl
                    font-bold
                    text-cyan-400
                    leading-none
                  "
                >
                  {project.result}
                </div>

                <div className="mt-3 text-gray-500 uppercase tracking-[0.2em] text-sm">
                  {project.metric}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}