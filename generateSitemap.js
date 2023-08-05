const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Replace 'YOUR_WEBSITE_URL' with your actual website URL
const websiteUrl = 'http://localhost:3001/';

// Add all the routes of your website here
const routes = [
  '/',
  '/blog',
  '/faq',
  '/conditions',
  // Add more routes here
];

(async function generateSitemap() {
  const stream = new SitemapStream({ hostname: websiteUrl });

  // Add each route to the sitemap
  routes.forEach((route) => {
    stream.write({ url: route, changefreq: 'weekly', priority: 0.7 });
  });

  stream.end();

  // Create a sitemap.xml file in the public directory
  const sitemap = (await streamToPromise(stream)).toString();
  fs.writeFileSync('./public/sitemap.xml', sitemap);

  console.log('Sitemap generated successfully!');
})();
