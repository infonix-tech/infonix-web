import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-surface pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link to="/" className="text-3xl font-black text-white inline-block uppercase tracking-tighter">
                            Infonix<span className="text-secondary">.</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-surface/80 font-medium">
                            A UK-based consulting firm delivering expertise in software engineering, human resources, and financial advisory.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="p-2 rounded-xl bg-white/5 text-surface/80 hover:text-secondary hover:bg-secondary/10 transition-all"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 rounded-xl bg-white/5 text-surface/80 hover:text-secondary hover:bg-secondary/10 transition-all"><Twitter size={20} /></a>
                            <a href="#" className="p-2 rounded-xl bg-white/5 text-surface/80 hover:text-secondary hover:bg-secondary/10 transition-all"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">About Us</Link></li>
                            <li><Link to="/services" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking_widest">Our Services</Link></li>
                            <li><Link to="/industries" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Industries</Link></li>
                            <li><Link to="/contact" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-8">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/software" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Software Engineering</Link></li>
                            <li><Link to="/services/hr" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">HR Consulting</Link></li>
                            <li><Link to="/services/finance" className="text-sm font-bold text-surface/80 hover:text-secondary transition-colors uppercase tracking-widest">Finance Planning</Link></li>
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
                                <span className="text-surface/80 font-bold">+44 7736 749941</span>
                            </li>
                            <li className="flex items-center">
                                <div className="p-2 rounded-xl bg-secondary/10 mr-4">
                                    <Mail size={18} className="text-secondary" />
                                </div>
                                <a href="mailto:hr@infonixsolutions.co.uk" className="text-surface/80 font-bold hover:text-secondary transition-colors">
                                    hr@infonixsolutions.co.uk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[10px] text-surface/60 mb-6 md:mb-0 uppercase font-black tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} Infonix Solutions. Built for the Future.
                    </p>
                    <div className="flex space-x-10 text-[10px] text-surface/60 uppercase font-black tracking-[0.3em]">
                        <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
