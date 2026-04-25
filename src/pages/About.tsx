import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">About Infonix Solutions</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Driving Digital Excellence
                        </h1>
                        <p className="text-lg text-surface/80 max-w-3xl mx-auto">
                            We are a premier UK consulting firm specialising in Software Engineering, Human Resources, and Financial Strategy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Mission</h2>
                        <p className="text-xl text-primary/80 leading-relaxed mb-10">
                            To empower businesses globally by bridging the gap between top-tier talent and cutting-edge technology. We believe in delivering tailored, scalable, and secure consulting solutions that act as a catalyst for sustainable growth.
                        </p>
                        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
