'use client';

import { motion } from 'framer-motion';

const stats = [
    {
        value: '17,500+',
        label: 'Dental appointments booked automatically',
        description: 'Practices rely on our AI to fill their schedules without lifting a finger.',
        color: 'from-blue-400 to-indigo-500',
    },
    {
        value: '7-10%',
        label: 'Increase in annual revenue',
        description: 'Clinics report consistent growth by recovering lost calls and reactivating patients.',
        color: 'from-teal-400 to-emerald-500',
    },
    {
        value: '$50M+',
        label: 'In production value generated',
        description: 'Real production value added to practice bottom lines through automated booking.',
        color: 'from-amber-400 to-orange-500',
    },
];

export default function ImpactStats() {
    return (
        <section className="py-20 relative bg-navy-900 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-serif text-white mb-2">Proof in Impact</h2>
                    <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group p-8 rounded-3xl bg-navy-800 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${stat.color} bg-clip-text text-transparent font-bold text-9xl leading-none -mt-4 -mr-4 select-none pointer-events-none`}>
                                {index + 1}
                            </div>

                            <div className="relative z-10">
                                <h3 className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 tracking-tight`}>
                                    {stat.value}
                                </h3>
                                <p className="text-xl font-semibold text-white mb-3">
                                    {stat.label}
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
