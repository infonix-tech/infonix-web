import React from 'react';
import { Monitor, Users, PieChart, Code, Database, Server, Cloud, Shield, Activity, BarChart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const CoreServices: React.FC = () => {
    const services = [
        {
            title: "Product & Software Engineering",
            mainIcon: <Monitor className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
            techIcons: [
                <Code className="w-5 h-5" />,
                <Database className="w-5 h-5" />,
                <Server className="w-5 h-5" />,
                <Cloud className="w-5 h-5" />,
                <Settings className="w-5 h-5" />
            ],
            link: "/services/software"
        },
        {
            title: "HR & Talent Optimization",
            mainIcon: <Users className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
            techIcons: [
                <Users className="w-5 h-5" />,
                <Activity className="w-5 h-5" />,
                <Shield className="w-5 h-5" />,
                <BarChart className="w-5 h-5" />
            ],
            link: "/services/hr"
        },
        {
            title: "Financial Advisory & Planning",
            mainIcon: <PieChart className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
            techIcons: [
                <BarChart className="w-5 h-5" />,
                <PieChart className="w-5 h-5" />,
                <Settings className="w-5 h-5" />,
                <Database className="w-5 h-5" />
            ],
            link: "/services/finance"
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        End-to-End Excellence
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
                        Built Around Your Needs
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -10,
                                rotateX: 2,
                                rotateY: -2,
                                transition: { duration: 0.3 }
                            }}
                            className="perspective-[1000px]"
                        >
                            <Link
                                to={service.link}
                                className="group bg-surface rounded-2xl p-10 flex flex-col items-center justify-center text-center border border-accent shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(6,59,100,0.2)] transition-all duration-300 block relative overflow-hidden h-full"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                                    </div>
                                </div>

                                <motion.div
                                    className="mb-6 p-4 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {service.mainIcon}
                                </motion.div>

                                <h4 className="text-xl font-bold text-primary mb-8 tracking-tight group-hover:text-secondary transition-colors uppercase">
                                    {service.title}
                                </h4>

                                <div className="w-full h-px bg-background mb-6"></div>

                                <div className="flex items-center justify-center space-x-4">
                                    {service.techIcons.map((icon, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * idx }}
                                            whileHover={{ y: -5, color: "var(--color-secondary)" }}
                                            className="bg-secondary/5 p-2 rounded-lg text-primary/70 hover:bg-secondary/10 transition-colors"
                                        >
                                            {icon}
                                        </motion.div>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
