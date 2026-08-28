import { BulbMark } from "./Logo";

const stats = [
  { value: "+5.000", label: "PROJETOS" },
  { value: "+12", label: "ANOS DE EXPERIÊNCIA" },
  { value: "+400", label: "CLIENTES SATISFEITOS" },
  { value: "QUALIDADE", label: "APROVADA E ELOGIADA POR TODOS", wide: true },
];

const tools = ["Cd", "Ps", "Ai", "Pr"];

export function Hero() {
  return (
    <section id="home" className="bg-streaks pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-10 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-6">
        {/* Big brand lockup */}
        <div className="flex flex-col items-center justify-center">
          <BulbMark gid="hero" className="h-48 w-auto sm:h-60" />
          <div className="relative -mt-2 text-center">
            <span className="text-[5rem] font-bold leading-none tracking-tight text-white sm:text-[7rem]">
              D<span className="tracking-tighter">EE</span>H
            </span>
            <span className="font-script text-gradient-blue absolute -bottom-10 left-1/2 -translate-x-1/4 text-6xl sm:-bottom-14 sm:text-8xl">
              Zigner
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center gap-6 pt-10 lg:pt-0">
          <div className="splash-blob w-fit -rotate-2 px-10 py-6 text-center shadow-2xl shadow-sky-900/50">
            <p className="text-2xl font-bold leading-tight tracking-wide text-white drop-shadow sm:text-3xl">
              CRIE SUA
              <br />
              <span className="text-4xl sm:text-5xl">ARTE !!!</span>
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Transformando <span className="text-sky-300">sua ideia</span> em
            sucesso!
          </h1>
          <p className="max-w-xl text-justify font-medium leading-relaxed text-zinc-200">
            Seu negócio merece um design tão bom quanto o seu produto. Cada
            projeto é planejado e executado detalhadamente, obtendo os melhores
            resultados, deixando sua marca irresistível aos olhos do seu
            público.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-white text-sm font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-2xl font-bold tracking-wide">ANDERSON</p>
              <p className="text-sm font-medium text-amber-400">
                Designer Gráfico
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl border-t border-sky-400/60 px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-8 pb-20 pt-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 ${i > 0 ? "lg:border-l lg:border-sky-400/40" : ""}`}
            >
              <p
                className={`font-bold text-sky-300 ${
                  s.wide ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
                }`}
              >
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
