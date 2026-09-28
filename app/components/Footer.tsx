import Image from "next/image";
import logoSmall from "@/public/Projeto_Site_DeehZigner_logo_.webp";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <Image src={logoSmall} alt="DeehZigner" className="h-10 w-auto" />
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} DeehZigner — Anderson Nogueira Silva.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
