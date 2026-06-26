import { Router, useRouter } from './router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';
import LibraryPage from './pages/LibraryPage';
import ArticlesPage from './pages/ArticlesPage';
import SummariesPage from './pages/SummariesPage';
import SeminarsPage from './pages/SeminarsPage';
import NewsPage from './pages/NewsPage';
import AssistantPage from './pages/AssistantPage';
import WritingPage from './pages/WritingPage';
import CommunityPage from './pages/CommunityPage';
import Maintenance from './pages/Maintenance';
function Routes() {
  const { path } = useRouter();

  const pages: Record<string, JSX.Element> = {
    '/': <HomePage />,
    '/academy': <AcademyPage />,
    '/library': <LibraryPage />,
    '/articles': <ArticlesPage />,
    '/summaries': <SummariesPage />,
    '/seminars': <SeminarsPage />,
    '/news': <NewsPage />,
    '/assistant': <AssistantPage />,
    '/writing': <WritingPage />,
    '/community': <CommunityPage />,
    '/profile': <Maintenance />,
  };

  return pages[path] ?? <HomePage />;
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}
