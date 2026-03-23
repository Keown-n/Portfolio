import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative bg-background selection:bg-primary/30 selection:text-primary">
      {/* Global Engineering Theme Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Fine grid overlay */}
        <div className="absolute inset-0 blueprint-grid-fine opacity-30"></div>
        {/* Large Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid opacity-50"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/[0.01] blur-[150px] rounded-full"></div>

        {/* Scanline Effect */}
        <div className="scanline"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Background Code Snippets (Subtle) */}
      <div className="fixed top-20 left-10 opacity-[0.03] text-[10px] font-mono pointer-events-none z-0 hidden lg:block">
        <pre>{`git commit -m "feat: cloud infrastructure"
docker build -t app:v2 .
azure cli login --identity
kubectl apply -f deployment.yaml`}</pre>
      </div>
      <div className="fixed bottom-20 right-10 opacity-[0.03] text-[10px] font-mono pointer-events-none z-0 hidden lg:block">
        <pre>{`SELECT * FROM data_lake 
WHERE status = 'deployed'
GROUP BY node_id
HAVING count(*) > 100`}</pre>
      </div>
    </div>
  );
}
