import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FoundingClientOffer: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Limited Availability</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Become a Founding Client</h3>
                </div>

                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
                    <p className="text-base sm:text-lg md:text-xl text-surface/80 leading-relaxed mb-10">
                        We are currently accepting a small number of founding client projects at preferential rates. If you are a business looking for a modern website, AI chatbot, or automation tool — get in touch now. You will receive our full attention, a professional result, and a price that reflects the fact that we are building a long-term relationship, not just completing a transaction.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg text-base uppercase tracking-wider"
                    >
                        Get in Touch Today <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FoundingClientOffer;
