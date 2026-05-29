import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="bg-background relative overflow-hidden py-20 sm:py-24 lg:py-32 border-t border-surface">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-primary mb-6 sm:mb-8 leading-tight tracking-tight">
                    Ready to Transform <br />
                    <span className="text-secondary">Your Business?</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-primary/70 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Let's discuss how Infonix Solutions can support your growth with expert consulting in software engineering, HR, and finance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                    <Link
                        to="/contact"
                        className="flex items-center justify-center bg-secondary hover:bg-primary text-background font-black py-4 px-8 sm:py-6 sm:px-12 rounded-full transition-all duration-300 transform hover:-translate-y-2 shadow-[0_20px_40px_rgba(6,59,100,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-base sm:text-xl w-full sm:w-auto uppercase tracking-widest"
                    >
                        Contact Us Today
                        <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link
                        to="/services"
                        className="flex items-center justify-center bg-background border-2 border-surface hover:border-secondary text-primary font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-xl w-full sm:w-auto uppercase tracking-widest"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
