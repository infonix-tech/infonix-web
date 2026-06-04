import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-surface pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <span className="block text-3xl font-black text-white uppercase tracking-tighter">Infonix</span>
                            <span className="block text-xs font-bold tracking-[0.25em] text-secondary uppercase">Solutions</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-surface/80 font-medium">
                            A UK-based digital agency delivering websites, AI chatbots, and automation for businesses worldwide. Headquartered in Chester since 2018.
                        </p>
                        <div className="flex space-x-5">
                            <a href="https://www.linkedin.com/company/105996236" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 text-surface/80 hover:text-secondary hover:bg-secondary/10 transition-all" aria-label="Infonix Solutions on LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">About Us</Link></li>
                            <li><Link to="/services" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Our Services</Link></li>
                            <li><Link to="/industries" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Industries</Link></li>
                            <li><Link to="/projects" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Projects</Link></li>
                            <li><Link to="/blog" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Blog</Link></li>
                            <li><Link to="/contact" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Website Design</Link></li>
                            <li><Link to="/services" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">AI Chatbots</Link></li>
                            <li><Link to="/services" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">AI Automation</Link></li>
                            <li><Link to="/services" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Rescue Projects</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start">
                                <div className="p-2 rounded-xl bg-secondary/10 mr-4 mt-1">
                                    <MapPin size={18} className="text-secondary" />
                                </div>
                                <span className="text-surface/80 font-medium">4 Chantry Court<br />Chester West Employment Park<br />Chester, CH1 4QN</span>
                            </li>
                            <li className="flex items-center">
                                <div className="p-2 rounded-xl bg-secondary/10 mr-4">
                                    <Phone size={18} className="text-secondary" />
                                </div>
                                <a href="tel:+441244840089" className="text-surface/80 font-bold hover:text-secondary transition-colors">01244 840089</a>
                            </li>
                            <li className="flex items-center">
                                <div className="p-2 rounded-xl bg-secondary/10 mr-4">
                                    <Mail size={18} className="text-secondary" />
                                </div>
                                <a href="mailto:hello@infonixsolutions.co.uk" className="text-surface/80 font-bold hover:text-secondary transition-colors">
                                    hello@infonixsolutions.co.uk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    <p className="text-[10px] text-surface/60 text-center md:text-left uppercase font-black tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} Infonix Solutions. Built for the Future.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
