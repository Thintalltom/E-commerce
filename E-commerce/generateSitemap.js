import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://ecom-umber-delta.vercel.app/' });

    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    ];

    links.forEach(link => sitemap.write(link));
    sitemap.end();

    const sitemapBuffer = await streamToPromise(sitemap);
    createWriteStream('public/sitemap.xml').write(sitemapBuffer);
}

generateSitemap().then(() => console.log('✅ Sitemap generated successfully.'));
