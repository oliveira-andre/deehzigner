export function Sobre() {
  return (
    <section id="sobre" className="bg-streaks scroll-mt-16 py-32 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Portrait */}
        <div className="relative mx-auto w-fit">
          <span
            aria-hidden
            className="absolute left-1/2 top-6 z-0 -translate-x-1/2 whitespace-nowrap text-7xl font-black tracking-tight text-gradient-blue opacity-80 sm:text-8xl"
          >
            ANDERSON
          </span>
          <div className="relative z-10 mt-16 h-64 w-64 rounded-full bg-gradient-to-b from-sky-200 via-blue-400 to-indigo-700 p-1.5 sm:h-80 sm:w-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/anderson.jpg"
              alt="Anderson Nogueira Silva, designer gráfico"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -right-4 bottom-4 z-20 text-6xl font-black text-sky-400"
          >
            *
          </span>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm font-bold tracking-widest text-blue-400">
            — SOBRE
          </p>
          <h2 className="mt-3 text-5xl font-bold leading-none">ANDERSON</h2>
          <p className="text-3xl font-light text-sky-300">NOGUEIRA SILVA</p>
          <p className="mt-1 text-lg tracking-wide text-zinc-300">
            DESIGNER GRÁFICO / ARTE FINALISTA
          </p>

          <div className="mt-8 space-y-4 text-justify leading-relaxed text-zinc-200">
            <p>
              Designer Gráfico com mais de 10 anos de experiência em criação
              visual, identidade de marca, materiais digitais e impressos.
              Atuação em desenvolvimento de artes para redes sociais, rótulos,
              embalagens, comunicação visual e fechamento de arquivos para
              produção. Experiência com atendimento ao cliente, aprovação de
              materiais e criação estratégica para marcas. Domínio de
              Photoshop, Illustrator, CorelDRAW e ferramentas digitais.
            </p>
            <p>
              Busco oportunidade home office para atuar com design criativo e
              comunicação visual de alto impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
