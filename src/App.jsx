import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // reducedMotion="user": when the OS asks for less motion, framer-motion drops
    // the slide/bounce (transform) animations and keeps only the opacity fades.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--color-bg)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </MotionConfig>
  );
}

export default App;
