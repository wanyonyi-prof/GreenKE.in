export default function sitemap() {
const baseUrl = 'https://green-ke-in-uaft.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const routes = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/impact`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/support`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/join`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/share-impact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ];
  
  return routes;
}