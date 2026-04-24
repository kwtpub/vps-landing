import { useEffect, useState } from "react";
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
import { Signup } from "./components/sections/Signup";
import { TermsPage } from "./components/pages/TermsPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { CancelPage } from "./components/pages/CancelPage";
import { useConfigurator } from "./hooks/useConfigurator";

function useRoute() {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}

export default function App() {
  const configurator = useConfigurator();
  const path = useRoute();

  if (path.startsWith("/signup")) return <Signup />;
  if (path.startsWith("/terms")) return <TermsPage />;
  if (path.startsWith("/privacy-policy")) return <PrivacyPolicyPage />;
  if (path.startsWith("/cancel")) return <CancelPage />;

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
