import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Gift, Tags, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface Project {
    name: string;
    tagline: string;
    description: string;
    focus: string[];
    icon: React.ReactNode;
    accent: string;
}

const projects: Project[] = [
    {
        name: 'Swiftly',
        tagline: 'On-demand delivery for construction materials and medical supplies',
        description:
            "Swiftly is a mobile-first platform connecting customers with independent drivers for fast, reliable delivery from partner stores such as B&Q, Boots, and Superdrug. Targeting construction professionals, healthcare providers, and everyday consumers, Swiftly addresses an underserved niche in the UK's on-demand logistics market — launching first in Liverpool.",
        focus: [
            'Driver network management',
            'Partner store integration',
            'Real-time delivery tracking',
            'Business customer features',
        ],
        icon: <Truck className="w-8 h-8" />,
        accent: 'from-secondary/20 to-accent/10',
    },
    {
        name: 'GiftGrow',
        tagline: 'Turning birthday presents into financial futures',
        description:
            "GiftGrow is the UK's first ISA-optimised family gifting platform, enabling friends and family to contribute directly to a child's tax-efficient savings account instead of buying physical gifts. The platform combines instant gifting technology with long-term savings management — built around a simple idea: watch gifts grow into futures.",
        focus: [
            'Junior ISA integration',
            'Family contribution flows',
            'Savings dashboard',
            'Gift notifications',
        ],
        icon: <Gift className="w-8 h-8" />,
        accent: 'from-accent/20 to-surface/30',
    },
    {
        name: 'HighStreetDeals',
        tagline: 'One destination for UK high-street sales',
        description:
            'HighStreetDeals aggregates discounted items from major UK high-street retailers into a single, fast discovery platform. Fashion-conscious shoppers can search, filter, and set personalised alerts across multiple brands — all in one place, with no clutter.',
        focus: [
            'Multi-retailer data aggregation',
            'Advanced filtering',
            'Price alert engine',
            'Performance-optimised frontend',
        ],
        icon: <Tags className="w-8 h-8" />,
        accent: 'from-surface/40 to-secondary/10',
    },
    {
        name: 'Autism Connect Hub',
        tagline: 'A global digital hub for the autism community',
        description:
            'Autism Connect Hub is an inclusive social platform built to serve the 1 in 127 people worldwide affected by autism. It brings together parent networks, professional resources, and peer support into one safe, accessible environment — replacing the fragmented landscape of existing tools with a cohesive, community-first experience.',
        focus: [
            'Community networking',
            'Resource library',
            'Accessibility-first design',
            'Knowledge sharing ecosystem',
        ],
        icon: <Users className="w-8 h-8" />,
        accent: 'from-secondary/10 to-accent/20',
    },
];

const Projects: React.FC = () => {
    useSEO({
        title: 'Our Projects',
        description:
            'Selected products engineered by Infonix Solutions — Swiftly, GiftGrow, HighStreetDeals, and Autism Connect Hub. From on-demand logistics to inclusive community platforms.',
        path: '/projects',
        keywords: [
            'Swiftly',
            'GiftGrow',
            'HighStreetDeals',
            'Autism Connect Hub',
            'Infonix projects',
            'UK product engineering',
        ],
    });

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">
                            Our Work
                        </h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Projects We've Built
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80">
                            From on-demand logistics to family finance and inclusive community platforms — a
                            selection of products engineered by Infonix Solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects List */}
            <section className="bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
                    {projects.map((project, idx) => (
                        <motion.article
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-surface hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 pointer-events-none`}
                            />
                            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
                                {/* Left: Icon + Name */}
                                <div className="lg:col-span-4 flex flex-col">
                                    <div className="mb-4 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary text-background flex items-center justify-center shadow-lg">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary mb-2">
                                        0{idx + 1} · Project
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary leading-tight mb-3">
                                        {project.name}
                                    </h3>
                                    <p className="text-secondary font-semibold leading-snug">
                                        {project.tagline}
                                    </p>
                                </div>

                                {/* Right: Description + Focus */}
                                <div className="lg:col-span-8 flex flex-col">
                                    <p className="text-primary/80 leading-relaxed text-base md:text-lg mb-6 sm:mb-8">
                                        {project.description}
                                    </p>
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-4">
                                            Key Focus Areas
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {project.focus.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-3 text-primary/80"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-surface/20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            Have a Product in Mind?
                        </h2>
                        <p className="text-base sm:text-lg text-surface/80 mb-8 sm:mb-10 leading-relaxed">
                            Whether you're scaling an existing platform or building something new, our team
                            can help engineer it end-to-end.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Start a Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
