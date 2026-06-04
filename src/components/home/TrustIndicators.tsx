import React from 'react';
import { TrendingUp, Users, Globe, Layers } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '../common/Magnetic';

const TrustIndicators: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const cards = [
        {
            icon: TrendingUp,
            title: 'Results You Can Measure',
            desc: 'We track enquiries, keyword rankings, and traffic so you can see exactly what your investment is returning. Monthly plain-English reports — no jargon, no guesswork.',
            initialX: -100,
            initialY: -100,
        },
        {
            icon: Users,
            title: 'A Team of 20, Not One Person',
            desc: 'You get the reliability of an established agency with the personal attention of a dedicated team. UK-managed and globally delivered — 20 specialists across the UK, India, and Sri Lanka.',
            initialX: 100,
            initialY: -100,
        },
        {
            icon: Globe,
            title: 'Built for Real Businesses',
            desc: 'We work with sole traders, local businesses, and growing companies — not just large corporations. Our prices and processes are designed to work for independent businesses.',
            initialX: -100,
            initialY: 100,
        },
        {
            icon: Layers,
            title: 'From Website to Full Automation',
            desc: 'Whether you need a 5-page website or a complete automation suite with AI chatbots and HR tools — we deliver it end-to-end under one roof, at a price that works for you.',
            initialX: 100,
            initialY: 100,
        },
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        Why businesses choose <span className="text-secondary">Infonix Solutions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative shadow-2xl group border border-surface"
                    >
                        <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <motion.img
                            style={{ y: yParallax, scale: 1.15 }}
                            src="/sketch-hero.png"
                            alt="Infonix Solutions team at work"
                            className="w-full h-full object-cover transform transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 bg-background/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl max-w-[280px]">
                            <p className="text-primary font-bold text-lg mb-1">Chester-based. Worldwide clients.</p>
                            <p className="text-primary/60 text-sm">Delivering digital solutions for businesses globally since 2018.</p>
                        </div>
                    </motion.div>

                    {/* Right Cards Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <Magnetic key={index}>
                                <motion.div
                                    initial={{ opacity: 0, x: card.initialX, y: card.initialY }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        damping: 20,
                                        stiffness: 100,
                                        delay: index * 0.1,
                                    }}
                                    className="group bg-surface rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center border border-accent h-full transition-all duration-500 hover:bg-primary hover:border-primary shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(6,59,100,0.3)]"
                                >
                                    <div className="mb-6 transition-colors duration-300">
                                        <card.icon className="w-10 h-10 text-secondary group-hover:text-background transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 tracking-tight uppercase text-primary group-hover:text-background transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-primary/70 group-hover:text-background/80 transition-colors duration-300">
                                        {card.desc}
                                    </p>
                                </motion.div>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
