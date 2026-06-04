import React from 'react';
import { Monitor, MessageSquareMore, Zap, LifeBuoy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Website Design & Development',
        mainIcon: <Monitor className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
        description: 'Modern, mobile-friendly websites built to convert visitors into customers.',
        bullets: [
            'Mobile-first design that works on all devices',
            'Fast loading and Google-optimised',
            'Clear call to action on every page',
            'Secure with HTTPS and SSL as standard',
        ],
        link: '/services',
    },
    {
        title: 'AI Chatbots',
        mainIcon: <MessageSquareMore className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
        description: 'AI-powered chatbots that answer customer questions and capture leads 24 hours a day, 7 days a week.',
        bullets: [
            'Trained on your specific business and services',
            'Handles bookings, FAQs, and out-of-hours enquiries',
            'Reduces time spent answering repetitive questions',
            'Works on any website, any device',
        ],
        link: '/services',
    },
    {
        title: 'AI Automation',
        mainIcon: <Zap className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
        description: 'Automate the repetitive tasks that eat into your working day — from follow-up emails to scheduling and invoicing.',
        bullets: [
            'Automated customer follow-ups and reminders',
            'Booking confirmations and appointment scheduling',
            'Invoice generation and payment chasing',
            'Integrates with your existing tools and workflows',
        ],
        link: '/services',
    },
    {
        title: 'Rescue & Completion Projects',
        mainIcon: <LifeBuoy className="w-12 h-12 text-secondary" strokeWidth={1.5} />,
        description: 'Did a previous developer leave your project unfinished? We pick up abandoned or stalled projects and deliver them at a fixed price.',
        bullets: [
            'Free assessment of your existing project',
            'Fixed-price completion — no surprises',
            'Works with any technology or framework',
            'Fast turnaround from an experienced team',
        ],
        link: '/services',
    },
];

const CoreServices: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-background border-t border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        Everything Your Business
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mt-2">
                        Needs to Grow Online
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                className="group bg-surface rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center border border-accent shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(6,59,100,0.2)] transition-all duration-300 block relative overflow-hidden h-full"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                                    </div>
                                </div>

                                <motion.div
                                    className="mb-5 p-4 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {service.mainIcon}
                                </motion.div>

                                <h4 className="text-lg font-bold text-primary mb-3 tracking-tight group-hover:text-secondary transition-colors uppercase">
                                    {service.title}
                                </h4>

                                <div className="w-full h-px bg-background mb-4"></div>

                                <p className="text-sm text-primary/60 leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <ul className="w-full space-y-2 text-left">
                                    {service.bullets.map((bullet, bidx) => (
                                        <li key={bidx} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="text-xs text-primary/60 leading-snug">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
