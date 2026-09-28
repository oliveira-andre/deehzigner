"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quanto tempo demora para ficar pronto?",
    a: "Depende do projeto: logotipos levam em média de 5 a 7 dias úteis, artes para redes sociais de 2 a 3 dias e identidades visuais completas de 10 a 15 dias, sempre com prazos combinados no início.",
  },
  {
    q: "Como funciona o pagamento via PIX em duas etapas?",
    a: "50% do valor é pago no início, para reservar a agenda e começar a criação, e os 50% restantes na aprovação final, antes da entrega dos arquivos definitivos.",
  },
  {
    q: "Posso parcelar no cartão?",
    a: "Sim! Projetos podem ser parcelados no cartão de crédito. As condições de parcelamento são combinadas no fechamento do orçamento.",
  },
  {
    q: "Você trabalha com qualquer segmento?",
    a: "Sim, atendo negócios de todos os segmentos — do comércio local a startups. Cada projeto começa com um briefing para entender a fundo o seu mercado e o seu público.",
  },
  {
    q: "Os arquivos são meus após a entrega?",
    a: "Sim. Após a aprovação e o pagamento final, todos os arquivos e direitos de uso da arte são seus, incluindo os formatos editáveis quando contratados.",
  },
  {
    q: "Como envio minhas referências e materiais?",
    a: "Pelo WhatsApp ou e-mail: você pode mandar logotipos existentes, fotos, textos e exemplos de estilos que gosta. Tudo é organizado no briefing do projeto.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Cada projeto inclui rodadas de ajustes para chegar ao resultado ideal. Trabalho com revisões até que a proposta esteja alinhada ao briefing aprovado.",
  },
  {
    q: "Qual o prazo de feedback para manter o projeto fluindo?",
    a: "O ideal é retornar em até 2 dias úteis a cada apresentação. Assim o cronograma combinado é mantido e o projeto não perde o ritmo.",
  },
  {
    q: "O que acontece se eu mudar o briefing durante o projeto?",
    a: "Pequenos ajustes fazem parte do processo. Mudanças significativas de direção são tratadas como novo escopo, com prazo e valores reavaliados em conjunto.",
  },
  {
    q: "Quais arquivos recebo na entrega?",
    a: "Você recebe os arquivos finais em alta resolução (PNG, JPG e PDF) e, conforme o pacote, os editáveis (AI, PSD ou CDR), além do manual de aplicação da marca.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-zinc-950/90 ring-1 ring-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white">{q}</span>
        <span
          className={`text-2xl font-light text-zinc-400 transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-300">{a}</p>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="duvidas" className="bg-fundo bg-fundo-cima-espelhada scroll-mt-16 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-widest text-sky-400">
          — DÚVIDAS
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
