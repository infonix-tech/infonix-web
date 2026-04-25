import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Landmark, HeartPulse, ShoppingCart, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
    const industriesData = [
        {
            title: "Technology",
            description: "Driving innovation with expert software engineering, cloud architecture, and digital transformation consulting.",
            icon: <Laptop className="w-8 h-8" />
        },
        {
            title: "Finance & Banking",
            description: "Supporting financial institutions with compliance, talent, and technology solutions for a regulated environment.",
            icon: <Landmark className="w-8 h-8" />
        },
        {
            title: "Healthcare",
            description: "Bridging technology and talent to improve patient outcomes and operational efficiency in healthcare.",
            icon: <HeartPulse className="w-8 h-8" />
        },
        {
            title: "Retail & E-Commerce",
            description: "Helping retailers adapt to digital channels with modern technology and skilled professionals.",
            icon: <ShoppingCart className="w-8 h-8" />
        },
        {
            title: "Manufacturing",
            description: "Optimising operations and workforce planning for manufacturing companies navigating Industry 4.0.",
            icon: <Factory className="w-8 h-8" />
        },
        {
            title: "Education",
            description: "Empowering educational institutions with technology consulting and staffing solutions.",
            icon: <GraduationCap className="w-8 h-8" />
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Industries</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Industries We Serve
                        </h1>
                        <p className="text-lg text-surface/80">
                            We bridge talent and technology across diverse sectors, delivering tailored consulting solutions for every industry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industriesData.map((ind, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-2xl shadow-lg border border-surface hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="mb-6 w-16 h-16 rounded-full bg-surface/50 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
                                    {ind.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{ind.title}</h3>
                                <p className="text-primary/70 leading-relaxed">
                                    {ind.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-surface/20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            Don't See Your Industry?
                        </h2>
                        <p className="text-lg text-surface/80 mb-10 leading-relaxed">
                            Our consulting expertise extends beyond the sectors listed. Get in touch to discuss your specific needs.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Let's Talk
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
