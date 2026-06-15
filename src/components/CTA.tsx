"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 text-white overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[220px]" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6">
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
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
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

              <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
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

            <div
              className="
                bg-black/40
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl font-semibold mb-2">
                Solicita una auditoría gratuita
              </h3>

              <p className="text-gray-400 mb-8">
                Completa el formulario y te contactaremos en menos de 24 horas.
              </p>

              <form
              id="leadForm"
                action="https://formspree.io/f/xgobrdbw"
                method="POST"
                className="space-y-5"
              >
                <input
                  id="nombre"
                  name="Nombre"
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <input
                  id="empresa"
                  name="Empresa"
                  type="text"
                  placeholder="Empresa"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <input
                  id="correo"
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <textarea
                  id="mensaje"
                  name="Mensaje"
                  rows={5}
                  placeholder="¿Qué proceso deseas automatizar?"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-cyan-400
                    text-black
                    font-semibold
                    hover:bg-cyan-300
                    transition-all
                  "
                >
                   Solicitar diagnóstico gratuito
                </button>
              </form>

              <div className="mt-6 text-center text-xs text-gray-500">
                Sin compromiso • Respuesta en menos de 24 horas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}