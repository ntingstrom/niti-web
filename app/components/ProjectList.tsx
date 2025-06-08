const CONTENT_URL = 'https://raw.githubusercontent.com/ntingstrom/niti-content/main/projects.json';

interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export default async function ProjectList() {
  const res = await fetch(CONTENT_URL, { cache: 'force-cache' });
  const projects: Project[] = await res.json();
  return (
    <section id="projects" className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projekt</h2>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.title} className="border rounded p-4">
            <a href={p.url} className="text-xl font-bold text-blue-600">
              {p.title}
            </a>
            <p className="mt-2">{p.description}</p>
            <div className="mt-2 space-x-2">
              {p.tags.map((t) => (
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
