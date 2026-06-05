import React from 'react';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-base sm:text-lg text-primary/80 font-medium mb-6">
                    We work with businesses across 10 industries worldwide.
                </p>
                <Link
                    to="/industries"
                    className="inline-flex items-center justify-center bg-secondary hover:bg-primary text-background font-black py-4 px-8 sm:py-5 sm:px-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(6,59,100,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-base sm:text-lg uppercase tracking-widest"
                >
                    View All Industries →
                </Link>
            </div>
        </section>
    );
};

export default Industries;
