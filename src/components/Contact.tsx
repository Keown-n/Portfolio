import { motion } from 'motion/react';
import { Mail, Linkedin, Send, Github, MessageSquare } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { Icon: Linkedin, href: 'http://www.linkedin.com/in/keown-naidoo-747b26209', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/Keown-n/keown-work', label: 'GitHub' }
  ];

  return (
    <section id="Contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>

          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Open for collaboration</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-gradient">
              Let's engineer the <br /> future together.
            </h2>

            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're looking for a cloud architect, an AI specialist, or a collaborative engineer, I'm always open to discussing new technical horizons.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <a
                href="mailto:contact@keownnaidoo.com"
                className="group relative bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(162,201,255,0.3)] hover:shadow-[0_0_40px_rgba(162,201,255,0.5)] transition-all"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Mail size={22} className="relative z-10" />
                <span className="relative z-10">Send a message</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Icon size={24} className="text-on-surface-variant group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Decorative backdrop elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary/10 blur-[100px] rounded-full"></div>
    </section>
  );
}
