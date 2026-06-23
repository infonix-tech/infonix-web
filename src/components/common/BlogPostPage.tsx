import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
    title: string;
    date: string;
    readTime: string;
    author?: string;
    content: React.ReactNode;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ title, date, readTime, author = 'Infonix Solutions', content }) => {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-primary text-surface py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-surface/80 hover:text-surface mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            {title}
                        </h1>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-surface/80">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{readTime} read</span>
                            </div>
                            <div>By {author}</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="prose prose-lg max-w-none text-primary leading-relaxed"
                    >
                        {content}
                    </motion.article>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 pt-8 border-t border-primary/20"
                    >
                        <h3 className="text-xl font-semibold text-primary mb-4">Ready to improve your business?</h3>
                        <p className="text-primary/70 mb-6">
                            Get in touch with our team to discuss how we can help you with software, websites, AI or automation.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-colors"
                        >
                            Get a Free Quote
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
