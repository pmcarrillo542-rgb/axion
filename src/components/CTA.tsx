export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[220px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div
          className="
            border
            border-cyan-500/20
            bg-white/[0.03]
            backdrop-blur-2xl
            rounded-[40px]
            p-12
            md:p-24
            text-center
            shadow-[0_0_80px_rgba(34,211,238,0.08)]
          "
        >

          <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
            COMIENZA HOY
          </span>

          <h2 className="mt-6 text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
            ¿Listo para
            <br />
            automatizar
            <br />
            tu empresa?
          </h2>

          <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Agenda una llamada estratégica gratuita y descubre cómo reducir
            costos, ahorrar tiempo y escalar operaciones mediante
            automatización, inteligencia artificial y Odoo.
          </p>

          <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

            <a
             href="https://wa.me/593987103931?text=Hola%20AXION,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-12
                py-5
                rounded-full
                bg-cyan-400
                text-black
                font-semibold
                hover:scale-105
                hover:bg-cyan-300
                transition-all
                duration-300
                shadow-[0_0_50px_rgba(34,211,238,0.4)]
              "
            >
              Hablar por WhatsApp
            </a>

            <a
              href="#services"
              className="
                px-12
                py-5
                rounded-full
                border
                border-white/15
                hover:border-cyan-400
                hover:text-cyan-300
                transition-all
                duration-300
              "
            >
              Ver soluciones
            </a>

          </div>

          <div className="mt-12 text-gray-500 text-sm tracking-[0.2em] uppercase">
            IA • Automatización • Odoo • Integraciones
          </div>

        </div>

      </div>
    </section>
  );
}