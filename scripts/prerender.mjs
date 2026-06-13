// Postbuild prerender: generate a static HTML file per route with unique
// <title>, description, canonical and social tags baked into the HTML so
// search engines see correct, non-duplicate metadata before JavaScript runs.
//
// Runs after `vite build`. Uses dist/index.html as the template and writes
// dist/<route>/index.html for each non-home route. The home route keeps the
// original dist/index.html (already has the correct homepage meta).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://infonixsolutions.co.uk';
const SUFFIX = ' | Infonix Solutions';

// Single source of truth for per-route static meta (mirrors each page's useSEO).
const routes = {
    services: {
        title: 'Software, Web & Business Solutions — Services',
        description:
            'Software development, website design, AI chatbots, business automation and technical rescue projects for companies in Liverpool, the North West and across the UK. Competitive fixed prices since 2018.',
    },
    'uk-software-development-company': {
        title: 'UK Software Development Company',
        description:
            'Infonix Solutions is a UK software development company building custom software, web platforms, AI and automation for businesses nationwide. UK-based team, fixed pricing, proven products since 2018. Get a free quote.',
    },
    'software-solutions-liverpool': {
        title: 'Software, Web & Business Solutions in Liverpool',
        description:
            'Looking for software, web or business solutions in Liverpool? Infonix Solutions builds custom software, websites, AI chatbots and automation for businesses across Liverpool, Merseyside and the North West. Free quote.',
    },
    about: {
        title: 'About Us — UK Software & Business Solutions Agency',
        description:
            'Infonix Solutions is a UK software and business solutions agency founded in 2018, based in Chester and serving Liverpool, the North West and beyond. A team of 20 helping businesses get found online, automate operations and grow.',
    },
    industries: {
        title: 'Industries We Serve — Software, Web & Business Solutions',
        description:
            'Software, web and business solutions for trades, hospitality, health, retail, events and more across Liverpool, the North West and the UK. Websites, AI chatbots and automation tailored to your industry since 2018.',
    },
    projects: {
        title: 'Our Work — Software & Web Solutions Portfolio',
        description:
            'Software and web solutions engineered by Infonix Solutions — Swiftly, GiftGrow, HighStreetDeals and Autism Connect Hub. Custom builds for businesses in Liverpool, the North West and across the UK.',
    },
    contact: {
        title: 'Contact Us — Get a Free Quote for Software & Business Solutions',
        description:
            'Get a free quote for software, web and business solutions. Call 01244 840089 or email hello@infonixsolutions.co.uk — serving Liverpool, the North West and the UK from Chester.',
    },
    blog: {
        title: 'Blog — Software, Web & Digital Growth Tips for UK Businesses',
        description:
            'Practical advice for UK businesses on software solutions, websites, AI chatbots, local SEO and digital growth from Infonix Solutions — serving Liverpool, the North West and the UK.',
    },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const replaceTag = (html, regex, replacement, label, route) => {
    if (!regex.test(html)) {
        console.warn(`  ⚠ ${route}: could not find ${label} to replace`);
        return html;
    }
    return html.replace(regex, replacement);
};

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

let count = 0;
for (const [path, meta] of Object.entries(routes)) {
    const fullTitle = esc(`${meta.title}${SUFFIX}`);
    const desc = esc(meta.description);
    const url = `${SITE}/${path}`;

    let html = template;
    html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${fullTitle}</title>`, 'title', path);
    html = replaceTag(html, /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="description" content="${desc}" />`, 'description', path);
    html = replaceTag(html, /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/, `<link rel="canonical" href="${url}" />`, 'canonical', path);
    html = replaceTag(html, /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:title" content="${fullTitle}" />`, 'og:title', path);
    html = replaceTag(html, /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:description" content="${desc}" />`, 'og:description', path);
    html = replaceTag(html, /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:url" content="${url}" />`, 'og:url', path);
    html = replaceTag(html, /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:title" content="${fullTitle}" />`, 'twitter:title', path);
    html = replaceTag(html, /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:description" content="${desc}" />`, 'twitter:description', path);

    const outDir = join(DIST, path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    count++;
    console.log(`  ✓ /${path}`);
}

console.log(`Prerendered ${count} route(s) with unique static meta.`);
