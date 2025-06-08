const CONTENT_URL = 'https://raw.githubusercontent.com/ntingstrom/niti-content/main/articles.json';

interface Article {
  title: string;
  summary: string;
  published: string;
  tags: string[];
  url: string;
}

export default async function ArticleList() {
  const res = await fetch(CONTENT_URL, { cache: 'force-cache' });
  const articles: Article[] = await res.json();
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Artiklar</h2>
      <ul className="space-y-6">
        {articles.map((a) => (
          <li key={a.title} className="border rounded p-4">
            <a href={a.url} className="text-xl font-bold text-blue-600">
              {a.title}
            </a>
            <p className="text-sm text-gray-500">{a.published}</p>
            <p className="mt-2">{a.summary}</p>
            <div className="mt-2 space-x-2">
              {a.tags.map((t) => (
                <span key={t} className="text-sm bg-gray-200 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
