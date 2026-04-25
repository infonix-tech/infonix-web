import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Map } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Contact Us</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-lg text-surface/80 max-w-2xl">
                            Have a project in mind or need consulting support? We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form Component (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-surface"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                                    <div className="flex">
                                        <select className="px-4 py-3 rounded-l-lg border border-gray-200 border-r-0 bg-gray-50 focus:outline-none text-primary">
                                            <option>UK (+44)</option>
                                            <option>US (+1)</option>
                                        </select>
                                        <input
                                            type="tel"
                                            placeholder="7736 749941"
                                            className="w-full px-4 py-3 rounded-r-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Service of Interest *</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white text-primary appearance-none">
                                        <option>Select a service</option>
                                        <option>Software Consulting</option>
                                        <option>HR Consulting</option>
                                        <option>Finance Consulting</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-primary mb-2">Your Message *</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project or requirements..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full md:w-auto bg-secondary hover:bg-primary text-background font-bold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Info Component (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary mb-8">Get in Touch</h3>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-surface p-2 rounded-full text-secondary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">Address</p>
                                    <p className="text-primary/70 mt-1">4 Chantry Court, Chester West<br />Employment Park, Chester, CH1 4QN</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-surface p-2 rounded-full text-secondary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">Phone</p>
                                    <p className="text-primary/70 mt-1">+44 7736 749941</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-surface p-2 rounded-full text-secondary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">Email</p>
                                    <p className="text-secondary hover:text-primary transition-colors mt-1 cursor-pointer">hr@infonixsolutions.co.uk</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-surface p-2 rounded-full text-secondary">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">LinkedIn</p>
                                    <p className="text-secondary hover:text-primary transition-colors mt-1 cursor-pointer">Infonix Solutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-surface rounded-2xl border border-accent overflow-hidden relative group">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/50 group-hover:text-primary/80 transition-colors">
                                <Map className="w-12 h-12 mb-3 text-secondary" />
                                <span className="font-semibold">Interactive Map (Chester)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
