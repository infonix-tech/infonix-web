import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { BlogPostPage } from '../../components/common/BlogPostPage';

const InfonixSolutionsUk: React.FC = () => {
    useSEO({
        title: 'Infonix Solutions UK — Software, Web & Business Solutions',
        description:
            'Infonix Solutions is a UK software company based in Chester. We deliver custom software, websites, AI chatbots and automation for businesses in Liverpool, the North West and across the UK since 2018.',
        path: '/blog/infonix-solutions-uk',
        keywords: [
            'Infonix Solutions UK',
            'Infonix Solutions',
            'software company Chester',
            'software company Liverpool',
            'software solutions UK',
            'business solutions Chester',
        ],
        articleDate: '2026-06-23',
        articleAuthor: 'Infonix Solutions',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Infonix Solutions UK — Software, Web & Business Solutions',
            description:
                'Infonix Solutions is a UK software company based in Chester delivering custom software, websites, AI and automation.',
            datePublished: '2026-06-23',
            author: { '@type': 'Organization', name: 'Infonix Solutions' },
        },
    });

    const content = (
        <>
            <p className="lead text-lg font-semibold mb-6">
                We are Infonix Solutions—a UK software company based in Chester, delivering custom software, modern websites, AI chatbots and business automation for companies across Liverpool, the North West and the UK since 2018.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Who We Are</h2>
            <p>
                Infonix Solutions is a software and web development company with roots in Chester and a client base spanning the entire UK. We work with small businesses, growing companies, and established enterprises—anyone who needs software, websites or automation built properly.
            </p>
            <p className="mt-4">
                We are not a freelancer or a big offshore agency. We are a tight team of senior engineers, designers and project managers who care about shipping real products that solve real problems.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What We Do</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Custom Software Development</h3>
            <p>
                We build bespoke web applications, internal tools, SaaS platforms, and custom software tailored to your exact business processes. Not off-the-shelf compromises—software built for how your business actually works.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Website Design & Development</h3>
            <p>
                Modern, fast, mobile-first websites that rank on Google and convert visitors into customers. We combine great design with technical SEO so you are visible online and get real enquiries.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">AI Chatbots</h3>
            <p>
                Intelligent chatbots that answer customer questions 24/7, capture leads, and handle common enquiries automatically. Never miss an enquiry outside office hours again.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Business Automation</h3>
            <p>
                Workflow automation that eliminates manual work. Automate quotes, invoicing, follow-ups, bookings—anything that your team is currently doing by hand.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">API Integration & Data Services</h3>
            <p>
                Connect your systems. We build integrations that let your existing tools work together so data flows automatically and you have one source of truth.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Rescue Projects</h3>
            <p>
                Got a project that stalled? Code that is broken? A vendor who abandoned you? We rescue projects and get them back on track.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Infonix Solutions?</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. UK-Based Team You Can Meet</h3>
            <p>
                We are in Chester, with clients across Liverpool, Merseyside, the North West and the UK. You can meet us. Call us. Get same-day responses. No timezone delays, no language barriers.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Senior Engineers — Not Juniors</h3>
            <p>
                Our team has 5+ years experience shipping production software. We have handled everything from startup MVPs to enterprise platforms. You get quality engineers, not junior developers learning on your project.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Fixed, Transparent Pricing</h3>
            <p>
                You get a detailed proposal with fixed pricing before we start. No surprises. No hidden costs. No "it will cost more if scope changes." We scope carefully and quote fairly.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4. Proven Track Record Since 2018</h3>
            <p>
                We have delivered dozens of projects for businesses of all sizes. Websites, custom software, integrations, chatbots, automations. Real, production systems that are working right now.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5. One Partner For All Your Needs</h3>
            <p>
                Need a website? We build it. Need software? We develop it. Need a chatbot? We deploy it. Need automation? We set it up. You do not have to hire five different vendors.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6. Long-Term Support & Partnership</h3>
            <p>
                We do not disappear after launch. We provide ongoing maintenance, support, and help you add features as your business evolves. You stay with us for years, not just months.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">7. GDPR-Aware & Security-First</h3>
            <p>
                We build for UK businesses following GDPR and UK data protection best practices. Security is not an afterthought—it is built in from day one.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Who We Work With</h2>
            <p>We serve businesses across many industries:</p>
            <ul className="my-4 space-y-2 list-disc list-inside">
                <li><strong>Trades & Home Services:</strong> Plumbers, electricians, builders—we build websites that generate enquiries.</li>
                <li><strong>Hospitality:</strong> Restaurants, cafés, takeaways—online menus, booking systems, chatbots.</li>
                <li><strong>Beauty & Wellness:</strong> Salons, spas—online booking, galleries, appointment reminders.</li>
                <li><strong>Health & Fitness:</strong> Gyms, personal trainers—class schedules, membership signup, tracking.</li>
                <li><strong>Retail:</strong> Online stores, inventory management, customer dashboards.</li>
                <li><strong>Events & Venues:</strong> Ticketing, booking systems, customer management.</li>
                <li><strong>Professional Services:</strong> Consultants, agencies—project management, client portals, automations.</li>
                <li><strong>SaaS & Tech:</strong> Startups and scale-ups—custom platforms, integrations, infrastructure.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Process</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Discovery</h3>
            <p>
                We start with a conversation. No sales pitch, no pressure. We listen to your goals, constraints and what matters to you. Then we propose a solution and give you a fixed quote.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Design & Build</h3>
            <p>
                We work in short cycles. You see progress regularly. We share demos every 1-2 weeks so there are no surprises. You can request changes and give feedback throughout.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Launch & Optimise</h3>
            <p>
                We deploy carefully. We test thoroughly. We optimise for speed and SEO. We make sure everything works in the real world before handing it over.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Support & Grow</h3>
            <p>
                After launch, we support you. Bug fixes, feature requests, maintenance—we are there. As your business grows, we help you add more features.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Tech Stack</h2>
            <p>We work with modern, proven technologies:</p>
            <ul className="my-4 space-y-2 list-disc list-inside">
                <li>Frontend: React, TypeScript, Tailwind CSS, modern responsive design</li>
                <li>Backend: Node.js, Python, REST APIs, microservices</li>
                <li>Cloud: AWS, Vercel, cloud hosting and scaling</li>
                <li>AI/ML: LLMs, chatbots, machine learning models</li>
                <li>Database: SQL, NoSQL, real-time data</li>
                <li>DevOps: CI/CD, automated testing, monitoring</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Locations We Serve</h2>
            <p>Headquartered in Chester, we work with clients across:</p>
            <ul className="my-4 space-y-2 list-disc list-inside">
                <li>Liverpool & Merseyside</li>
                <li>Manchester & Greater Manchester</li>
                <li>Wirral</li>
                <li>North West England (all of it)</li>
                <li>Across the UK (we work remote with clients nationwide)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Recent Projects</h2>
            <p>
                We have built websites for local services, custom software for growing e-commerce companies, AI chatbots for customer service, and automation systems that save teams hours every week. Each project is tailored to the specific needs of the business.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Ready To Get Started?</h2>
            <p>
                Let us know what you need. Custom software? Website? Chatbot? Automation? We will give you a free consultation, understand your goals, and propose a solution with a fixed price.
            </p>
            <p className="mt-4">
                <strong>Contact Infonix Solutions today:</strong>
            </p>
            <ul className="my-4 space-y-2 list-disc list-inside">
                <li><strong>Phone:</strong> +44-1244-840089</li>
                <li><strong>Email:</strong> hello@infonixsolutions.co.uk</li>
                <li><strong>Website:</strong> infonixsolutions.co.uk</li>
                <li><strong>Address:</strong> 4 Chantry Court, Chester West Employment Park, Chester, CH1 4QN</li>
            </ul>

            <p className="mt-6 pt-6 border-t border-primary/20 text-sm italic">
                Infonix Solutions Ltd | UK Software Company | Chester | Liverpool | North West | UK
            </p>
        </>
    );

    return <BlogPostPage title="Infonix Solutions UK — Software, Web & Business Solutions" date="June 23, 2026" readTime="7-9 min" content={content} />;
};

export default InfonixSolutionsUk;
