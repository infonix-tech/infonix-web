import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, UtensilsCrossed, Scissors, Dumbbell, Car, Camera, Star, ShoppingBag, Bike, Laptop, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const Industries: React.FC = () => {
    useSEO({
        title: 'Industries We Serve — Web Design & AI Solutions for Businesses Worldwide | Infonix Solutions',
        description:
            'Infonix Solutions works with businesses worldwide in trades, hospitality, health, retail, events, and more. Affordable websites, AI chatbots, and automation tailored to your industry. Headquartered in Chester, UK since 2018.',
        path: '/industries',
    });

    const industriesData = [
        {
            title: 'Trades & Home Services',
            subtitle: 'Plumbers, Electricians, Gas Engineers, Builders, Roofers, Decorators',
            description: 'You do great work. But if customers cannot find you online, they will call your competitor instead. We build fast, mobile-first websites for tradespeople that generate real enquiries.',
            icon: <Wrench className="w-8 h-8" />,
            features: ['Mobile-first site with click-to-call button', 'Emergency callout page', 'Google Business Profile setup', 'AI chatbot for out-of-hours enquiries'],
        },
        {
            title: 'Restaurants, Cafés & Takeaways',
            subtitle: 'Restaurants, Cafés, Bistros, Takeaways, Catering, Pubs',
            description: 'Your food is excellent. Your online presence should match. We build restaurant websites with online menus, table booking systems, and chatbots that handle reservations around the clock.',
            icon: <UtensilsCrossed className="w-8 h-8" />,
            features: ['Full menu displayed online', 'Online table reservation system', 'AI chatbot for reservations & dietary queries', 'Google-optimised pages'],
        },
        {
            title: 'Beauty, Hair & Wellness',
            subtitle: 'Salons, Spas, Nail Studios, Barbers, Beauticians',
            description: 'Your clients book on their phones. If you do not have an online booking system, you are losing appointments to competitors who do. We build beautiful, mobile-first websites for beauty businesses with integrated booking, gallery, and AI chatbot.',
            icon: <Scissors className="w-8 h-8" />,
            features: ['Online booking system', 'Service menu with pricing', 'Before/after photo gallery', 'AI chatbot for appointment queries'],
        },
        {
            title: 'Health & Fitness',
            subtitle: 'Gyms, Personal Trainers, Yoga Studios, Pilates, CrossFit',
            description: 'Members search for fitness classes online. If your website is outdated or you rely on Facebook, you are invisible to new members. We build gym and fitness websites with class schedules, membership sign-up, and automated reminders.',
            icon: <Dumbbell className="w-8 h-8" />,
            features: ['Class timetable and booking', 'Membership sign-up flow', 'Personal trainer profiles', 'AI chatbot for class queries'],
        },
        {
            title: 'Driving Instructors',
            subtitle: 'ADI Instructors, Driving Schools, Fleet Trainers',
            description: 'Most driving instructors rely on word of mouth. A simple, fast website with an online booking form and Google visibility can double your enquiries within weeks.',
            icon: <Car className="w-8 h-8" />,
            features: ['Online lesson booking form', 'Pass rate and testimonials', 'Google-optimised local pages', 'Click-to-call button'],
        },
        {
            title: 'Events & Entertainment',
            subtitle: 'DJs, Photographers, Videographers, Magicians, Bands, MCs',
            description: 'Every week without a website is a wedding or corporate event you did not get asked to quote for. We build portfolio websites for entertainers that showcase your work and capture enquiries automatically.',
            icon: <Camera className="w-8 h-8" />,
            features: ['Portfolio and showreel gallery', 'Enquiry and availability form', 'Package pricing display', 'AI chatbot for booking queries'],
        },
        {
            title: 'Kids Parties & Family Entertainment',
            subtitle: 'Party Organisers, Face Painters, Soft Play Hire, Balloon Artists',
            description: 'Most party businesses run entirely from Facebook. A simple website with a booking form and Google presence puts you in front of parents who are searching right now — not just your existing followers.',
            icon: <Star className="w-8 h-8" />,
            features: ['Service and package descriptions', 'Online booking and deposit form', 'Photo gallery', 'FAQ section'],
        },
        {
            title: 'Independent Retail',
            subtitle: 'Shops, Boutiques, Gift Stores, Florists, Delis, Bookshops',
            description: 'Independent shops are losing footfall to online competitors. We build retail websites with online stores, click-and-collect, and local SEO so customers can find and buy from you wherever they are.',
            icon: <ShoppingBag className="w-8 h-8" />,
            features: ['Online shop or product catalogue', 'Click-and-collect system', 'Google Shopping integration', 'Local SEO setup'],
        },
        {
            title: 'Outdoor & Sports Activities',
            subtitle: 'Activity Centres, Climbing Walls, Kayaking, Cycling, Archery',
            description: 'Group bookings are your bread and butter. Without an online booking system, you are taking every reservation by phone or email. We build activity websites with online booking, group management, and waiver collection.',
            icon: <Bike className="w-8 h-8" />,
            features: ['Online group booking system', 'Activity descriptions and pricing', 'Digital waiver collection', 'Seasonal availability calendar'],
        },
        {
            title: 'Technology & Professional Services',
            subtitle: 'Startups, SaaS Companies, Consultancies, Law Firms, Accountants',
            description: 'You need a website that communicates credibility and converts visitors into leads. We build professional service websites with case studies, lead capture, and AI chatbots that qualify enquiries before they reach your inbox.',
            icon: <Laptop className="w-8 h-8" />,
            features: ['Professional, credibility-focused design', 'Case study and portfolio section', 'Lead capture and qualification chatbot', 'Integration with CRM or email tools'],
        },
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
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Industries</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            We Know Your Industry. We Build What Works for It.
                        </h1>
                        <p className="text-base sm:text-lg text-surface/80 mb-8">
                            Generic websites do not convert customers. We build digital solutions designed specifically for how your type of business works — whether you are a plumber, a restaurant, a beauty salon, or a gym. Headquartered in Chester, UK. Delivering worldwide since 2018.
                        </p>
                        <a
                            href="#industries"
                            className="inline-flex items-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Find Your Industry Below <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="bg-background py-12 px-4 sm:px-6 lg:px-8 border-b border-surface">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-base sm:text-lg text-primary/70 leading-relaxed">
                        Every industry is different. A beauty salon needs an online booking system. A plumber needs a fast-loading mobile site with a click-to-call button. A restaurant needs a chatbot that handles table enquiries at midnight. Infonix Solutions understands these differences — wherever you are in the world, we ask the right questions, understand how your business actually works, and build a digital solution that fits.
                    </p>
                </div>
            </section>

            {/* Industry Cards */}
            <section id="industries" className="bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industriesData.map((ind, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-surface hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-surface/50 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-background transition-colors duration-300 flex-shrink-0">
                                        {ind.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-primary">{ind.title}</h3>
                                        <p className="text-xs text-primary/50 mt-0.5">{ind.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-primary/70 leading-relaxed mb-4 text-sm">
                                    {ind.description}
                                </p>
                                <ul className="space-y-1.5">
                                    {ind.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-center gap-2 text-sm text-primary/60">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UK Coverage Statement */}
            <section className="bg-surface py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-accent">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Headquartered in Chester, UK. Working Worldwide.</h2>
                    <p className="text-primary/70 leading-relaxed mb-6">
                        Infonix Solutions is headquartered in Chester, UK and has been working with businesses globally since February 2018. Our team of 20 spans the UK, India, and Sri Lanka — giving us the capacity to deliver high-quality work quickly and at prices that work for independent businesses, not just large corporations.
                    </p>
                    <p className="text-primary/50 text-sm mb-6">We are not a faceless agency. We are a team that cares about the businesses we work with.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                        <a href="tel:+441244840089" className="text-secondary hover:text-primary transition-colors font-bold">01244 840089</a>
                        <span className="hidden sm:inline text-primary/30">·</span>
                        <a href="mailto:hello@infonixsolutions.co.uk" className="text-secondary hover:text-primary transition-colors font-bold">hello@infonixsolutions.co.uk</a>
                        <span className="hidden sm:inline text-primary/30">·</span>
                        <a href="https://www.linkedin.com/company/105996236" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors font-bold">LinkedIn</a>
                    </div>
                </div>
            </section>

            {/* Founding Client Offer */}
            <section className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-surface">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">Limited Availability</h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Become a Founding Client</h3>
                    <p className="text-primary/70 leading-relaxed mb-8">
                        We are currently accepting a small number of founding client projects at preferential rates. If you are a business looking for a modern website, AI chatbot, or automation tool — get in touch now.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center bg-secondary hover:bg-primary text-background font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
                    >
                        Get in Touch Today <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-surface/20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Your Industry. Your Solution. Your Price.
                        </h2>
                        <p className="text-base sm:text-lg text-surface/80 mb-8 leading-relaxed">
                            Tell us what you do, where you are, and what you need — and we will give you a straight answer about what we can build for you and what it will cost. No jargon. No obligation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-background font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg"
                            >
                                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300"
                            >
                                See Our Work <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
