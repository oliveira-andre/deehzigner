import Image from "next/image";
import rosto from "@/public/Projeto_Site_DeehZigner_rosto.webp";

export function Sobre() {
  return (
    <section id="sobre" className="bg-streaks scroll-mt-16 py-32 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-xl">
          <Image
            src={rosto}
            alt="Anderson Nogueira Silva, designer gráfico"
            sizes="(min-width: 1024px) 576px, 100vw"
            className="h-auto w-full"
          />
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
