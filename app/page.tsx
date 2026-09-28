import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Atuacao } from "./components/Atuacao";
import { Portfolio } from "./components/Portfolio";
import { Logotipos } from "./components/Logotipos";
import { Sobre } from "./components/Sobre";
import { Faq } from "./components/Faq";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Atuacao />
        <Portfolio />
        <Logotipos />
        <Sobre />
        <Faq />
      </main>
      {/* Contato and the footer share one background so the page ends on the
          bottom streak band without a seam above the footer. */}
      <div className="bg-fundo bg-fundo-baixo">
        <Contato />
        <Footer />
      </div>
    </>
  );
}
