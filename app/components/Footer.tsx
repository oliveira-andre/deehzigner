import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-streaks-flip border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <Wordmark gid="ftr" className="text-xl" />
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} DeehZigner — Anderson Nogueira Silva.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
