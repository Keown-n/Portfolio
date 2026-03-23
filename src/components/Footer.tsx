import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Keown-n/keown-work', label: 'GitHub' },
    { Icon: Linkedin, href: 'http://www.linkedin.com/in/keown-naidoo-747b26209', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:keown.naidoo.09@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="py-20 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="text-3xl font-headline font-bold tracking-tighter">
              KN<span className="text-primary text-4xl">.</span>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light leading-relaxed">
              Engineering high-performance data systems and AI-driven solutions for the next generation of enterprise architecture.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-6">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="text-on-surface-variant hover:text-primary transition-colors group"
                >
                  <Icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-6 py-3 rounded-full transition-all"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-mono text-on-surface-variant/40">
            © {new Date().getFullYear()} Keown Naidoo. All rights reserved. Built with precision.
          </p>
          <div className="flex gap-8 text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface-variant/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
