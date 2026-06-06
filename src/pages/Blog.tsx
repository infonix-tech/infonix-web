import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const articles = [
    {
        title: '5 Signs Your Business Website Is Costing You Customers',
        date: 'June 2026',
        summary: [
            'Most business owners do not realise their website is actively driving customers away. Slow load times, broken contact forms, no mobile optimisation, and missing Google Business Profile listings are among the most common issues we see. Each one quietly costs you enquiries every week.',
            'The good news is that these issues are fixable. A modern, fast, mobile-first website with a clear call-to-action and a working contact form can transform the number of enquiries your business receives. If you are unsure whether your site is working for you, we offer a free website review — no obligation.',
        ],
    },
    {
        title: 'What Is an AI Chatbot and Does My Business Need One?',
        date: 'June 2026',
        summary: [
            'An AI chatbot is software that sits on your website and answers questions from visitors automatically — at any time of day. For businesses that get enquiries outside office hours, or that answer the same questions repeatedly (pricing, availability, location), a chatbot can handle those conversations without you lifting a finger.',
            'Not every business needs one, but most businesses that deal with bookings, appointments, or high volumes of similar questions will see an immediate benefit. At Infonix Solutions, we build and configure chatbots tailored to your specific business — not generic, off-the-shelf tools.',
        ],
    },
    {
        title: 'Why Chester and Liverpool Businesses Are Invisible on Google',
        date: 'June 2026',
        summary: [
            'Google prioritises local results — but only for businesses that have done the groundwork. If you do not have a verified Google Business Profile, location-specific pages, and consistent NAP (Name, Address, Phone) data across the web, you will not appear when local customers search for your services.',
            'We have helped businesses in Chester, Liverpool, and across the North West go from invisible to page one within weeks. Local SEO is one of the most cost-effective investments a small business can make. Get in touch to find out what is holding your business back.',
        ],
    },
];

const Blog: React.FC = () => {
    useSEO({
        title: 'Blog — Software, Web & Digital Growth Tips for UK Businesses',
        description:
            'Practical advice for UK businesses on software solutions, websites, AI chatbots, local SEO and digital growth from Infonix Solutions — serving Liverpool, the North West and the UK.',
        path: '/blog',
        keywords: [
            'business software tips UK',
            'local SEO Liverpool',
            'web design advice North West',
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
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Blog</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Practical Advice for Growing Businesses
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 max-w-2xl">
                            Straightforward tips on websites, AI, SEO, and automation — written for business owners, not developers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Article Listing */}
            <section className="bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-10">
                    {articles.map((article, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-surface hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 text-xs text-primary/50 mb-3">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{article.date}</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">
                                {article.title}
                            </h2>
                            {article.summary.map((para, pidx) => (
                                <p key={pidx} className="text-primary/70 leading-relaxed mb-3 text-sm sm:text-base">
                                    {para}
                                </p>
                            ))}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold transition-colors mt-2 text-sm"
                            >
                                Discuss this with us <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Want to discuss how we can help your business?</h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                    >
                        Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Blog;
