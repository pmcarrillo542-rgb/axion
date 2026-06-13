export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 text-white overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div
          className="
            border
            border-cyan-500/20
            bg-white/[0.03]
            backdrop-blur-2xl
            rounded-[40px]
            p-10
            md:p-20
            shadow-[0_0_80px_rgba(34,211,238,0.08)]
          "
        >

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>

              <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
                COMIENZA HOY
              </span>

              <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-[0.95]">
                ¿Listo para
                <br />
                automatizar
                <br />
                tu empresa?
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                Agenda una llamada estratégica gratuita y descubre cómo reducir
                costos, ahorrar tiempo y escalar operaciones mediante
                automatización, inteligencia artificial, Odoo e integraciones.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
                  IA
                </span>

                <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
                  Automatización
                </span>

                <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
                  Odoo
                </span>

                <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
                  Integraciones
                </span>

              </div>

            </div>

            {/* Formulario */}
            <div
              className="
                bg-black/40
                border
                border-white/10
                rounded-3xl
                p-8
              "
            >

              <h3 className="text-2xl font-semibold mb-6">
                Solicita una consultoría gratuita
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    outline-none
                    focus:border-cyan-400
                  "
                />

                <input
                  type="text"
                  placeholder="Empresa"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    outline-none
                    focus:border-cyan-400
                  "
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    outline-none
                    focus:border-cyan-400
                  "
                />

                <textarea
                  rows={5}
                  placeholder="Cuéntanos qué proceso deseas automatizar..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    outline-none
                    focus:border-cyan-400
                    resize-none
                  "
                />

                <button
                  type="button"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-cyan-400
                    text-black
                    font-semibold
                    hover:bg-cyan-300
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-[0_0_40px_rgba(34,211,238,0.4)]
                  "
                >
                  Solicitar consultoría
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}