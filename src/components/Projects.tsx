import { motion } from 'motion/react';
import { ExternalLink, Database, Globe, Layers, ArrowUpRight, Cpu, Activity, ShieldCheck, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const cards = containerRef.current.getElementsByClassName('spotlight-card');
      for (const card of cards) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'SSIS ETL Pipeline with AI Query Prototype',
      description: 'Developed an end-to-end ETL solution for timesheet data using SSIS and SQL Server. Integrated Elastic Stack for observability and implemented CI/CD via GitHub Actions. Enhanced the system with a RAG prototype using local LLMs (Ollama) and cloud LLMs (Deepseek R1 via OpenRouter).',
      tags: ['SSIS', 'SQL Server', 'Elastic Stack', 'Python', 'LLM', 'Power BI'],
      colSpan: 'md:col-span-3',
      icon: <Database size={40} className="text-primary" />,
      repoUrl: 'https://github.com/Keown-n/keown-work/tree/main/HandsOnProjects/Timesheet'
    },
    {
      title: 'Browser-Agent MCP Server',
      description: 'Developed a custom Model Context Protocol (MCP) server to transform an LLM into a semi-autonomous web agent. Implemented advanced anti-bot evasion techniques, including playwright-stealth and randomized human-like interaction patterns (typing, scrolling, mouse movements). Engineered an organic search workflow and persistent session management system to maintain authenticated states and mimic human behavior. Enabled visual-based reasoning through automated full-page screenshots and base64 visual feedback for real-time web research and data extraction.',
      tags: ['Python', 'Playwright', 'FastMCP', 'Claude Desktop', 'JSON', 'uv'],
      colSpan: 'md:col-span-3',
      icon: <Cpu size={40} className="text-secondary" />,
      repoUrl: 'https://github.com/Keown-n/keown-work/tree/main/HandsOnProjects/BrowserAgent'
    },
    {
      title: 'Employee Attrition Predictor & Retention App',
      description: 'ML-based prediction model and web interface developed during a hackathon to identify turnover risk and offer data-driven retention strategies. Includes interactive Power BI dashboards for deep insights into workforce trends.',
      tags: ['ML', 'Python', 'Jupyter', 'Power BI'],
      colSpan: 'md:col-span-2',
      icon: <Activity size={40} className="text-tertiary" />,
      repoUrl: 'https://github.com/Keown-n/keown-work/tree/main/HandsOnProjects/AttritionMachineLearning'
    },
    {
      title: 'Financial News Cross-Validation System',
      description: 'Cloud-based platform (Azure) featuring secure REST APIs and a Google Plugin UI. Aggregates and normalizes financial news from multiple sources into PostgreSQL for sentiment analysis, credibility scoring, and real-time monitoring.',
      tags: ['Azure', 'Flask API', 'Postgres', 'Sentiment Analysis'],
      colSpan: 'md:col-span-4',
      icon: <ShieldCheck size={40} className="text-primary" />,
      repoUrl: 'https://github.com/Keown-n/keown-work/tree/main/HandsOnProjects/CrossValidationSystem'
    }
  ];

  return (
    <section id="Projects" className="py-32 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-[0.3em]">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-headline font-bold text-gradient">Technical Projects</h3>
            <p className="text-on-surface-variant max-w-xl text-lg font-light">
              Industrial-grade engineering projects spanning <span className="text-on-surface">ETL pipelines</span>, <span className="text-on-surface">enterprise apps</span>, and <span className="text-on-surface">AI cross-validation</span>.
            </p>
          </div>
          <a href="https://github.com/Keown-n/keown-work/tree/main/HandsOnProjects/Timesheet" className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-6 py-3 rounded-full transition-all duration-300">
            <span className="text-sm font-medium">Explore repositories</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`${project.colSpan} glass-card spotlight-card spotlight-hover rounded-3xl p-10 flex flex-col justify-between group overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="mb-8 p-4 bg-white/[0.03] w-fit rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>

                <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </h4>

                <p className="text-on-surface-variant text-base leading-relaxed mb-10 font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/[0.05] border border-primary/20 text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/[0.03] hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-white/5"
                    title="View Box Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
