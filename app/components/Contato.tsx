import Image from "next/image";
import projetoWord from "@/public/Projeto_Site_DeehZigner_projeto.webp";

const WHATSAPP_URL = "https://wa.me/5511954103916";

const items = [
  {
    label: "WhatsApp",
    value: "+55 (11) 95410-3916",
    href: WHATSAPP_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    value: "contato@deehzigner.com.br",
    href: "mailto:contato@deehzigner.com.br",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: "Atendimento",
    value: "100% remoto — atendo clientes de todo o Brasil e do exterior",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Horário",
    value: "Seg a Sex — 9h às 18h",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-16 py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-widest text-sky-400">
            — CONTATO
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Vamos conversar sobre seu{" "}
            <Image
              src={projetoWord}
              alt="projeto?"
              className="inline-block h-[1.1em] w-auto align-[-0.3em]"
            />
          </h2>
          <p className="mt-4 text-zinc-400">
            Tire suas dúvidas ou comece seu projeto agora mesmo.
          </p>

          <ul className="mt-10 space-y-7">
            {items.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-950/60 text-blue-400 ring-1 ring-blue-500/30">
                  {item.icon}
                </span>
                <div>
                  <p className="font-bold text-white">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-blue-400 hover:underline"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-400">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-2xl bg-zinc-950/90 p-10 text-center ring-1 ring-white/10">
            <h3 className="text-2xl font-bold text-white">
              Pronto para começar?
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-zinc-400">
              Clique no botão abaixo e me conte sobre o seu projeto. Respondo
              em até 2 horas.
            </p>
            <div className="mx-auto mt-8 h-24 w-24 rounded-full bg-gradient-to-b from-sky-300 to-indigo-700 p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/anderson.jpg"
                alt="Anderson Nogueira Silva"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-zinc-400">Anderson Nogueira Silva</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-900/40 transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6a11.7 11.7 0 0 1-4.5-4c-.6-.9-1-1.9-1.1-2.5-.1-.6.1-1.2.4-1.5.2-.3.5-.5.8-.5h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3-.1.5.4.7 1 1.4 1.6 2 .5.4 1.1.8 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.4-.3.6-.2l2 1c.2.1.4.2.5.4.1.1.1.7-.1 1.3z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
