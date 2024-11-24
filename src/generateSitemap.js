import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemapData = new SitemapStream({ hostname: 'https://nebulaquest.vercel.app/' });

// Add URLs dynamically based on your site's structure
sitemapData.write({ url: '/', changefreq: 'daily', priority: 1.0 }); // Home
sitemapData.write({ url: '/Blog/Continents/Africa', changefreq: 'weekly', priority: 0.8 });
sitemapData.write({ url: '/Blog/Continents/Asia', changefreq: 'weekly', priority: 0.8 });
sitemapData.write({ url: '/Blog/Countries/Asian/Japan', changefreq: 'monthly', priority: 0.6 });
// Add more as needed

sitemapData.end();

// Stream your sitemap to the public folder
streamToPromise(sitemapData).then(data =>
  createWriteStream('./public/sitemap.xml').write(data)
);
