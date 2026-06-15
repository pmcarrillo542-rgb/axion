"use client";

import { useState, useEffect, useRef } from "react";

export default function AXIONAssistant() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
  {
    role: "assistant",
    content:
      "Hola 👋\n\nSoy EVA AI, la asistente virtual de AXION.\n\nPuedo ayudarte con:\n\n• Odoo ERP\n• Automatizacion de procesos\n• Inteligencia Artificial\n• CRM y Ventas\n• Integraciones empresariales\n\nTambien puedes preguntarme sobre:\n\n• Precios\n• WhatsApp\n• Facturacion\n• Inventario\n• Compras\n• Dashboards\n• Integraciones\n\n¿Que te gustaria mejorar en tu empresa?\n\n• Ventas\n• Facturacion\n• Inventario\n• Atencion al cliente\n• Automatizacion",
  },
]);

  const [input, setInput] = useState("");
const [typing, setTyping] = useState(false);
const [displayText, setDisplayText] = useState("");
const [leadStep, setLeadStep] = useState(0);

const [leadData, setLeadData] = useState({
  nombre: "",
  empresa: "",
  correo: "",
  celular: "",
  proceso: "",
});
const goToContact = () => {
  const section =
    document.getElementById("contact");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  setTimeout(() => {
    const nombre =
      document.getElementById(
        "nombre"
      ) as HTMLInputElement;

    const empresa =
      document.getElementById(
        "empresa"
      ) as HTMLInputElement;

    const correo =
      document.getElementById(
        "correo"
      ) as HTMLInputElement;

    const mensaje =
      document.getElementById(
        "mensaje"
      ) as HTMLTextAreaElement;

    if (nombre)
      nombre.value =
        leadData.nombre;

    if (empresa)
      empresa.value =
        leadData.empresa;

    if (correo)
      correo.value =
        leadData.correo;

    if (mensaje)
      mensaje.value =
        `Celular: ${leadData.celular}

Proceso:
${leadData.proceso}`;
  }, 1200);
};
const messagesEndRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, typing]);
  const getResponse = (text: string) => {
  const lower = text.toLowerCase();

  if (lower.includes("odoo")) {
    return "Odoo es una plataforma ERP que integra CRM, ventas, inventario, facturación, proyectos y automatización en un solo sistema.";
  }

  if (
    lower.includes("axion") ||
    lower.includes("servicios")
  ) {
    return "AXION ayuda a empresas a optimizar procesos mediante automatización, inteligencia artificial, dashboards, integraciones y soluciones basadas en Odoo.";
  }

  if (lower.includes("crm")) {
    return "Un CRM permite gestionar prospectos, clientes y oportunidades comerciales en un solo lugar, mejorando el seguimiento y las ventas.";
  }

  if (
    lower.includes("automatizacion") ||
    lower.includes("automatización")
  ) {
    return "La automatización permite eliminar tareas repetitivas, reducir errores y aumentar la eficiencia utilizando tecnología e inteligencia artificial.";
  }

  if (
    lower.includes("ia") ||
    lower.includes("inteligencia artificial")
  ) {
    return "La inteligencia artificial permite automatizar tareas, analizar información y mejorar la toma de decisiones dentro de una empresa.";
  }

  
   
   
  if (
    lower.includes("precio") ||
    lower.includes("costo")
  ) {
    return "El costo depende del tamaño de la empresa y los procesos a automatizar. AXION realiza una auditoría gratuita para determinar la mejor solución.";
  }

  if (lower.includes("ventas")) {
    return "Podemos automatizar el proceso comercial mediante CRM, seguimiento de prospectos, embudos de ventas y dashboards.";
  }

  if (lower.includes("inventario")) {
    return "Odoo permite controlar inventario en tiempo real, compras, movimientos y alertas de stock.";
  }

  if (
    lower.includes("empresa pequeña") ||
    lower.includes("pyme")
  ) {
    return "Sí. AXION está enfocado precisamente en ayudar a pequeñas y medianas empresas.";
  }

  if (
    lower.includes("dashboard") ||
    lower.includes("dashboards") ||
    lower.includes("reportes")
  ) {
    return "AXION desarrolla dashboards empresariales para visualizar indicadores y métricas en tiempo real.";
  }

  if (lower.includes("whatsapp")) {
    return "Podemos integrar WhatsApp con CRM, automatizaciones y seguimiento comercial.";
  }

  if (
  lower.includes("implementacion") ||
  lower.includes("implementar")
) {
  return "AXION acompaña todo el proceso de implementacion, configuracion, capacitacion y optimizacion para que la transicion sea sencilla.";
}

if (
  lower.includes("tiempo") ||
  lower.includes("demora") ||
  lower.includes("cuanto tarda")
) {
  return "El tiempo depende del alcance del proyecto. Algunas automatizaciones pueden estar listas en pocos dias y proyectos mas completos en algunas semanas.";
}

if (
  lower.includes("facturacion")
) {
  return "Odoo permite gestionar facturacion, pagos, cuentas por cobrar y procesos administrativos desde una sola plataforma.";
}

if (
  lower.includes("clientes") ||
  lower.includes("prospectos")
) {
  return "AXION ayuda a centralizar clientes, prospectos y oportunidades comerciales mediante CRM y automatizaciones inteligentes.";
}

if (
  lower.includes("integracion") ||
  lower.includes("integraciones")
) {
  return "AXION puede integrar diferentes sistemas para eliminar tareas manuales y centralizar la informacion de tu empresa.";
}



if (
  lower.includes("contacto") ||
  lower.includes("hablar con alguien")
) {
  return "Nuestro equipo puede ayudarte a evaluar tu situacion actual y recomendar la mejor solucion para tu empresa.";
}
if (
  lower.includes("demo") ||
  lower.includes("quiero contratar") ||
  lower.includes("me interesa") ||
  lower.includes("contacto") ||
  lower.includes("hablar con alguien")
) {
  return "Perfecto \n\nTe recomiendo completar la auditoria gratuita que aparece en esta pagina.\n\nUn especialista de AXION analizara tu caso y se pondra en contacto contigo.";
}
if (
  lower.includes("implementacion") ||
  lower.includes("implementar")
) {
  return "AXION implementa soluciones completas utilizando Odoo, automatizacion e inteligencia artificial adaptadas a cada empresa.";
}

if (
  lower.includes("integracion") ||
  lower.includes("integraciones")
) {
  return "AXION puede integrar diferentes sistemas para eliminar tareas manuales y centralizar toda la informacion.";
}

if (
  lower.includes("facturacion")
) {
  return "Odoo permite gestionar facturacion, pagos, clientes y procesos administrativos desde una sola plataforma.";
}

if (
  lower.includes("compras")
) {
  return "Odoo ayuda a automatizar proveedores, ordenes de compra, abastecimiento y control de gastos.";
}

if (
  lower.includes("contabilidad")
) {
  return "Odoo incluye herramientas contables para reportes financieros, registros y control administrativo.";
}

if (
  lower.includes("rrhh") ||
  lower.includes("recursos humanos")
) {
  return "Podemos automatizar procesos de recursos humanos como vacaciones, asistencia, documentos y gestion de empleados.";
}
  return "Gracias por tu consulta. EVA AI está evolucionando constantemente para ofrecer respuestas más avanzadas sobre Odoo, automatización e inteligencia artificial.";
};

 const sendQuickQuestion = (question: string) => {
  const userMessage = {
    role: "user",
    content: question,
  };

  setMessages((prev) => [
    ...prev,
    userMessage,
  ]);

  setTyping(true);

  setTimeout(() => {
    const response = getResponse(question);

setTyping(false);

let index = 0;

setDisplayText("");

const interval = setInterval(() => {
  index++;

  setDisplayText(
    response.slice(0, index)
  );

  if (index >= response.length) {
    clearInterval(interval);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: response,
      },
    ]);

    setDisplayText("");
  }
}, 15);

   

    setTyping(false);
  }, 1500);
};

 const sendMessage = () => {
  if (!input.trim()) return;

  const currentInput = input;
  if (
  currentInput.toLowerCase().includes("auditoria") ||
  currentInput.toLowerCase().includes("agendar") ||
  currentInput.toLowerCase().includes("llamada") ||
  currentInput.toLowerCase().includes("demo")
) {
  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: currentInput,
    },
    {
      role: "assistant",
      content:
        "Perfecto. Para comenzar necesito algunos datos.\n\n¿Como te llamas?",
    },
  ]);

  setInput("");
  setLeadStep(1);

  return;
}
  if (leadStep === 1) {
  setLeadData((prev) => ({
    ...prev,
    nombre: currentInput,
  }));

  setMessages((prev) => [
    ...prev,
    { role: "user", content: currentInput },
    {
      role: "assistant",
      content: "Perfecto. ¿Como se llama tu empresa?",
    },
  ]);

  setInput("");
  setLeadStep(2);
  return;
}

if (leadStep === 2) {
  setLeadData((prev) => ({
    ...prev,
    empresa: currentInput,
  }));

  setMessages((prev) => [
    ...prev,
    { role: "user", content: currentInput },
    {
      role: "assistant",
      content: "Excelente. ¿Cual es tu correo electronico?",
    },
  ]);

  setInput("");
  setLeadStep(3);
  return;
}

if (leadStep === 3) {
  setLeadData((prev) => ({
    ...prev,
    correo: currentInput,
  }));

  setMessages((prev) => [
    ...prev,
    { role: "user", content: currentInput },
    {
      role: "assistant",
      content: "Perfecto. ¿Cual es tu numero celular?",
    },
  ]);

  setInput("");
  setLeadStep(4);
  return;
}

if (leadStep === 4) {
  setLeadData((prev) => ({
    ...prev,
    celular: currentInput,
  }));

  setMessages((prev) => [
    ...prev,
    { role: "user", content: currentInput },
    {
      role: "assistant",
      content: "¿Que proceso deseas automatizar?",
    },
  ]);

  setInput("");
  setLeadStep(5);
  return;
}

if (leadStep === 5) {
  const nombre =
    document.getElementById("nombre") as HTMLInputElement;

  const empresa =
    document.getElementById("empresa") as HTMLInputElement;

  const correo =
    document.getElementById("correo") as HTMLInputElement;

  const mensaje =
    document.getElementById("mensaje") as HTMLTextAreaElement;

  if (nombre) nombre.value = leadData.nombre;
  if (empresa) empresa.value = leadData.empresa;
  if (correo) correo.value = leadData.correo;

  if (mensaje) {
    mensaje.value =
`Celular: ${leadData.celular}

Proceso:
${currentInput}`;
  }

  setMessages((prev) => [
    ...prev,
    { role: "user", content: currentInput },
    {
      role: "assistant",
      content:
        "Perfecto. Ya tengo toda la información. He completado el formulario por ti.",
    },
  ]);

  setInput("");

  goToContact();

  setLeadStep(0);

  return;
}

  const userMessage = {
    role: "user",
    content: currentInput,
  };

  setMessages((prev) => [
    ...prev,
    userMessage,
  ]);

  setInput("");

  setTyping(true);

  setTimeout(() => {
   const response = getResponse(currentInput);

setTyping(false);

let index = 0;

setDisplayText("");

const interval = setInterval(() => {
  index++;

  setDisplayText(
    response.slice(0, index)
  );

  if (index >= response.length) {
    clearInterval(interval);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: response,
      },
    ]);

    setDisplayText("");
  }
}, 15);
  }, 1500);
};
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-36 right-6 z-50 eva-float group"
      >
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full">

          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse" />

          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 opacity-80 blur-sm" />

          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#071018] border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]">

            <span className="text-white text-2xl font-bold">
              ✦
            </span>

          </div>
        </div>
      </button>

      {open && (
        <div className="fixed bottom-32 right-6 w-[340px] h-[360px] bg-[#071018]/95 backdrop-blur-xl border border-cyan-900 rounded-3xl shadow-[0_0_40px_rgba(34,211,238,0.15)] z-50 flex flex-col overflow-hidden">

         <div className="p-3 border-b border-cyan-900 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-between">

  <div>
    <h3 className="font-bold text-white">
      EVA AI
    </h3>

    <p className="text-[11px] text-cyan-400">
      Asistente by Odoo
    </p>
  </div>

  <button
    onClick={() => setOpen(false)}
    className="text-slate-400 hover:text-white text-lg transition-all"
  >
    ✕
  </button>

</div>

          <div className="p-2 border-b border-slate-800 bg-slate-900/30">
            <div className="flex flex-wrap gap-2">

              <button
                onClick={() =>
                  sendQuickQuestion("¿Qué es Odoo?")
                }
                className="text-[11px] px-2 py-1 rounded-full bg-slate-800/80 hover:bg-cyan-600 transition-all duration-300 text-white border border-slate-700 hover:border-cyan-400"
              >
                ¿Qué es Odoo?
              </button>

              <button
                onClick={() =>
                  sendQuickQuestion("Automatizar mi empresa")
                }
                className="text-[11px] px-2 py-1 rounded-full bg-slate-800/80 hover:bg-cyan-600 transition-all duration-300 text-white border border-slate-700 hover:border-cyan-400"
              >
                Automatizar
              </button>

              <button
                onClick={() =>
                  sendQuickQuestion("Servicios de AXION")
                }
                className="text-[11px] px-2 py-1 rounded-full bg-slate-800/80 hover:bg-cyan-600 transition-all duration-300 text-white border border-slate-700 hover:border-cyan-400"
              >
                Servicios
              </button>

              <button
              onClick={() => {
  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        "Perfecto. Para comenzar necesito algunos datos.\n\n¿Como te llamas?",
    },
  ]);

  setLeadStep(1);
}}
  className="text-[11px] px-2 py-1 rounded-full bg-green-500 text-white border border-green-400"
>
  Agendar llamada
</button>

            </div>
          </div>

         <div className="flex-1 overflow-y-auto p-3 space-y-2">

  {messages.map((msg, i) => (
    <div
      key={i}
      className={`p-2 rounded-xl text-sm whitespace-pre-line ${
        msg.role === "user"
          ? "bg-cyan-600 text-white ml-8"
          : "bg-slate-800 text-slate-200 mr-8"
      }`}
    >
      {msg.content}
    </div>
  ))}

  {typing && (
    <div className="bg-slate-800 text-slate-300 mr-8 p-2 rounded-xl text-sm">
      ● EVA esta escribiendo...
    </div>
  )}

  {displayText && (
    <div className="bg-slate-800 text-slate-200 mr-8 p-2 rounded-xl text-sm whitespace-pre-line">
      {displayText}
    </div>
  )}

  <div ref={messagesEndRef} />

</div>

          <div className="p-2 border-t border-cyan-900 flex gap-2">
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Pregunta..."
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-cyan-600 hover:bg-cyan-500 px-3 rounded-lg text-white transition-all"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}