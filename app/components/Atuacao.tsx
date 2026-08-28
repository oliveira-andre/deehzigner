const icon = {
  stroke: "#18181b",
  strokeWidth: 2,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MonitorIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" {...icon}>
      <rect x="6" y="8" width="36" height="24" rx="2" />
      <path d="M24 32v6M16 40h16" />
      <path d="M12 26l7-7 5 5 6-8 6 10" />
      <circle cx="15" cy="14" r="1.6" fill="#18181b" />
    </svg>
  );
}

function TabletPenIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" {...icon}>
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <path d="M11 17v2M11 22v2M11 27v2" />
      <path d="M18 30c3-4 8-6 14-6" />
      <path d="M36 10l4 4-12 12-5 1 1-5 12-12z" />
    </svg>
  );
}

function HandPencilIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" {...icon}>
      <path d="M18 40h12v-8" />
      <path d="M16 26c0-3 2-5 4-5h8c2 0 4 2 4 5v6H16v-6z" />
      <path d="M22 21v-8l3-5 3 5v8" />
      <path d="M22 13h6" />
    </svg>
  );
}

function EaselIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" {...icon}>
      <rect x="10" y="10" width="28" height="20" rx="2" />
      <path d="M24 6v4M24 30v4M14 42l6-12M34 42l-6-12" />
      <path d="M14 26l6-6 4 4 5-7 5 9" />
    </svg>
  );
}

const services = [
  {
    icon: <MonitorIcon />,
    title: "Social Media & Artes Digitais",
    text: "Criatividade que para o feed: posts, banners e campanhas com identidade forte, pensadas para engajar e converter o seu público.",
  },
  {
    icon: <TabletPenIcon />,
    title: "Ilustração & Arte Digital",
    text: "Inspiração traçada à mão: ilustrações, mascotes e artes exclusivas que dão personalidade única à sua comunicação.",
  },
  {
    icon: <HandPencilIcon />,
    title: "Identidade Visual & Branding",
    text: "Inovação com estratégia: logotipos, paletas e manuais de marca construídos com precisão para tornar seu negócio inesquecível.",
  },
  {
    icon: <EaselIcon />,
    title: "Comunicação Visual & Impressos",
    text: "Paixão em cada detalhe: cartões, flyers, rótulos, embalagens e fechamento de arquivo impecável para a produção gráfica.",
  },
];

const adjectives = [
  "Criatividade",
  "Inspiração",
  "Inovação",
  "Estratégia",
  "Paixão",
  "Precisão",
];

export function Atuacao() {
  return (
    <section id="atuacao" className="bg-streaks-flip scroll-mt-16 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-widest text-sky-400">
          — ATUAÇÃO
        </p>
        <h2 className="mt-2 text-4xl font-bold text-white">
          O que eu posso criar para você
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Design é mais do que estética — é criatividade, inspiração e
          estratégia trabalhando juntas para dar vida à sua marca.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {adjectives.map((a) => (
            <span
              key={a}
              className="rounded-full border border-sky-400/40 bg-black/60 px-4 py-1.5 text-sm font-semibold text-sky-300"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex gap-5 rounded-2xl bg-zinc-950 p-7 shadow-xl shadow-black/50 ring-1 ring-white/10 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
