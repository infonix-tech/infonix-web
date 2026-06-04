import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

type FormState = {
    fullName: string;
    businessName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

const initialForm: FormState = {
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
};

// Set VITE_WEB3FORMS_KEY in your .env file.
// Get a free access key at https://web3forms.com — enter hello@infonixsolutions.co.uk to generate one.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const Contact: React.FC = () => {
    useSEO({
        title: 'Contact Us — Get a Free Quote | Infonix Solutions',
        description:
            "Get in touch with Infonix Solutions. Call 01244 840089 or email hello@infonixsolutions.co.uk — our Chester-based team delivers websites, AI chatbots, and automation for businesses worldwide.",
        path: '/contact',
    });

    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.fullName || !form.email || !form.message) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        if (!WEB3FORMS_KEY) {
            // Fallback: open mailto if the API key has not been configured yet
            const subject = encodeURIComponent(`Website enquiry from ${form.fullName}`);
            const body = encodeURIComponent(
                `Name: ${form.fullName}\nBusiness: ${form.businessName}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
            );
            window.location.href = `mailto:hello@infonixsolutions.co.uk?subject=${subject}&body=${body}`;
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const payload = {
                access_key: WEB3FORMS_KEY,
                subject: `New enquiry from ${form.fullName} — Infonix Solutions website`,
                from_name: form.fullName,
                replyto: form.email,
                'Full Name': form.fullName,
                'Business Name': form.businessName || '—',
                'Email Address': form.email,
                'Phone Number': form.phone || '—',
                'Service of Interest': form.service || '—',
                Message: form.message,
            };

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setForm(initialForm);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage(
                err instanceof Error ? err.message : 'Something went wrong. Please email us directly at hello@infonixsolutions.co.uk'
            );
        }
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Contact Us</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Let's Build Something Together
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 max-w-2xl">
                            Tell us about your project. We'll ask a few simple questions and recommend the right solution for your business and your budget — no jargon, no obligation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-surface"
                    >
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                <CheckCircle className="w-14 h-14 text-secondary" />
                                <h3 className="text-2xl font-serif font-bold text-primary">Message Sent!</h3>
                                <p className="text-primary/70 max-w-sm">
                                    Thank you for getting in touch. A member of our team will be back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                                >
                                    Send another message →
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            placeholder="John Smith"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="businessName" className="block text-sm font-semibold text-primary mb-2">Business Name</label>
                                        <input
                                            id="businessName"
                                            name="businessName"
                                            type="text"
                                            value={form.businessName}
                                            onChange={handleChange}
                                            placeholder="Your Business Ltd"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="01234 567890"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">Service of Interest *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white text-primary appearance-none"
                                    >
                                        <option value="">Select a service</option>
                                        <option>Website Design &amp; Development</option>
                                        <option>AI Chatbot</option>
                                        <option>AI Automation</option>
                                        <option>Rescue &amp; Completion Project</option>
                                        <option>Local SEO</option>
                                        <option>Custom Software &amp; Product Engineering</option>
                                        <option>Not sure — I need advice</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project or requirements..."
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full md:w-auto bg-secondary hover:bg-primary disabled:opacity-60 disabled:cursor-not-allowed text-background font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Info */}
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
                                    <a href="tel:+441244840089" className="text-primary/70 hover:text-secondary transition-colors mt-1 inline-block">01244 840089</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-surface p-2 rounded-full text-secondary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">Email</p>
                                    <a href="mailto:hello@infonixsolutions.co.uk" className="text-secondary hover:text-primary transition-colors mt-1 inline-block">hello@infonixsolutions.co.uk</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-surface p-2 rounded-full text-secondary">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">LinkedIn</p>
                                    <a href="https://www.linkedin.com/company/105996236" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors mt-1 inline-block">Infonix Solutions</a>
                                </div>
                            </div>
                        </div>

                        {/* Live Map */}
                        <div className="w-full h-64 sm:h-72 bg-surface rounded-2xl border border-accent overflow-hidden shadow-md">
                            <iframe
                                title="Infonix Solutions office location — 4 Chantry Court, Chester West Employment Park, Chester, CH1 4QN"
                                src="https://www.google.com/maps?q=4%20Chantry%20Court%2C%20Chester%20West%20Employment%20Park%2C%20Chester%2C%20CH1%204QN&z=16&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=4+Chantry+Court%2C+Chester+West+Employment+Park%2C+Chester%2C+CH1+4QN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center justify-center text-sm font-bold text-secondary hover:text-primary transition-colors"
                        >
                            Get directions →
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
