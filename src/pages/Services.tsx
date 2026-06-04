import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, MessageSquareMore, Zap, Wrench, Code, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface SubSectionGroup {
    title: string;
    bullets: string[];
}

interface SubSection {
    title: string;
    note?: string;
    bullets?: string[];
    groups?: SubSectionGroup[];
}

interface ServiceItem {
    id: string;
    icon: React.ReactNode;
    heading: string;
    cardDesc: string;
    bullets: string[];
    whoFor: string;
    pricing: string;
    ctaLabel: string;
    subSections?: SubSection[];
}

function BulletText({ text }: { text: string }) {
    const sep = ' — ';
    const idx = text.indexOf(sep);
    if (idx === -1) return <span className="text-primary/70">{text}</span>;
    return (
        <span>
            <strong className="font-semibold text-primary">{text.slice(0, idx)}</strong>
            <span className="text-primary/70"> — {text.slice(idx + sep.length)}</span>
        </span>
    );
}

const Services: React.FC = () => {
    useSEO({
        title: 'Services — Web Design, AI Chatbots & Automation | Infonix Solutions',
        description:
            'Infonix Solutions offers website design, AI chatbots, automation, and software consulting for businesses worldwide. Competitive prices. Real results. Headquartered in Chester, UK since 2018.',
        path: '/services',
        keywords: [
            'web design UK',
            'AI chatbot small business',
            'business automation UK',
            'website design Chester',
            'rescue project developer',
            'local SEO UK',
        ],
    });

    const servicesList: ServiceItem[] = [
        {
            id: 'web-design',
            icon: <Monitor className="w-8 h-8 text-secondary" />,
            heading: 'Website Design & Development',
            cardDesc: 'Modern, mobile-friendly websites built from scratch. Clean design, fast loading, and built to convert visitors into customers.',
            bullets: [
                'Fully mobile-responsive — works perfectly on phones, tablets, and desktops',
                'Optimised for Google so customers can find you',
                'Built with a clear call to action on every page',
                'Secure with HTTPS and SSL as standard',
                'Easy for you to update yourself, or we can manage it for you',
            ],
            whoFor: 'Sole traders, local businesses, restaurants, salons, tradespeople, gyms, retailers, and anyone who currently has no website or an outdated one.',
            pricing: 'From £399',
            ctaLabel: 'Get a Quote for Your Website',
            subSections: [
                {
                    title: 'Digital Marketing',
                    bullets: [
                        'Google Ads management — targeted campaigns that put your business in front of people actively searching for your services',
                        'Social media advertising across Facebook, Instagram, and LinkedIn — reaching your exact customer profile',
                        'Google Business Profile optimisation — ensures your business appears in local search results and Google Maps',
                        'Email marketing automation — re-engage past customers and nurture new leads without manual effort',
                        'Content marketing — blog articles and landing pages that build authority and attract consistent organic traffic',
                        'Monthly plain-English reporting — showing what is working, what is not, and what we are doing about it',
                    ],
                },
                {
                    title: 'SEO & Agent Optimisation',
                    bullets: [
                        'Technical SEO audit — identifies and fixes issues that prevent Google from correctly indexing your site',
                        'On-page SEO — optimises page titles, headings, content structure, and internal linking for the right keywords',
                        'Local SEO — ensures your business appears in local search and Google Maps for searches in your area',
                        'Backlink building — earns links from credible websites that signal authority to Google',
                        'Agent Optimisation — structures your website content and schema markup so AI assistants like ChatGPT and Google AI correctly understand and recommend your business',
                        'Monthly keyword ranking and traffic reports in plain English',
                    ],
                    note: 'When someone asks ChatGPT "who is the best web agency in Chester?" or asks Google AI "which plumber near me has good reviews?", the AI draws on structured data and website content to form its answer. Agent Optimisation ensures your business is represented accurately and favourably in these AI-generated responses — a competitive advantage most businesses are not yet acting on.',
                },
            ],
        },
        {
            id: 'ai-chatbots',
            icon: <MessageSquareMore className="w-8 h-8 text-secondary" />,
            heading: 'AI Chatbots for Your Website',
            cardDesc: 'An intelligent chatbot that answers customer questions, takes bookings, and captures leads — even at midnight, even on weekends.',
            bullets: [
                'Answer common questions about your services, prices, and opening hours',
                'Take booking requests and appointment enquiries',
                'Collect customer contact details and pass them to you instantly',
                'Handle multiple conversations at the same time with no waiting time',
                'Trained on your specific business — not a generic off-the-shelf tool',
            ],
            whoFor: 'Any business that receives enquiries through its website — salons, restaurants, tradespeople, gyms, driving instructors, event companies, retailers, and more.',
            pricing: 'Included in the Growth package, or from £299 as a standalone add-on',
            ctaLabel: 'Get a Quote for a Chatbot',
        },
        {
            id: 'ai-automation',
            icon: <Zap className="w-8 h-8 text-secondary" />,
            heading: 'AI-Powered Business Automation',
            cardDesc: 'Automate the repetitive tasks that eat up your time — appointment reminders, follow-up emails, invoicing, and more.',
            bullets: [
                'Appointment reminders — automatically text or email customers the day before',
                'Follow-up messages — send a thank-you or review request after a job',
                'Lead capture and response — instant personalised reply when someone contacts you',
                'Invoice reminders — automatically chase unpaid invoices at set intervals',
                'Booking confirmations — send instant confirmation when a booking is made',
            ],
            whoFor: 'Any business owner who spends time on admin tasks that could be handled by a computer. Particularly valuable for sole traders and small teams where every hour counts.',
            pricing: 'From £199 per automation workflow, or included in the Growth and Full Digital packages',
            ctaLabel: 'Get a Quote for Automation',
            subSections: [
                {
                    title: 'HR & Staff Management Automation',
                    groups: [
                        {
                            title: 'HR Management',
                            bullets: [
                                'Employee onboarding portals — automated welcome flows, document collection, and first-week task checklists',
                                'Leave and absence management — self-service holiday requests, approval workflows, and absence tracking dashboards',
                                'Performance review systems — structured review cycles, goal setting, and manager visibility in one place',
                                'HR document management — secure, searchable storage for contracts, policies, and compliance records',
                                'AI-assisted HR chatbot — answers common HR questions instantly, reducing admin load on managers and HR teams',
                            ],
                        },
                        {
                            title: 'Staff Management',
                            bullets: [
                                'Rota and shift scheduling — drag-and-drop schedule builders with automatic conflict detection',
                                'Shift swap and cover requests — staff request changes, managers approve with one click',
                                'Attendance and timesheet tracking — mobile clock-in/clock-out with automatic timesheet generation',
                                'Team communication tools — shift reminders, announcements, and direct messaging in one place',
                                'Staff availability management — staff submit availability, system builds rotas automatically',
                                'Payroll export — timesheets exported in formats compatible with common payroll systems',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'rescue',
            icon: <Wrench className="w-8 h-8 text-secondary" />,
            heading: 'We Rescue Unfinished Projects',
            cardDesc: 'Did your previous developer disappear? Did your project stall halfway through? We specialise in picking up abandoned projects and delivering them properly.',
            bullets: [
                'Review what has already been built and give you an honest assessment',
                'Identify what is missing, broken, or incomplete',
                'Provide a clear, fixed-price quote to complete the project',
                'Deliver the finished product on an agreed timeline — no surprises',
                'We do not charge you for the mistakes of a previous developer',
            ],
            whoFor: 'Any business that has a half-built website, an unfinished app, or a software project abandoned by a previous developer or agency.',
            pricing: 'Fixed price after free assessment',
            ctaLabel: 'Get a Free Project Assessment',
        },
        {
            id: 'custom-software',
            icon: <Code className="w-8 h-8 text-secondary" />,
            heading: 'Custom Software & Product Engineering',
            cardDesc: 'Bespoke software solutions, web applications, and product development for businesses that need something built specifically for them.',
            bullets: [
                'Web application development (React, Node.js, Python, and more)',
                'Mobile application development (iOS and Android)',
                'API development and third-party integrations',
                'Cloud migration and infrastructure',
                'Quality assurance and testing',
                'Ongoing maintenance and support',
            ],
            whoFor: 'Businesses that need a custom tool, platform, or application that does not exist as an off-the-shelf product.',
            pricing: 'Contact us for a scoping call and fixed-price quote',
            ctaLabel: 'Discuss a Custom Project',
        },
        {
            id: 'seo',
            icon: <MapPin className="w-8 h-8 text-secondary" />,
            heading: 'Get Found on Google — Local & Global SEO',
            cardDesc: 'If your business does not appear on the first page of Google when customers search for your services, you are invisible. We fix that.',
            bullets: [
                'Google Business Profile setup and optimisation',
                'Local and international keyword research and on-page SEO',
                'Location-specific content pages',
                'Technical SEO fixes — page speed, mobile optimisation, structured data',
                'Monthly reporting so you can see exactly what is improving',
            ],
            whoFor: 'Any business that relies on customers finding them through Google — tradespeople, restaurants, salons, gyms, retailers, driving instructors, event companies, and more.',
            pricing: 'From £149 per month',
            ctaLabel: 'Discuss SEO for My Business',
        },
    ];

    const packages = [
        { name: 'Starter', bestFor: 'Businesses with no website', includes: '5-page website, mobile-friendly, contact form, SSL, basic SEO', price: 'From £399' },
        { name: 'Growth', bestFor: 'Businesses ready to automate', includes: 'Everything in Starter + AI chatbot, booking system, SEO setup, 3 automation workflows', price: 'From £799' },
        { name: 'Full Digital Package', bestFor: 'Businesses wanting full digital transformation', includes: 'Custom website, AI chatbot, full automation suite, ongoing support, monthly reporting', price: 'From £1,500 — custom quote' },
        { name: 'Rescue', bestFor: 'Unfinished or abandoned projects', includes: 'Free assessment + fixed-price completion of existing project', price: 'Fixed price after free assessment' },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary text-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Our Services</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Everything Your Business Needs to Grow Online
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 mb-8">
                            From a brand new website to an AI chatbot that works while you sleep — Infonix Solutions delivers modern digital services for businesses of every size, anywhere in the world. Headquartered in Chester, UK. Delivering globally since 2018.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-surface">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-base sm:text-lg text-primary/70 leading-relaxed">
                        Whether you are a local tradesperson who has never had a website, a restaurant owner whose site was built years ago and has not been touched since, or a growing business that needs intelligent automation to reduce overheads — Infonix Solutions has a service that fits. We also specialise in rescuing projects that were started but never finished.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
                    {servicesList.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="pt-10 sm:pt-12 border-t border-surface/50 first:border-0 first:pt-0"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                                <div className="bg-surface p-3 sm:p-4 rounded-xl">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                                    {service.heading}
                                </h2>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl text-primary/70 mb-6 max-w-3xl">
                                {service.cardDesc}
                            </p>

                            <ul className="space-y-3 mb-6 max-w-3xl">
                                {service.bullets.map((bullet, bidx) => (
                                    <li key={bidx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                        <BulletText text={bullet} />
                                    </li>
                                ))}
                            </ul>

                            {service.subSections && service.subSections.map((section, sidx) => (
                                <div key={sidx} className="mb-8 max-w-3xl border-t border-surface/40 pt-6">
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">{section.title}</p>

                                    {section.bullets && (
                                        <ul className="space-y-3 mb-4">
                                            {section.bullets.map((bullet, bidx) => (
                                                <li key={bidx} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                                    <BulletText text={bullet} />
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.groups && section.groups.map((group, gidx) => (
                                        <div key={gidx} className={gidx > 0 ? 'mt-5' : ''}>
                                            <p className="text-sm font-bold text-primary mb-3">{group.title}</p>
                                            <ul className="space-y-3">
                                                {group.bullets.map((bullet, bidx) => (
                                                    <li key={bidx} className="flex items-start gap-3">
                                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                                        <BulletText text={bullet} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {section.note && (
                                        <div className="mt-5 bg-surface rounded-xl p-4 border-l-4 border-secondary">
                                            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">About Agent Optimisation</p>
                                            <p className="text-sm text-primary/70 leading-relaxed">{section.note}</p>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl">
                                <div className="bg-surface rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Who This Is For</p>
                                    <p className="text-sm text-primary/70">{service.whoFor}</p>
                                </div>
                                <div className="bg-surface rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Starting From</p>
                                    <p className="text-sm font-bold text-primary">{service.pricing}</p>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-secondary hover:bg-primary text-background font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-md transition-all duration-300 group text-sm sm:text-base"
                            >
                                {service.ctaLabel}
                                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Packages Table */}
            <section className="bg-surface py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-accent">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Packages & Pricing</h2>
                        <p className="text-primary/70 max-w-2xl mx-auto">Clear, range-based pricing. No hidden fees. Every project starts with a conversation.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-accent">
                                    <th className="py-4 pr-4 font-bold text-primary uppercase tracking-widest text-sm">Package</th>
                                    <th className="py-4 pr-4 font-bold text-primary uppercase tracking-widest text-sm hidden sm:table-cell">Best For</th>
                                    <th className="py-4 pr-4 font-bold text-primary uppercase tracking-widest text-sm hidden md:table-cell">What's Included</th>
                                    <th className="py-4 font-bold text-secondary uppercase tracking-widest text-sm">Starting From</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.map((pkg, idx) => (
                                    <tr key={idx} className="border-b border-accent hover:bg-background transition-colors">
                                        <td className="py-5 pr-4 font-bold text-primary">{pkg.name}</td>
                                        <td className="py-5 pr-4 text-primary/70 text-sm hidden sm:table-cell">{pkg.bestFor}</td>
                                        <td className="py-5 pr-4 text-primary/70 text-sm hidden md:table-cell">{pkg.includes}</td>
                                        <td className="py-5 font-bold text-secondary">{pkg.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Founding Client Offer */}
            <section className="bg-primary py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Limited Availability</h2>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Become a Founding Client</h3>
                        <p className="text-base sm:text-lg text-surface/80 mb-8 leading-relaxed">
                            We are currently accepting a small number of founding client projects at preferential rates. If you are a business looking for a modern website, AI chatbot, or automation tool — get in touch now. You will receive our full attention, a professional result, and a price that reflects the fact that we are building a long-term relationship, not just completing a transaction.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Talk to Us Today <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* UK Coverage + Final CTA */}
            <section className="bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-surface">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Headquartered in Chester. Working Worldwide.</h2>
                    <p className="text-primary/70 leading-relaxed mb-8">
                        Infonix Solutions is headquartered in Chester, UK and has been working with businesses globally since 2018. Our team of 20 spans the UK, India, and Sri Lanka — giving us the capacity to deliver high-quality work quickly and at prices that work for independent businesses, not just large corporations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-primary/70 mb-8">
                        <a href="tel:+441244840089" className="hover:text-secondary transition-colors font-bold">01244 840089</a>
                        <span className="hidden sm:inline">·</span>
                        <a href="mailto:hello@infonixsolutions.co.uk" className="hover:text-secondary transition-colors font-bold">hello@infonixsolutions.co.uk</a>
                        <span className="hidden sm:inline">·</span>
                        <a href="https://www.linkedin.com/company/105996236" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-bold">LinkedIn</a>
                    </div>
                    <p className="text-primary/50 italic mb-8">Not sure which service you need? That is completely fine. Get in touch and we will ask you a few simple questions, then recommend the right solution — with no jargon and no obligation.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-secondary hover:bg-primary text-background font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
                    >
                        Talk to Us Today <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
