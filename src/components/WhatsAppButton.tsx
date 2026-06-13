"use client";

import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/593987103931?text=Hola,%20quiero%20información%20sobre%20automatización,%20IA%20y%20Odoo."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-8
        right-8
        z-[999]
        w-16
        h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        text-white
        text-3xl
        shadow-[0_0_40px_rgba(34,197,94,0.5)]
        hover:scale-110
        hover:shadow-[0_0_60px_rgba(34,197,94,0.7)]
        transition-all
        duration-300
      "
    >
      <FaWhatsapp />
    </a>
  );
}