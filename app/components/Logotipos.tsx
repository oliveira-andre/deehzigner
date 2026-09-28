import { LogoCarousel } from "./LogoCarousel";

export function Logotipos() {
  return (
    <section id="logotipos" className="bg-fundo bg-fundo-cima scroll-mt-16 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-4xl font-bold uppercase tracking-tight text-white">
          Logotipos
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Criação de identidade visual, incluindo manual de aplicação
          personalizado da marca, em diversos formatos, tipos e estilos para
          publicações e orientações, juntamente com a criação do material de
          papelaria.
        </p>

        <div className="mt-12">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}
