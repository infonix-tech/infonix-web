import React from 'react';
import { CheckCircle, Clock, Globe2, Target, Search, Settings, Wrench, TrendingUp } from 'lucide-react';

const WhyInfonix: React.FC = () => {
    const trustBlocks = [
        { title: "UK Registered Business", icon: CheckCircle, desc: "Fully compliant and officially registered in the UK." },
        { title: "Experienced Consulting Team", icon: Target, desc: "Over 7 years of delivering high-quality solutions." },
        { title: "Cross Industry Solutions", icon: Globe2, desc: "Deep domain knowledge across multiple sectors." },
        { title: "Results Focused Approach", icon: TrendingUp, desc: "We measure success by the value we create for you." },
    ];

    const processSteps = [
        { num: "01", title: "Discover", icon: <Search className="w-8 h-8 text-primary" />, desc: "We analyze your current challenges and define clear objectives." },
        { num: "02", title: "Strategize", icon: <Settings className="w-8 h-8 text-primary" />, desc: "Our experts design a tailored roadmap for your specific needs." },
        { num: "03", title: "Build", icon: <Wrench className="w-8 h-8 text-primary" />, desc: "We execute the strategy with precision and agility." },
        { num: "04", title: "Scale", icon: <TrendingUp className="w-8 h-8 text-primary" />, desc: "Continuous support and optimization for long-term growth." },
    ];

    return (
        <>
            <section className="py-24 bg-background overflow-hidden relative border-t border-surface">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="text-sm font-black tracking-[0.3em] text-secondary uppercase mb-4">Why Choose Us</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Built on Trust & Expertise</h3>
                            <p className="text-primary/70 text-lg mb-10 leading-relaxed font-medium">
                                We don't just provide services; we build lasting partnerships. Our approach is grounded in transparency, deep industry knowledge, and a relentless focus on delivering measurable outcomes.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {trustBlocks.map((block, i) => (
                                    <div key={i} className="flex gap-5 items-start group">
                                        <div className="mt-1 bg-secondary/10 p-3 rounded-2xl group-hover:bg-secondary transition-all duration-300">
                                            <block.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg mb-2">{block.title}</h4>
                                            <p className="text-primary/60 text-sm leading-relaxed">{block.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Business professionals in modern office"
                                className="w-full h-full object-cover rounded-3xl opacity-90 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-5 bg-background/95 backdrop-blur-xl px-8 py-6 rounded-2xl border border-white/10 shadow-2xl">
                                    <div className="bg-secondary/20 p-3 rounded-xl">
                                        <Clock className="w-8 h-8 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-4xl font-black text-white leading-none mb-1">7+ <span className="text-lg font-bold text-secondary">Years</span></p>
                                        <p className="text-xs text-primary/60 uppercase font-black tracking-widest">Of Delivering Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Process</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-primary">How We Work</h3>
                        <div className="mt-4 w-24 h-1 bg-secondary mx-auto"></div>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-accent/30 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {processSteps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 bg-background rounded-2xl shadow-lg border-2 border-surface flex items-center justify-center mb-6 relative group-hover:border-secondary transition-colors duration-300 z-10">
                                        <span className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                                            {step.num}
                                        </span>
                                        {step.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-primary mb-3">{step.title}</h4>
                                    <p className="text-primary/70">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyInfonix;
