import Image from "next/image";
import logoSmall from "@/public/Projeto_Site_DeehZigner_logo_.webp";

const links = [
  { href: "#atuacao", label: "ATUAÇÃO" },
  { href: "#portfolio", label: "PORTIFÓLIO" },
  { href: "#sobre", label: "SOBRE" },
  { href: "#duvidas", label: "DUVIDAS" },
  { href: "#contato", label: "CONTATO" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/85 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home">
          <Image
            src={logoSmall}
            alt="DeehZigner — início"
            preload
            className="h-11 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold tracking-wide text-white transition-colors hover:text-sky-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="group flex items-center gap-2 rounded-full border border-sky-400/70 px-5 py-2 text-xs font-bold tracking-widest text-sky-300 transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.35)]"
        >
          INICIAR PROJETO
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
