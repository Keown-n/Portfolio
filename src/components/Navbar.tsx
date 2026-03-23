import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navHeight = useTransform(scrollY, [0, 50], ["100px", "70px"]);
  const navPadding = useTransform(scrollY, [0, 50], ["24px", "12px"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <motion.nav 
      style={{ height: navHeight, padding: navPadding }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'glass border-white/10' : 'bg-transparent border-transparent'} px-6 flex items-center justify-center`}
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-headline font-bold tracking-tighter"
        >
          KN<span className="text-primary text-3xl">.</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-full backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-6 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:text-white hover:bg-white/[0.05] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.nav>
  );
}
