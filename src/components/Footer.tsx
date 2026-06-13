"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[260px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="py-20 grid md:grid-cols-4 gap-12">

          {/* Marca */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-[0.35em] text-white">
              AXION
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Automatización, Inteligencia Artificial, Odoo e integraciones
              diseñadas para acelerar el crecimiento empresarial.
            </p>

            <div className="mt-6 text-cyan-400 text-sm uppercase tracking-[0.25em]">
              IA • Odoo • Automatización
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">
              Servicios
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Automatización</li>
              <li>Inteligencia Artificial</li>
              <li>Odoo ERP</li>
              <li>Integraciones</li>
              <li>Dashboards</li>
            </ul>
          </motion.div>

          {/* Navegación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">
              Navegación
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-all">
                  Soluciones
                </a>
              </li>

              <li>
                <a href="#stats" className="hover:text-cyan-300 transition-all">
                  Resultados
                </a>
              </li>

              <li>
                <a href="#process" className="hover:text-cyan-300 transition-all">
                  Proceso
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-all">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">
              Contacto
            </h3>

            <p className="text-gray-400">
              Quito, Ecuador
            </p>

            <p className="mt-3 text-gray-400">
              +593 987 103 931
            </p>

            <a
              href="https://wa.me/593987103931?text=Hola%20AXION,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-cyan-400 hover:text-cyan-300 transition-all"
            >
              WhatsApp
            </a>

            <p className="mt-3 text-gray-500 text-sm">
              Respuesta en menos de 24 horas.
            </p>
          </motion.div>

        </div>

        <div
          className="
            py-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <p className="text-gray-500 text-sm">
            © 2026 AXION. Todos los derechos reservados.
          </p>

          <p className="text-gray-600 text-sm tracking-[0.2em]">
            AUTOMATION • AI • ODOO • INTEGRATIONS
          </p>
        </div>

      </div>

    </footer>
  );
}