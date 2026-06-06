import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Cloud, Smartphone, Brain, GitBranch, ShieldCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const capabilities = [
    {
        icon: <Code className="w-8 h-8 text-secondary" />,
        title: 'Custom Software Development',
        desc: 'Bespoke web applications, internal tools and SaaS platforms built around your exact business processes — not off-the-shelf compromises.',
    },
    {
        icon: <Cloud className="w-8 h-8 text-secondary" />,
        title: 'Web Platforms & APIs',
        desc: 'Scalable, secure, cloud-hosted platforms and integrations that connect your systems and grow with your business.',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-secondary" />,
        title: 'Mobile & Progressive Web Apps',
        desc: 'Fast, responsive apps that give your customers and team a first-class experience on any device.',
    },
    {
        icon: <Brain className="w-8 h-8 text-secondary" />,
        title: 'AI & Automation',
        desc: 'AI chatbots, intelligent assistants and workflow automation that cut manual work and unlock new efficiency.',
    },
];

const whyUk = [
    'A UK-based team you can meet, call and trust — clear communication, no timezone friction',
    'Senior engineers with a proven track record of shipping real, production products since 2018',
    'Fixed, transparent pricing — you know the cost before we start',
    'GDPR-aware, security-first delivery built for UK businesses',
    'One partner for software, web, AI and automation — not five separate vendors',
    'Long-term support and maintenance, not a build-and-disappear handover',
];

const process = [
    { step: '01', title: 'Discovery', desc: 'We learn your goals, users and constraints, then scope the work and give you a fixed quote.' },
    { step: '02', title: 'Design & Build', desc: 'We design, develop and test in short cycles, sharing progress so there are no surprises.' },
    { step: '03', title: 'Launch', desc: 'We deploy, optimise for speed and SEO, and make sure everything works in the real world.' },
    { step: '04', title: 'Support & Grow', desc: 'We maintain, monitor and iterate — adding features as your business evolves.' },
];

const stack = ['React', 'TypeScript', 'Node.js', 'Python', 'AI / LLMs', 'Cloud Hosting', 'REST & APIs', 'Automation'];

const UkSoftwareCompany: React.FC = () => {
    useSEO({
        title: 'UK Software Development Company',
        description:
            'Infonix Solutions is a UK software development company building custom software, web platforms, AI and automation for businesses nationwide. UK-based team, fixed pricing, proven products since 2018. Get a free quote.',
        path: '/uk-software-development-company',
        keywords: [
            'UK software development company',
            'UK software solutions company',
            'software solutions company UK',
            'custom software development UK',
            'bespoke software company UK',
            'software company North West',
            'AI software company UK',
        ],
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://infonixsolutions.co.uk/' },
                    { '@type': 'ListItem', position: 2, name: 'UK Software Development Company', item: 'https://infonixsolutions.co.uk/uk-software-development-company' },
                ],
            },
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Custom Software Development',
                serviceType: 'Custom software, web platforms, AI and automation',
                provider: { '@id': 'https://infonixsolutions.co.uk/#organization' },
                areaServed: { '@type': 'Country', name: 'United Kingdom' },
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'Is Infonix Solutions a UK-based software company?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes. Infonix Solutions is a UK software development company headquartered in Chester, building custom software, web platforms, AI and automation for businesses across the UK since 2018.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'What does a software development company do?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'A software development company designs, builds, tests and maintains custom software — such as web applications, internal tools, mobile apps and automation — tailored to a business’s specific needs rather than using off-the-shelf products.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'How much does custom software cost in the UK?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Cost depends on complexity and scope. Infonix Solutions offers fixed, transparent pricing and free quotes so you know the cost before any work begins. Contact us on 01244 840089 for an estimate.',
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
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="flex items-center gap-2 text-secondary font-bold tracking-widest uppercase mb-4 text-sm">
                            <MapPin className="w-4 h-4" /> United Kingdom
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            A UK Software Development Company Building Solutions That Work
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 max-w-3xl leading-relaxed">
                            Infonix Solutions is a UK-based software company that designs and builds custom software,
                            web platforms, AI and automation for businesses nationwide. From sole traders to scaling
                            companies, we turn ideas into reliable, production-ready products — with a senior UK team,
                            fixed pricing and a proven record of shipping real software since 2018.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary text-background font-bold py-4 px-8 rounded-full hover:bg-white transition-colors">
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/projects" className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold py-4 px-8 rounded-full hover:bg-secondary hover:text-background transition-colors">
                                See Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                        What We Build
                    </h2>
                    <p className="text-primary/70 max-w-3xl mb-12">
                        Full-stack software solutions delivered by one UK team — so every part of your product works together.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {capabilities.map((c) => (
                            <div key={c.title} className="bg-surface rounded-2xl p-6 sm:p-8 border border-accent">
                                <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit">{c.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-3">{c.title}</h3>
                                <p className="text-primary/70 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why UK */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface/40">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
                        Why Choose a UK-Based Software Company
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {whyUk.map((r) => (
                            <div key={r} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-primary/80 font-medium">{r}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12">
                        How We Deliver
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((p) => (
                            <div key={p.step} className="relative">
                                <span className="text-5xl font-black text-secondary/20">{p.step}</span>
                                <h3 className="text-xl font-bold text-primary mt-2 mb-3">{p.title}</h3>
                                <p className="text-primary/70 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech stack */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface/40">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center gap-3">
                        <GitBranch className="w-7 h-7 text-secondary" /> Our Technology
                    </h2>
                    <p className="text-primary/70 max-w-3xl mb-8">
                        Modern, proven tools chosen to keep your software fast, secure and maintainable for years.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {stack.map((t) => (
                            <span key={t} className="bg-background border border-accent rounded-full px-5 py-2 text-sm font-semibold text-primary/80">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-primary/70">
                        <ShieldCheck className="w-6 h-6 text-secondary" />
                        <span className="font-medium">Security-first, GDPR-aware delivery for UK businesses.</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to build your software with a UK team?
                    </h2>
                    <p className="text-surface/80 mb-8">
                        Tell us what you need and we&apos;ll send a free, no-obligation quote — usually within one working day.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary text-background font-bold py-4 px-8 rounded-full hover:bg-white transition-colors">
                        Get Your Free Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default UkSoftwareCompany;
