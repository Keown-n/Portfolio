import { Target, Code, Database, Cpu, User } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const highlights = [
    { icon: <Code className="text-primary" />, title: 'Software Engineering', text: 'Building robust, scalable applications with clean architecture and modern development standards.' },
    { icon: <Database className="text-secondary" />, title: 'Data Engineering', text: 'Architecting high-performance data pipelines and automated ETL processes to unlock insights.' },
    { icon: <Cpu className="text-tertiary" />, title: 'AI Solutions', text: 'Integrating cutting-edge machine learning and generative models to solve complex business challenges.' },
  ];

  return (
    <section id="About" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-12 mb-12">
            <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-[0.3em] mb-6">Introduction</h2>
            <h3 className="text-5xl md:text-7xl font-headline font-bold text-gradient leading-tight">
              Bridging Intelligence <br /> & Data Engineering.
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-8 text-on-surface-variant text-xl font-light leading-relaxed">
            <p>
              I’m a <span className="text-on-surface font-medium">Junior Business Intelligence and Data Analyst</span> who enjoys building systems that are reliable, scalable, and actually useful. I’ve worked across data, cloud, and software, and I like turning messy or complex data into something clear and practical that people can use.
            </p>
            <p className="text-lg">
              Lately, I’ve been focusing more on <span className="text-on-surface italic">AI</span> within the <span className="text-on-surface italic">cloud and data space</span>, exploring how these pieces fit together in real-world solutions. I’m interested in building systems that are not just technically solid, but also make sense from a user and business perspective.
            </p>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/5">
              {highlights.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="p-2 bg-white/[0.03] w-fit rounded-lg border border-white/5">
                    {item.icon}
                  </div>
                  <h4 className="font-headline font-bold text-on-surface">{item.title}</h4>
                  <p className="text-sm font-light leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20 mix-blend-overlay"></div>
              {/* Profile placeholder with stylized design */}
              <div className="w-full h-full">
                <img
                  src={profileImg}
                  alt="Keown Naidoo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 glass border border-white/10 rounded-2xl">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-1">South Africa</p>
                    <h4 className="text-2xl font-headline font-bold">Keown Naidoo</h4>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
