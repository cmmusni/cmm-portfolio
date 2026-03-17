import { lazy, Suspense } from "react";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { ThemeProvider } from "./contexts/ThemeContext";
import styled from "@emotion/styled";
import { useDeviceAccessAlert } from "./hooks/useDeviceAccessAlert";

// Lazy load non-critical components
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Contact = lazy(() => import("./components/sections/Contact"));

function AppContent() {
  useDeviceAccessAlert();

  const LoadingFallback = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--glass-bg);
    backdrop-filter: blur(8px);
    color: var(--color-accent);
    font-size: 1.2rem;

    @media print {
      display: none;
    }
  `;

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {/* Hero section is critical for LCP, so keep it eager loaded */}
        <Hero />

        {/* Wrap non-critical sections in Suspense */}
        <Suspense
          fallback={<LoadingFallback>Loading projects...</LoadingFallback>}
        >
          <Projects />
        </Suspense>
        <Suspense
          fallback={<LoadingFallback>Loading skills...</LoadingFallback>}
        >
          <Skills />
        </Suspense>
        <Suspense
          fallback={<LoadingFallback>Loading skills...</LoadingFallback>}
        >
          <Experience />
        </Suspense>
        <Suspense
          fallback={<LoadingFallback>Loading contact...</LoadingFallback>}
        >
          <Contact />
        </Suspense>
      </Layout>
    </EmotionThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
