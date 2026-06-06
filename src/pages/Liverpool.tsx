import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Monitor, MessageSquareMore, Zap, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const solutions = [
    {
        icon: <Code className="w-8 h-8 text-secondary" />,
        title: 'Software Solutions',
        desc: 'Custom software and web apps built around how your Liverpool business actually works — from internal tools to customer-facing platforms.',
    },
    {
        icon: <Monitor className="w-8 h-8 text-secondary" />,
        title: 'Website Design & Development',
        desc: 'Fast, mobile-first websites that help Liverpool and Merseyside businesses get found on Google and turn visitors into enquiries.',
    },
    {
        icon: <MessageSquareMore className="w-8 h-8 text-secondary" />,
        title: 'AI Chatbots',
        desc: 'AI assistants that answer customer questions and capture leads 24/7 — trained on your services so you never miss an enquiry.',
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: 'Business Automation',
        desc: 'Automate quotes, follow-ups, bookings and invoicing so your team spends less time on admin and more time growing.',
    },
];

const areas = [
    'Liverpool City Centre', 'Wirral', 'Birkenhead', 'Bootle', 'Wavertree',
    'St Helens', 'Warrington', 'Widnes', 'Runcorn', 'Chester', 'Wider Merseyside & North West',
];

const reasons = [
    'Local to the North West — we understand the Liverpool market',
    'Fixed, competitive pricing with no hidden costs',
    'One team for software, websites, AI and automation',
    'Proven track record delivering real products since 2018',
];

const Liverpool: React.FC = () => {
    useSEO({
        title: 'Software, Web & Business Solutions in Liverpool',
        description:
            'Looking for software, web or business solutions in Liverpool? Infonix Solutions builds custom software, websites, AI chatbots and automation for businesses across Liverpool, Merseyside and the North West. Free quote.',
        path: '/software-solutions-liverpool',
        keywords: [
            'software solutions Liverpool',
            'business solutions Liverpool',
            'technical solutions Liverpool',
            'software development Liverpool',
            'web design Liverpool',
            'web development Liverpool',
            'AI chatbot Liverpool',
            'business automation Merseyside',
        ],
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://infonixsolutions.co.uk/' },
                    { '@type': 'ListItem', position: 2, name: 'Software Solutions Liverpool', item: 'https://infonixsolutions.co.uk/software-solutions-liverpool' },
                ],
            },
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Software & Business Solutions in Liverpool',
                serviceType: 'Software development, web design, AI chatbots and automation',
                provider: { '@id': 'https://infonixsolutions.co.uk/#organization' },
                areaServed: [
                    { '@type': 'City', name: 'Liverpool' },
                    { '@type': 'AdministrativeArea', name: 'Merseyside' },
                    { '@type': 'AdministrativeArea', name: 'North West England' },
                ],
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'Do you offer software solutions in Liverpool?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes. Infonix Solutions provides custom software development, websites, AI chatbots and business automation for companies across Liverpool, Merseyside and the North West, with project delivery throughout the UK.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Do you have an office in Liverpool?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'We are based in Chester, around 30 minutes from Liverpool, and work with clients across Liverpool and Merseyside remotely and on-site. Call 01244 840089 to arrange a meeting.',
                        },
                    },
                ],
            },
        ],
    });

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-primary text-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="flex items-center gap-2 text-secondary font-bold tracking-widest uppercase mb-4 text-sm">
                            <MapPin className="w-4 h-4" /> Liverpool &amp; the North West
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Software, Web &amp; Business Solutions in Liverpool
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 max-w-3xl leading-relaxed">
                            Infonix Solutions helps Liverpool and Merseyside businesses grow with custom software,
                            modern websites, AI chatbots and automation. From sole traders to established companies,
                            we deliver practical technical solutions that get you found online, save you time and win you more work —
                            backed by a North West team that has been building real products since 2018.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-secondary text-background font-bold py-4 px-8 rounded-full hover:bg-white transition-colors"
                            >
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:+441244840089"
                                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold py-4 px-8 rounded-full hover:bg-secondary hover:text-background transition-colors"
                            >
                                Call 01244 840089
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                        Technical Solutions for Liverpool Businesses
                    </h2>
                    <p className="text-primary/70 max-w-3xl mb-12">
                        One local partner for everything technical — so you don&apos;t have to juggle multiple agencies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((s) => (
                            <div key={s.title} className="bg-surface rounded-2xl p-6 sm:p-8 border border-accent">
                                <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit">{s.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                                <p className="text-primary/70 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface/40">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                            Why Liverpool Businesses Choose Infonix
                        </h2>
                        <ul className="space-y-4">
                            {reasons.map((r) => (
                                <li key={r} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-primary/80 font-medium">{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                            Areas We Serve Around Liverpool
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {areas.map((a) => (
                                <span key={a} className="bg-background border border-accent rounded-full px-4 py-2 text-sm font-medium text-primary/80">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to start your project in Liverpool?
                    </h2>
                    <p className="text-surface/80 mb-8">
                        Tell us what you need and we&apos;ll send a free, no-obligation quote — usually within one working day.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-secondary text-background font-bold py-4 px-8 rounded-full hover:bg-white transition-colors"
                    >
                        Get Your Free Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Liverpool;
