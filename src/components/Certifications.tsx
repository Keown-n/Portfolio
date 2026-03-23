import { motion } from 'motion/react';
import { CheckCircle2, Cloud, Brain, Database, Cpu } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { 
      title: 'Azure Developer Associate', 
      issuer: 'Microsoft',
      icon: <Cloud className="text-primary" />,
      date: '2023',
      id: 'AZ-204'
    },
    { 
      title: 'Azure AI Engineer Associate', 
      issuer: 'Microsoft',
      icon: <Brain className="text-tertiary" />,
      date: '2023',
      id: 'AI-102'
    },
    { 
      title: 'OCI Generative AI Specialist', 
      issuer: 'Oracle',
      icon: <Cpu className="text-secondary" />,
      date: '2024',
      id: '1Z0-1127'
    },
    { 
      title: 'OCI Data Foundations', 
      issuer: 'Oracle',
      icon: <Database className="text-primary" />,
      date: '2023',
      id: '1Z0-1105'
    },
  ];

  return (
    <section id="Certifications" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-[0.3em]">Accreditations</h2>
            <h3 className="text-5xl md:text-6xl font-headline font-bold text-gradient">Industry Certified</h3>
            <p className="text-on-surface-variant max-w-xl text-lg font-light">
              Validation of technical expertise across <span className="text-on-surface">Cloud ecosystems</span> and <span className="text-on-surface">AI engineering</span> platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-[2rem] p-8 group hover:translate-y-[-8px] transition-all duration-500"
            >
              <div className="p-4 bg-white/[0.03] w-fit rounded-2xl border border-white/5 mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                {cert.icon}
              </div>
              
              <div className="space-y-2 mb-8">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface-variant/60">{cert.issuer}</p>
                <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </h4>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-xs font-mono text-on-surface-variant/50">{cert.id}</span>
                <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold uppercase tracking-widest">
                  <CheckCircle2 size={12} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
