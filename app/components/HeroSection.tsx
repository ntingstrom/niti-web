const CONTENT_URL = 'https://raw.githubusercontent.com/ntingstrom/niti-content/main/hero.json';

export default async function HeroSection() {
  const res = await fetch(CONTENT_URL, { cache: 'force-cache' });
  const data = await res.json();
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-xl mb-8">{data.subtitle}</p>
      <div className="flex justify-center space-x-4">
        <a href={data.cta1.url} className="px-4 py-2 bg-blue-600 text-white rounded">{data.cta1.label}</a>
        <a href={data.cta2.url} className="px-4 py-2 border border-blue-600 text-blue-600 rounded">{data.cta2.label}</a>
      </div>
    </section>
  );
}
