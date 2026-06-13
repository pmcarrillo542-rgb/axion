"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "services",
        "stats",
        "process",
        "tech",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Soluciones", href: "#services", id: "services" },
    { label: "Resultados", href: "#stats", id: "stats" },
    { label: "Proceso", href: "#process", id: "process" },
    { label: "Tecnología", href: "#tech", id: "tech" },
    { label: "Contacto", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <div
        className={`
          w-full
          max-w-7xl
          rounded-full
          border
          border-white/10
          flex
          items-center
          justify-between
          px-8
          transition-all
          duration-500

          ${
            scrolled
              ? `
                h-16
                bg-black/80
                backdrop-blur-3xl
                shadow-[0_0_60px_rgba(34,211,238,0.08)]
              `
              : `
                h-20
                bg-black/40
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(34,211,238,0.05)]
              `
          }
        `}
      >
        {/* Logo */}
        <a
          href="#"
          className={`
            text-white
            font-semibold
            tracking-[0.5em]
            cursor-pointer
            hover:text-cyan-300
            transition-all
            duration-500
            ${scrolled ? "text-lg" : "text-xl"}
          `}
        >
          AXION
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                relative
                transition-all
                duration-300

                ${
                  activeSection === item.id
                    ? "text-cyan-300"
                    : "text-gray-300 hover:text-cyan-300"
                }
              `}
            >
              {item.label}

              {activeSection === item.id && (
                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-2
                    -translate-x-1/2
                    w-8
                    h-[2px]
                    bg-cyan-400
                    rounded-full
                    shadow-[0_0_12px_rgba(34,211,238,0.8)]
                  "
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="
            px-7
            py-3
            rounded-full
            bg-cyan-400
            text-black
            font-semibold
            hover:scale-105
            hover:bg-cyan-300
            transition-all
            duration-300
            shadow-[0_0_25px_rgba(34,211,238,0.4)]
          "
        >
          Agendar llamada
        </a>
      </div>
    </header>
  );
}