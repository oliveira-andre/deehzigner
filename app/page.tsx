import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Atuacao } from "./components/Atuacao";
import { Portfolio } from "./components/Portfolio";
import { Logotipos } from "./components/Logotipos";
import { Sobre } from "./components/Sobre";
import { Faq } from "./components/Faq";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { StreaksAligner } from "./components/StreaksAligner";

export default function Home() {
  return (
    <>
      <StreaksAligner />
      <Header />
      <main className="flex-1">
        <Hero />
        <Atuacao />
        <Portfolio />
        <Logotipos />
        <Sobre />
        <Faq />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
