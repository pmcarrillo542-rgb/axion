"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gerente Comercial",
      company: "Empresa de Servicios",
      text: "Reducimos más de 20 horas semanales gracias a las automatizaciones implementadas por AXION.",
    },
    {
      name: "Director General",
      company: "Empresa Industrial",
      text: "La integración entre nuestros sistemas eliminó procesos manuales y mejoró la productividad.",
    },
    {
      name: "CEO",
      company: "Empresa Tecnológica",
      text: "Ahora contamos con información en tiempo real para tomar decisiones más rápidas y estratégicas.",
    },
  ];

  return (
    <section
      id="testimonials"
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
            Testimonios
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Empresas que confían
            <br />
            en AXION
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Soluciones diseñadas para generar resultados medibles y crecimiento sostenible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-8
                hover:border-cyan-400/40
                hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
                transition-all
                duration-500
              "
            >
              <div className="text-cyan-400 text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                "{item.text}"
              </p>

              <div>
                <h4 className="text-white font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}