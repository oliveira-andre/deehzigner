import Image from "next/image";
import icon1 from "@/public/Projeto_Site_DeehZigner_1.webp";
import icon2 from "@/public/Projeto_Site_DeehZigner_2.webp";
import icon3 from "@/public/Projeto_Site_DeehZigner_3.webp";
import icon4 from "@/public/Projeto_Site_DeehZigner_4.webp";
import icon5 from "@/public/Projeto_Site_DeehZigner_5.webp";
import icon6 from "@/public/Projeto_Site_DeehZigner_6.webp";

const services = [
  {
    icon: icon1,
    title: "Ilustração & Arte Digital",
    text: "Inspiração traçada à mão: ilustrações, mascotes e artes exclusivas que dão personalidade única à sua comunicação.",
  },
  {
    icon: icon2,
    title: "Social Media & Artes Digitais",
    text: "Criatividade que para o feed: posts, banners e campanhas com identidade forte, pensadas para engajar e converter o seu público.",
  },
  {
    icon: icon3,
    title: "Identidade Visual & Branding",
    text: "Inovação com estratégia: logotipos, paletas e manuais de marca construídos para tornar seu negócio inesquecível.",
  },
  {
    icon: icon4,
    title: "Comunicação Visual & Impressos",
    text: "Paixão em cada detalhe: cartões, flyers, banners, fachadas e materiais de papelaria que causam impacto.",
  },
  {
    icon: icon5,
    title: "Arte-Final & Vetorização",
    text: "Precisão técnica: vetorização, ajustes de cor e fechamento de arquivos prontos para a gráfica, sem surpresas na produção.",
  },
  {
    icon: icon6,
    title: "Rótulos & Embalagens",
    text: "Estratégia na prateleira: rótulos e embalagens que destacam seu produto e conquistam o consumidor à primeira vista.",
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
    <section id="atuacao" className="bg-fundo bg-fundo-cima-espelhada scroll-mt-16 py-32">
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
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 ring-1 ring-sky-400/25">
                <Image
                  src={s.icon}
                  alt=""
                  className="h-12 w-12 object-contain"
                />
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
