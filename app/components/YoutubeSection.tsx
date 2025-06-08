const CONTENT_URL = 'https://raw.githubusercontent.com/ntingstrom/niti-content/main/youtube.json';

interface Video {
  title: string;
  description: string;
  videoId: string;
  tags: string[];
}

export default async function YoutubeSection() {
  const res = await fetch(CONTENT_URL, { cache: 'force-cache' });
  const videos: Video[] = await res.json();
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">YouTube</h2>
      <ul className="space-y-6">
        {videos.map((v) => (
          <li key={v.videoId} className="border rounded p-4">
            <h3 className="text-xl font-bold">{v.title}</h3>
            <p className="mt-2">{v.description}</p>
            <div className="mt-2 space-x-2">
              {v.tags.map((t) => (
                <span key={t} className="text-sm bg-gray-200 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${v.videoId}`}
                allowFullScreen
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
