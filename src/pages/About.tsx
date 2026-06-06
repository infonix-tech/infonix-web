import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const About: React.FC = () => {
    useSEO({
        title: 'About Us — UK Software & Business Solutions Agency',
        description:
            'Infonix Solutions is a UK software and business solutions agency founded in 2018, based in Chester and serving Liverpool, the North West and beyond. A team of 20 helping businesses get found online, automate operations and grow.',
        path: '/about',
        keywords: [
            'software solutions agency UK',
            'business solutions company Liverpool',
            'web design agency Chester',
            'digital agency North West',
        ],
    });

    const stats = [
        { label: 'Founded', value: '2018' },
        { label: 'Team Size', value: '20' },
        { label: 'Countries', value: '3' },
        { label: 'Services', value: '10+' },
    ];

    const differentiators = [
        'We are a team of 20, not a one-person freelancer or a faceless corporate agency',
        'Our delivery team in India and Sri Lanka means we can offer quality at prices that work for independent businesses',
        'We specialise in rescuing projects that were started but never finished — if a previous developer let you down, we can pick it up',
        'We are currently accepting founding client projects at preferential rates',
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">About Infonix Solutions</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            We Are Infonix Solutions
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 max-w-3xl mx-auto">
                            A UK-based digital agency helping businesses get found online, automate their operations, and grow — without the corporate price tag.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-secondary py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                                <p className="text-sm font-semibold text-primary/70 mt-1 uppercase tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Our Story</h2>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                            From Consultancy to Full-Service Digital Agency
                        </h3>
                        <p className="text-base sm:text-lg text-primary/80 leading-relaxed">
                            Infonix Solutions was founded in February 2018 and is headquartered in Chester, UK. What started as a software engineering consultancy has grown into a full-service digital agency with a team of 20 spanning the UK, India, and Sri Lanka. We work with businesses of every size — from sole traders who have never had a website, to growing companies that need intelligent automation to reduce overheads.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="bg-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-accent">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">What Makes Us Different</h2>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-8">
                            Why Businesses Choose Infonix Solutions
                        </h3>
                        <ul className="space-y-4">
                            {differentiators.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-start gap-3 text-base text-primary/80 leading-relaxed"
                                >
                                    <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
                        <p className="text-base sm:text-lg text-surface/80 mb-8">
                            Get in touch to discuss your project. No jargon, no obligation — just a straight conversation about what we can build for you.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Work With Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
