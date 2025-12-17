import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from './styles/GlobalStyles.jsx';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/layout/Navigation';
import Hero from './components/blocks/Hero';
import About from './components/blocks/About';
import Projects from './components/blocks/Projects';
import Skills from './components/blocks/Skills';
import Contact from './components/blocks/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </ThemeProvider>
  );
}

export default App;
