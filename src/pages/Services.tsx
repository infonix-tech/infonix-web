import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Laptop, PiggyBank, BarChart, ShieldCheck, Code, Cloud, Lightbulb, UserCheck, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface ServiceContent {
    name: string;
    description: string;
    icon: React.ReactNode;
    subServices: { title: string; desc: string; icon: React.ReactNode }[];
    linkText: string;
}

const Services: React.FC = () => {
    useSEO({
        title: 'Services — Software, HR & Finance Consulting',
        description:
            'Tailored consulting across software engineering, human resources, and finance — from custom development and cloud architecture to talent acquisition and financial planning.',
        path: '/services',
        keywords: [
            'software consulting',
            'HR consulting',
            'finance consulting',
            'cloud architecture',
            'talent acquisition',
            'UK consulting firm',
        ],
    });

    const servicesList: ServiceContent[] = [
        {
            name: "Software Consulting",
            description: "End-to-end software engineering and digital transformation strategies to accelerate your business growth.",
            icon: <Laptop className="w-8 h-8 text-secondary" />,
            subServices: [
                { title: "Custom Development", desc: "Tailored software solutions designed for your unique operational needs.", icon: <Code className="w-6 h-6" /> },
                { title: "Cloud Architecture", desc: "Scalable and secure cloud infrastructure planning and migration.", icon: <Cloud className="w-6 h-6" /> },
                { title: "Digital Strategy", desc: "Consulting on the right tech stack and digital initiatives.", icon: <Lightbulb className="w-6 h-6" /> }
            ],
            linkText: "Discuss Software Consulting"
        },
        {
            name: "HR Consulting",
            description: "Attract, retain, and develop the best talent while maintaining compliance with employment laws.",
            icon: <Users className="w-8 h-8 text-secondary" />,
            subServices: [
                { title: "Talent Acquisition", desc: "Strategic recruitment processes to find top-tier professionals.", icon: <UserCheck className="w-6 h-6" /> },
                { title: "Workforce Planning", desc: "Optimising team structures and planning for future growth.", icon: <Briefcase className="w-6 h-6" /> },
                { title: "Training & Development", desc: "Programs to upskill employees and foster leadership.", icon: <GraduationCap className="w-6 h-6" /> }
            ],
            linkText: "Discuss HR Consulting"
        },
        {
            name: "Finance Consulting",
            description: "Strategic financial guidance to help organisations plan, grow, and stay compliant.",
            icon: <TrendingUp className="w-8 h-8 text-secondary" />,
            subServices: [
                { title: "Financial Planning", desc: "Budgeting, forecasting, and long-term financial strategy.", icon: <PiggyBank className="w-6 h-6 text-secondary" /> },
                { title: "Advisory Services", desc: "Expert guidance on investments, M&A, and business growth.", icon: <BarChart className="w-6 h-6 text-secondary" /> },
                { title: "Compliance Support", desc: "Navigate regulatory requirements with confidence.", icon: <ShieldCheck className="w-6 h-6 text-secondary" /> }
            ],
            linkText: "Discuss Finance Consulting"
        }
    ];

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
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Our Services</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Tailored Consulting Solutions
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80">
                            Partnering with you to deliver strategic excellence across technology, human resources, and finance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
                    {servicesList.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="pt-10 sm:pt-12 border-t border-surface/50 first:border-0 first:pt-0"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                                <div className="bg-surface p-3 sm:p-4 rounded-xl">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                                    {service.name}
                                </h2>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl text-primary/70 mb-8 sm:mb-10 max-w-3xl">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                                {service.subServices.map((sub, sidx) => (
                                    <div key={sidx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-surface hover:shadow-md transition-shadow duration-300">
                                        <div className="mb-4 text-secondary/70">
                                            {sub.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{sub.title}</h3>
                                        <p className="text-primary/70">{sub.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-secondary hover:bg-primary text-background font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-md transition-all duration-300 group text-sm sm:text-base"
                            >
                                {service.linkText}
                                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
