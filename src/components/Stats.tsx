"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Stats() {
  return (
   <section
  id="stats"
  className="relative py-32 px-6 overflow-hidden"
>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
            Resultados
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
            Tecnología que genera
            <br />
            resultados reales
          </h2>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
            No implementamos herramientas por moda.
            Diseñamos sistemas que reducen trabajo manual,
            aumentan productividad y aceleran el crecimiento.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-10
              hover:border-cyan-400/40
              hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
              transition-all
              duration-500
            "
          >
            <div className="text-6xl font-bold text-cyan-400 mb-4">
              <Counter end={50} suffix="+" />
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              Procesos Automatizados
            </h3>

            <p className="text-gray-400">
              Automatizaciones implementadas para reducir tareas repetitivas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-10
              hover:border-cyan-400/40
              hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
              transition-all
              duration-500
            "
          >
            <div className="text-6xl font-bold text-cyan-400 mb-4">
              <Counter end={20} suffix="+" />
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              Integraciones
            </h3>

            <p className="text-gray-400">
              Sistemas conectados entre Odoo, IA y plataformas externas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-10
              hover:border-cyan-400/40
              hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
              transition-all
              duration-500
            "
          >
            <div className="text-6xl font-bold text-cyan-400 mb-4">
              <Counter end={98} suffix="%" />
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              Satisfacción
            </h3>

            <p className="text-gray-400">
              Clientes que continúan optimizando sus operaciones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-10
              hover:border-cyan-400/40
              hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
              transition-all
              duration-500
            "
          >
            <div className="text-6xl font-bold text-cyan-400 mb-4">
              24/7
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              Operación Continua
            </h3>

            <p className="text-gray-400">
              Sistemas diseñados para trabajar incluso cuando tú no estás.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}