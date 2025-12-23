'use client';

import { motion } from 'framer-motion';

const reviews = [
    {
        clinic: 'Smiles by Stevens',
        location: 'Spokane, WA',
        name: 'Dr. Alan Stevens',
        initial: 'A',
        text: "The AI Voice Receptionist hasn't missed a single after-hours call. We're waking up to 3-4 new appointments every morning.",
        rating: 5,
    },
    {
        clinic: 'River Oaks Dental',
        location: 'Houston, TX',
        name: 'Sarah Mitchell, OM',
        initial: 'S',
        text: "Insurance verification used to take my front desk 2 hours a day. Now it's instant. The team is so much happier and we can focus on patients.",
        rating: 5,
    },
    {
        clinic: 'Parkdale Dental Centre',
        location: 'Toronto, ON',
        name: 'Dr. Emily Thompson',
        initial: 'E',
        text: "Our reactivation campaign brought back 40 patients in the first month. The ROI on this stack is undeniable. Highly recommend.",
        rating: 5,
    },
    {
        clinic: 'Desert Breeze Dentistry',
        location: 'Phoenix, AZ',
        name: 'Dr. David Hernandez',
        initial: 'D',
        text: "I was skeptical about AI answering phones, but it sounds completely natural. Patients don't even know they're talking to a bot.",
        rating: 5,
    },
    {
        clinic: 'Elm Street Dental',
        location: 'Dallas, TX',
        name: 'Jennifer Wu, RDH',
        initial: 'J',
        text: "No more phone tag. The system books them directly into Dentrix. It's streamlined our entire intake process.",
        rating: 5,
    },
    {
        clinic: 'Bayview Village Dental',
        location: 'Vancouver, BC',
        name: 'Dr. Robert Mackay',
        initial: 'R',
        text: "We were losing so many leads because we couldn't answer the phone fast enough. This software completely plugged that revenue leak.",
        rating: 5,
    },
    {
        clinic: 'Midtown Dental Arts',
        location: 'Atlanta, GA',
        name: 'Marcus Johnson, OM',
        initial: 'M',
        text: "The dashboard leads are easy to track. We know exactly how much revenue the system is generating for us in real-time.",
        rating: 5,
    },
    {
        clinic: 'Oak Park Dental',
        location: 'Chicago, IL',
        name: 'Dr. Lisa Kowalski',
        initial: 'L',
        text: "Setup was surprisingly easy. They integrated with Open Dental and we were live in less than 48 hours. Validated insurance instantly.",
        rating: 5,
    },
    {
        clinic: 'Summit Dental Care',
        location: 'Denver, CO',
        name: 'Dr. Chris Anderson',
        initial: 'C',
        text: "It's like having a receptionist who never sleeps, never takes a break, and always follows the script perfectly. Game changer.",
        rating: 5,
    },
    {
        clinic: 'Harbor Point Dental',
        location: 'Seattle, WA',
        name: 'Ashley Nguyen, OM',
        initial: 'A',
        text: "The Reactivator feature paid for the subscription in the first week. It's found thousands of dollars in unscheduled treatment.",
        rating: 5,
    },
];

export default function ReviewsSection() {
    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-xs font-semibold text-teal-300 tracking-wide uppercase">Trusted by Top Clinics</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-white mb-6"
                    >
                        Loved by Dentists & Patients Across North America
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400"
                    >
                        See why leading dental practices trust us to grow their revenue and improve patient satisfaction.
                    </motion.p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-linear-fade">
                {/* First Marquee Row */}
                <div className="flex relative overflow-hidden group">
                    <motion.div
                        className="flex gap-6 animate-marquee whitespace-nowrap py-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60,
                        }}
                    >
                        {[...reviews, ...reviews].map((review, i) => (
                            <div
                                key={i}
                                className="w-[350px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                            {review.initial}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                                            <p className="text-teal-400 text-xs">{review.clinic}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(review.rating)].map((_, starsIndex) => (
                                            <svg key={starsIndex} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed whitespace-normal italic">"{review.text}"</p>
                                <p className="text-slate-500 text-xs mt-3 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {review.location}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
