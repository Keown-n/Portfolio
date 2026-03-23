import { motion } from 'motion/react';
import { 
  Database, 
  Cloud, 
  Code2, 
  Layout, 
  Binary, 
  BarChart3
} from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code2 className="text-primary w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'React.js', 'Java', 'C#', 'C++', 'PHP', 'VB .NET'],
      color: 'primary'
    },
    {
      title: 'Data Engineering',
      icon: <Binary className="text-secondary w-6 h-6" />,
      skills: ['SSIS', 'Elasticsearch', 'Logstash', 'Kibana', 'ETL Pipelines'],
      color: 'secondary'
    },
    {
      title: 'Databases',
      icon: <Database className="text-tertiary w-6 h-6" />,
      skills: ['MS SQL Server', 'MySQL', 'PostgreSQL', 'MS Access', 'T-SQL'],
      color: 'tertiary'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="text-primary w-6 h-6" />,
      skills: ['Microsoft Azure', 'Terraform', 'Docker', 'GitHub Actions', 'Git'],
      color: 'primary'
    },
    {
      title: 'BI & Analytics',
      icon: <BarChart3 className="text-secondary w-6 h-6" />,
      skills: ['Power BI', 'SSRS', 'Actionable Insights', 'Data Visualisation'],
      color: 'secondary'
    },
    {
      title: 'Low-Code Ecosystem',
      icon: <Layout className="text-tertiary w-6 h-6" />,
      skills: ['PowerApps', 'Power Automate', 'SharePoint', 'M365'],
      color: 'tertiary'
    },
  ];

  return (
    <section id="Skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-[0.3em] mb-6">Capabilities</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-bold text-gradient mb-8 leading-tight">Technical Toolkit</h3>
          <p className="text-on-surface-variant text-xl font-light leading-relaxed">
            A comprehensive set of tools for engineering <span className="text-on-surface">data-driven solutions</span>. 
            Organized by domain for clarity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-[2.5rem] p-10 flex flex-col group hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500">
                  {cat.icon}
                </div>
                <h4 className="text-lg font-headline font-bold uppercase tracking-widest text-on-surface/90">
                  {cat.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      bg-white/[0.03] border border-white/5 text-on-surface-variant/80
                      hover:bg-white/10 hover:border-white/20 hover:text-white
                      hover:translate-y-[-2px] cursor-default
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
