import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            headline: "Transforming Software Infrastructure with Elite Engineering",
            quote: "\"Infonix Solutions transformed our software infrastructure entirely. Their bespoke approach and rigorous QA meant we launched ahead of schedule with zero critical bugs.\"",
            name: "Sarah Jenkins",
            role: "CTO, FinTech Innovations Ltd",
            company: "FinTech Innovations Ltd"
        },
        {
            headline: "Scaling Operations with Seamless Talent Integration",
            quote: "\"Partnering with Infonix for our HR restructuring was the best decision we made this year. Their talent outsourcing team found niche skills we struggled to hire for months.\"",
            name: "David Chen",
            role: "Operations Director",
            company: "Global Retail Solutions"
        },
        {
            headline: "Navigating Complex Financial Landscapes Confidently",
            quote: "\"The financial advisory team at Infonix helped us navigate complex tax compliance issues during our European expansion. Highly professional and deeply knowledgeable.\"",
            name: "Elena Rodriguez",
            role: "Chief Financial Officer",
            company: "NexGen Manufacturing"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Client Stories</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">What Our Partners Say</h3>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Split Card Layout */}
                    <div className="bg-surface rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-accent overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Side: Image */}
                        <div className="relative h-64 lg:h-auto bg-background flex items-center justify-center p-8">
                            <img
                                src="/sketch-hero.png"
                                alt="Client Collaboration"
                                className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-multiply"
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center">
                            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6 leading-snug">
                                {testimonials[currentIndex].headline}
                            </h4>
                            <p className="text-base sm:text-lg text-primary/80 italic mb-8 sm:mb-10 leading-relaxed font-medium">
                                {testimonials[currentIndex].quote}
                            </p>

                            <Link to="/projects" className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors mb-12 uppercase text-sm tracking-wider">
                                See Our Work <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-lg uppercase">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">{testimonials[currentIndex].name}</h4>
                                        <p className="text-primary/60 text-sm">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-10 gap-3">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-secondary' : 'w-2 bg-accent hover:bg-secondary'}`}
                                aria-label={`View testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
