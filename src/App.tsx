import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Ticker } from "./components/sections/Ticker";
import { Plans } from "./components/sections/Plans";
import { Configurator } from "./components/sections/Configurator";
import { Locations } from "./components/sections/Locations";
import { Features } from "./components/sections/Features";
import { Privacy } from "./components/sections/Privacy";
import { Stack } from "./components/sections/Stack";
import { TrustLog } from "./components/sections/TrustLog";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { useConfigurator } from "./hooks/useConfigurator";

export default function App() {
  const configurator = useConfigurator();

  return (
    <>
      <Header />
      <main className="wrap">
        <Hero pingBase={configurator.pingBase} />
      </main>
      <Ticker />
      <Plans />
      <Configurator api={configurator} />
      <Locations />
      <Features />
      <Privacy />
      <Stack />
      <TrustLog />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
