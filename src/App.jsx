import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';

import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dark-900 text-gray-300 overflow-x-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />

        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
