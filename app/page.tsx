import HeroSection from './components/HeroSection';
import ProjectList from './components/ProjectList';
import ArticleList from './components/ArticleList';
import YoutubeSection from './components/YoutubeSection';

export default function Page() {
  return (
    <main className="space-y-16 p-8">
      <HeroSection />
      <ProjectList />
      <ArticleList />
      <YoutubeSection />
    </main>
  );
}
