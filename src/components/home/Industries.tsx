import React from 'react';
import { Laptop, Landmark, HeartPulse, ShoppingCart, Factory, GraduationCap } from 'lucide-react';

const Industries: React.FC = () => {
    const industries = [
        { name: "Technology", icon: <Laptop className="w-10 h-10 text-primary group-hover:text-background transition-colors" /> },
        { name: "Finance & Banking", icon: <Landmark className="w-10 h-10 text-primary group-hover:text-background transition-colors" /> },
        { name: "Healthcare", icon: <HeartPulse className="w-10 h-10 text-primary group-hover:text-background transition-colors" /> },
        { name: "Retail & Commerce", icon: <ShoppingCart className="w-10 h-10 text-primary group-hover:text-background transition-colors" /> },
        { name: "Manufacturing", icon: <Factory className="w-10 h-10 text-primary group-hover:text-background transition-colors" /> },
        { name: "Education", icon: <GraduationCap className="w-10 h-10 text-primary group-hover:text-background transition-colors" /> }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Domain Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary">Industries We Serve</h3>
                    <div className="mt-4 w-24 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {industries.map((ind, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-8 bg-surface rounded-2xl hover:bg-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-accent cursor-pointer"
                        >
                            <div className="mb-4 bg-background p-4 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                                {ind.icon}
                            </div>
                            <h4 className="font-bold text-center text-primary group-hover:text-background transition-colors uppercase text-sm tracking-tight">
                                {ind.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
