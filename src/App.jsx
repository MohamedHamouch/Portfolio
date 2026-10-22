import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Education />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
