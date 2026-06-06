import { useEffect } from 'react';

const SITE_NAME = 'Infonix Solutions';
const SITE_URL = 'https://infonixsolutions.co.uk';
const DEFAULT_IMAGE = `${SITE_URL}/sketch-hero.png`;
const JSONLD_ID = 'page-jsonld';

interface SEOOptions {
    title: string;
    description: string;
    path?: string;
    image?: string;
    keywords?: string[];
    /** Page-specific JSON-LD structured data (Service, FAQPage, BreadcrumbList, etc.). */
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
    let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
    if (!el) {
        if (selector.startsWith('link')) {
            el = document.createElement('link');
            const relMatch = selector.match(/rel="([^"]+)"/);
            if (relMatch) (el as HTMLLinkElement).rel = relMatch[1];
        } else {
            el = document.createElement('meta');
            const nameMatch = selector.match(/name="([^"]+)"/);
            const propMatch = selector.match(/property="([^"]+)"/);
            if (nameMatch) (el as HTMLMetaElement).name = nameMatch[1];
            if (propMatch) (el as HTMLMetaElement).setAttribute('property', propMatch[1]);
        }
        document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
};

export const useSEO = ({ title, description, path = '/', image = DEFAULT_IMAGE, keywords, jsonLd }: SEOOptions) => {
    useEffect(() => {
        const fullTitle = path === '/' ? `${SITE_NAME} — ${title}` : `${title} | ${SITE_NAME}`;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;

        setMeta('meta[name="description"]', 'content', description);
        if (keywords?.length) {
            setMeta('meta[name="keywords"]', 'content', keywords.join(', '));
        }

        setMeta('link[rel="canonical"]', 'href', url);

        setMeta('meta[property="og:title"]', 'content', fullTitle);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[property="og:image"]', 'content', image);
        setMeta('meta[property="og:type"]', 'content', 'website');
        setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);

        setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'content', fullTitle);
        setMeta('meta[name="twitter:description"]', 'content', description);
        setMeta('meta[name="twitter:image"]', 'content', image);

        // Page-specific JSON-LD structured data (replaced on each navigation).
        const prev = document.getElementById(JSONLD_ID);
        if (prev) prev.remove();
        if (jsonLd) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = JSONLD_ID;
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }

        return () => {
            document.getElementById(JSONLD_ID)?.remove();
        };
    }, [title, description, path, image, keywords, jsonLd]);
};
