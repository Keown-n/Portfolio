import { motion } from 'motion/react';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Junior Business Intelligence and Data Analyst',
      company: 'Sambe Consulting',
      location: 'Johannesburg (Remote)',
      period: 'Feb 2026 — Present',
      description: [
        'Maintained, tested, and deployed software solutions to Microsoft Azure, leveraging Docker, Azure Container Registry, Web Apps, and Azure Blob Storage to ensure scalable, reliable cloud-based applications.',
        'Designed and developed interactive Power BI reports and dashboards, translating complex data into actionable business insights for stakeholders.',
        'Developed multiple prototype applications to rapidly test and validate API functionalities and concepts, accelerating feature experimentation and solution development.',
        'Created UI/UX designs and prototypes using Figma and React.js, collaborating with stakeholders and developers to ensure intuitive and user-friendly interfaces.'
      ],
      current: true,
      tags: ['Azure', 'Power BI', 'React.js', 'Docker']
    },
    {
      title: 'Graduate Business Intelligence and Data Analyst',
      company: 'Sambe Consulting',
      location: 'Johannesburg (Remote)',
      period: 'Feb 2025 — Jan 2026',
      description: [
        'Gained hands-on experience across data engineering, BI reporting, DevOps automation, AI/LLM systems, and Power Platform development, applying modern engineering practices to real-world business environments.',
        'Worked collaboratively in Agile teams using Scrum and Kanban methodologies, managing work with Jira and documenting processes in Confluence to support knowledge sharing.',
        'Built practical experience with CI/CD pipelines, version control, cloud platforms, workflow automation, ETL processes, and analytics development.',
        'Achieved the Oracle Cloud Infrastructure Generative AI Professional Certification, strengthening expertise in generative AI, prompt engineering, and embeddings.',
        'Developed strong stakeholder communication skills through delivering multiple technical presentations and solution demonstrations.'
      ],
      current: false,
      tags: ['Data Engineering', 'DevOps', 'GenAI', 'Agile']
    }
  ];

  return (
    <section id="Experience" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-[0.3em] mb-6">Journey</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-bold text-gradient">Professional Experience</h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group lg:grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-3 mb-4 lg:mb-0">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className={`px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${exp.current ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-white/[0.03] text-on-surface-variant border border-white/5'}`}>
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-2 mt-3 text-on-surface-variant/60 text-xs hidden lg:flex">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="h-px bg-white/5 flex-grow lg:hidden"></div>
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className={`glass-card rounded-[2rem] p-8 lg:p-12 group-hover:bg-white/[0.03] transition-all duration-500 relative ${exp.current ? 'border-primary/20' : ''}`}>
                  {exp.current && (
                    <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-on-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(162,201,255,0.4)]">
                      Active Role
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h4 className="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{exp.title}</h4>
                      <div className="flex items-center gap-2 mt-2 text-on-surface-variant/80 font-medium italic">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] uppercase font-bold tracking-wider opacity-60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-4 group/item">
                        <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors"></div>
                        <p className="text-on-surface-variant text-lg font-light leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
