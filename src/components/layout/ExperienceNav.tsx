import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Architecture', path: '/services/software', desc: 'How we build scalable systems' },
        { name: 'Talent Flow', path: '/services/hr', desc: 'Our unique HR optimization model' },
        { name: 'Wealth Strategy', path: '/services/finance', desc: 'Finance consulting for the digital age' },
        { name: 'Case Studies', path: '/case-studies', desc: 'Real-world impact' },
        { name: 'Contact Infonix', path: '/contact', desc: 'Let\'s start something' },
    ];

    return (
        <>
            {/* Pulse Toggle Button */}
            <div className="fixed bottom-10 right-10 z-[60]">
                <button
                    onClick={toggleNav}
                    className="relative w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center shadow-2xl group overflow-hidden"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-secondary/50 rounded-full"
                    />
                    <div className="relative z-10 transition-transform duration-300 group-hover:rotate-90">
                        {isOpen ? <X size={32} /> : <div className="text-xs font-black uppercase tracking-widest">Infx</div>}
                    </div>
                </button>
            </div>

            {/* Hidden Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[55] bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center px-6"
                    >
                        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-secondary text-sm font-black uppercase tracking-[0.3em] mb-4">
                                        The Infonix Experience
                                    </h2>
                                    <h3 className="text-white text-5xl font-bold leading-tight">
                                        Navigating the <br /> <span className="text-secondary">Future of Work.</span>
                                    </h3>
                                </motion.div>

                                <div className="flex space-x-6">
                                    <a href="#" className="text-white/50 hover:text-secondary transition-colors"><Linkedin size={24} /></a>
                                    <a href="#" className="text-white/50 hover:text-secondary transition-colors"><Twitter size={24} /></a>
                                    <a href="#" className="text-white/50 hover:text-secondary transition-colors"><Github size={24} /></a>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={toggleNav}
                                            className="group flex flex-col space-y-1 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-2xl font-bold text-white group-hover:text-secondary transition-colors underline-offset-8 group-hover:underline">
                                                    {item.name}
                                                </span>
                                                <ArrowRight className="text-secondary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                            </div>
                                            <span className="text-white/40 text-sm">{item.desc}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none select-none">
                            <h1 className="text-[20vw] font-black text-white leading-none">INFONIX</h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExperienceNav;
