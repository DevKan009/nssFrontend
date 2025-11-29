import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Calendar, Heart, Award } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Volunteers', value: 150, suffix: '+', color: 'from-nss-red to-nss-red-light' },
  { icon: Calendar, label: 'Events Organized', value: 200, suffix: '+', color: 'from-nss-purple to-nss-blue' },
  { icon: Heart, label: 'Lives Impacted', value: 10000, suffix: '+', color: 'from-nss-amber to-nss-amber-dark' },
  { icon: Award, label: 'Awards Received', value: 25, suffix: '+', color: 'from-nss-blue to-nss-purple' },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(stepValue * currentStep), value));
      } else {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-7xl font-extrabold animate-counter tabular-nums">
      {count.toLocaleString()}
      <span className="text-accent">{suffix}</span>
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-nss-slate via-nss-slate-light to-nss-slate overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-4">
            Impact By The Numbers
          </h2>
          <div className="w-24 h-1.5 bg-gradient-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.7, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="text-center group relative"
              >
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative p-8 rounded-3xl glass-effect group-hover:glass-effect transition-all duration-300">
                    <div className={`mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                      <Icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    </div>
                    <div className="mb-3">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/90 font-bold text-base md:text-lg uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
