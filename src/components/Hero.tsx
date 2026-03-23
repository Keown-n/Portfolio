import { motion } from 'motion/react';
import { Download, Code, Share2, CheckCircle2, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const codeLines = [
    { num: 1, content: <><span className="text-primary italic">import</span> <span className="text-on-surface">azure.storage.blob</span> <span className="text-primary">as</span> <span className="text-on-surface">blob</span></> },
    { num: 2, content: <><span className="text-primary italic">from</span> <span className="text-on-surface">openai</span> <span className="text-primary">import</span> <span className="text-on-surface">AzureOpenAI</span></> },
    { num: 3, content: <>&nbsp;</> },
    { num: 4, content: <><span className="text-on-surface-variant/40 italic"># Initialize Data Pipeline</span></> },
    { num: 5, content: <><span className="text-tertiary">def</span> <span className="text-primary">process_pipeline</span><span className="text-on-surface">():</span></> },
    { num: 6, content: <><span className="pl-4 text-on-surface">client = AzureOpenAI(api_key=os.getenv(</span><span className="text-secondary">"AZURE_KEY"</span><span className="text-on-surface">))</span></> },
    { num: 7, content: <><span className="pl-4 text-on-surface">sql_query = </span><span className="text-secondary">"SELECT * FROM gold_layer.attrition"</span></> },
    { num: 8, content: <><span className="pl-4 text-primary">with</span> <span className="text-on-surface">docker.container.run(</span><span className="text-secondary">"etl-processor"</span><span className="text-on-surface">) </span><span className="text-primary">as</span> <span className="text-on-surface">c:</span></> },
    { num: 9, content: <><span className="pl-8 text-on-surface">c.execute(sql_query)</span></> },
    { num: 10, content: <><span className="pl-4 text-primary italic">return</span> <span className="text-secondary">"200 OK - Pipeline Live"</span></> },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden spotlight-hover"
    >
      {/* Background Elements - blended with global theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-xl">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(103,223,112,0.5)] animate-pulse"></span>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-on-surface-variant">Currently employed at Sambe Consulting</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] text-gradient">
            Engineering for <br />
            <span className="text-gradient-primary">AI | Software | <br />  Data</span>
          </h1>

          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-light">
            Junior Consultant: Business Intelligence and Data Analyst. <br /> bridging the gap between raw data and intelligent systems. Specializing in <span className="text-on-surface font-medium underline decoration-primary/40 underline-offset-4">scalable cloud infrastructure</span> and AI-driven solutions.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button className="group relative bg-primary text-on-primary px-10 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(162,201,255,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10"><a href="https://github.com/Keown-n/keown-work">View Projects</a></span>
              <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <div className="flex gap-3">
              {[Download, Code, Share2].map((Icon, i) => (
                <button
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <Icon size={22} className="text-on-surface-variant group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group perspective-1000"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-tertiary/30 blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 pointer-events-none"></div>

          <div className="relative glass border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform-gpu transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="bg-white/[0.03] px-5 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40 shadow-[0_0_8px_rgba(239,68,68,0.2)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/40 shadow-[0_0_8px_rgba(234,179,8,0.2)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/40 shadow-[0_0_8px_rgba(34,197,94,0.2)]"></div>
              </div>
              <div className="text-[10px] font-mono text-on-surface-variant/50 tracking-[0.2em] uppercase font-bold">DataPipeline.py</div>
              <div className="w-12"></div>
            </div>

            <div className="p-8 font-mono text-[13px] leading-relaxed custom-scrollbar max-h-[450px] overflow-y-auto bg-black/20">
              {codeLines.map((line) => (
                <motion.div
                  key={line.num}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + line.num * 0.05 }}
                  className="flex gap-6 group/line"
                >
                  <span className="text-outline-variant/30 select-none w-4 text-right tabular-nums group-hover/line:text-outline-variant transition-colors">{line.num}</span>
                  <span className="text-on-surface/90">{line.content}</span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 pt-6 border-t border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border border-background flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-secondary text-xs font-semibold tracking-wide flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Insights Optimized - 99.9% Uptime
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Element Decorations */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-tertiary/10 blur-xl rounded-full animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 blur-xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </motion.div>
      </div>
    </section>
  );
}
