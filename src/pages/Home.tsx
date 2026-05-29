import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import TrustIndicators from '../components/home/TrustIndicators';
import CoreServices from '../components/home/CoreServices';
import Industries from '../components/home/Industries';
import WhyInfonix from '../components/home/WhyInfonix';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import { Reveal } from '../components/common/Reveal';
import { Magnetic } from '../components/common/Magnetic';
import heroVideo from '../assets/Website_hero_video.mp4';

const Home: React.FC = () => {
    useSEO({
        title: 'UK Consulting in Software, HR & Finance',
        description:
            'Infonix Solutions is a UK-based consulting firm delivering premium software engineering, HR, and financial advisory services with scalable teams and proven outcomes.',
        path: '/',
        keywords: [
            'Infonix Solutions',
            'UK consulting',
            'software engineering',
            'HR consulting',
            'finance consulting',
            'technology consulting',
        ],
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // 3D Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
            const mouseYRelative = (e.clientY - rect.top) / height - 0.5;
            mouseX.set(mouseXRelative);
            mouseY.set(mouseYRelative);
        }
    };

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    const headline = "Digital Excellence";
    const poweredBy = "Powered By";
    const company = "Infonix Solutions";

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div
            className="bg-background"
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 perspective-[2000px]">
                {/* 1. Background Video Layer - Seamless & Edge-to-Edge */}
                <motion.div
                    style={{
                        y: y2,
                        rotateX,
                        rotateY: useTransform(rotateY, (v) => v * -1),
                        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'source-in'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                >
                    <div className="absolute inset-0 w-full h-full grayscale-[0.2] blur-[4px]">
                        <video
                            src={heroVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        {/* Soft overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-background/40 backdrop-blur-md"></div>
                    </div>
                </motion.div>

                {/* 2. Ambient Atmosphere Shapes */}
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 100, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"
                    />
                </div>

                {/* 3. Hero Content Layer */}
                <motion.div
                    style={{
                        y: y1,
                        opacity,
                        scale,
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center pt-24 sm:pt-28 md:pt-32 px-4"
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center justify-center space-y-2 mb-8"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight overflow-hidden drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                            {headline.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariants}
                                    transition={{ duration: 0.5, delay: 0.8 + i * 0.03 }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-secondary tracking-tight my-2 overflow-hidden drop-shadow-[0_2px_15px_rgba(255,255,255,0.5)]">
                            {poweredBy.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariants}
                                    transition={{ duration: 0.5, delay: 1.2 + i * 0.03 }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary tracking-tight overflow-hidden drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                            {company.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariants}
                                    transition={{ duration: 0.5, delay: 1.5 + i * 0.03 }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 max-w-2xl font-bold drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)] px-2"
                    >
                        Extend your capabilities with premium UK consulting talent in Software Engineering, HR, and Finance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                    >
                        <Magnetic>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 59, 100, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block bg-secondary hover:bg-primary text-background font-extrabold py-4 px-8 sm:py-5 sm:px-14 rounded-full transition-colors duration-300 shadow-xl text-base sm:text-lg uppercase tracking-wider"
                            >
                                Start Transforming Today
                            </motion.a>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </section>

            {/* Content Sections with Reveal */}
            <Reveal>
                <section className="border-t border-surface bg-background">
                    <TrustIndicators />
                </section>
            </Reveal>

            <Reveal>
                <CoreServices />
            </Reveal>

            <Reveal>
                <Industries />
            </Reveal>

            <Reveal>
                <WhyInfonix />
            </Reveal>

            <Reveal>
                <Testimonials />
            </Reveal>

            <Reveal>
                <CTA />
            </Reveal>
        </div>
    );
};

export default Home;
