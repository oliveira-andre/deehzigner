const projects = [
  {
    img: "/projects/cafe-aurora.svg",
    title: "Café Aurora",
    subtitle: "Identidade visual completa para cafeteria artesanal",
  },
  {
    img: "/projects/vitafit.svg",
    title: "VitaFit Suplementos",
    subtitle: "Social media e rótulos para linha de suplementos",
  },
  {
    img: "/projects/barber-king.svg",
    title: "Barber King",
    subtitle: "Logotipo e materiais impressos para barbearia premium",
  },
  {
    img: "/projects/nuvemtech.svg",
    title: "NuvemTech",
    subtitle: "Branding e apresentação institucional para startup",
  },
  {
    img: "/projects/doce-mel.svg",
    title: "Doce Mel Confeitaria",
    subtitle: "Embalagens e cardápio digital para confeitaria",
  },
  {
    img: "/projects/ecoverde.svg",
    title: "EcoVerde",
    subtitle: "Identidade sustentável e rótulos para cosméticos naturais",
  },
  {
    img: "/projects/boteco-ze.svg",
    title: "Boteco do Zé",
    subtitle: "Comunicação visual e cardápio para bar temático",
  },
  {
    img: "/projects/studio-lumi.svg",
    title: "Studio Lumi",
    subtitle: "Marca e kit de redes sociais para estúdio fotográfico",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-fundo bg-fundo-baixo-espelhada scroll-mt-16 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-widest text-sky-400">
          — PORTIFÓLIO
        </p>
        <h2 className="mt-2 text-4xl font-bold text-white">
          Projetos que ganharam vida
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Uma seleção de marcas e campanhas criadas com dedicação — cada uma
          com sua própria história e personalidade.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl shadow-lg shadow-black/50 ring-1 ring-white/10 transition-transform hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={`Projeto ${p.title}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-zinc-950 p-4">
                <h3 className="font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  {p.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
